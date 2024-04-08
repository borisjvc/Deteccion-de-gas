import asyncio
import websockets
import mysql.connector
import serial
import json

# Configuración de la base de datos
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'arduino_gas'
}

# Configura el puerto serial según tu configuración de Arduino
arduino_serial = "a"

def update_config(tipo, valor):
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()
        query = "UPDATE datos_sensor SET {} = %s ORDER BY id_sensorData DESC LIMIT 1".format(tipo)
        cursor.execute(query, (valor,))
        conn.commit()
    except mysql.connector.Error as e:
        print(f"Error de base de datos: {e}")
    finally:
        cursor.close()
        conn.close()

def get_sensor_data():
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()
        cursor.execute("SELECT nivel_gas, volumen, umbral, alarma FROM datos_sensor ORDER BY id_sensorData DESC LIMIT 1")
        row = cursor.fetchone()
        if row:
            return {
                'nivel_gas': row[0],
                'volumen': row[1],
                'umbral': row[2],
                'alarma': row[3]
            }
        else:
            return None
    except mysql.connector.Error as e:
        print(f"Error de base de datos: {e}")
        return None
    finally:
        cursor.close()
        conn.close()

async def handle_arduino(websocket, path):
    print("datos")
    status = get_sensor_data()
    await websocket.send(json.dumps(status))  # Enviar estado actual al cliente al conectarse

    async for message in websocket:
        print(message)
        try:
            data = json.loads(message)
            print(data)
            if 'alarmVolume' in data:
                update_config(tipo='volumen', valor=data['alarmVolume'])
                arduino_serial.write(f"0 {data['alarmVolume']}".encode())
            if 'threshold' in data:
                update_config(tipo='umbral', valor=data['threshold'])
                arduino_serial.write(f"1 {data['threshold']}".encode())
            if 'alarmOff' in data:
                update_config(tipo='alarma', valor=data['alarmOff'])
                arduino_serial.write(f"2 {data['alarmOff']}".encode())
            await websocket.send(message)  # Opcional: Confirmar el cambio al cliente
        except json.JSONDecodeError:
            print(f"Error al decodificar el mensaje: {message}")

async def start_server():
    async with websockets.serve(handle_arduino, "localhost", 8765):
        print("Servidor WebSocket iniciado en el puerto 8765")
        await asyncio.Future()  # Ejecuta el servidor indefinidamente

if __name__ == "__main__":
    asyncio.run(start_server())
