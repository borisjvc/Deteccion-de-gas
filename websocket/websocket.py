import asyncio
import websockets
import mysql.connector
import serial
import json
import time

# Configuración de la base de datos
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'arduino_gas'
}

# Configura el puerto serial según tu configuración de Arduino
arduino_serial = serial.Serial('COM4', 9600, timeout=1)
connected_clients = set()
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

def update_data(state):
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()
        query = "INSERT INTO datos_sensor (nivel_gas) VALUES (%s)"
        cursor.execute(query, (state,))
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

def arduino_data():
    arduino_serial.write(b'get_state\n')  # Solicita el estado actual
    time.sleep(0.1)  # Da tiempo al Arduino para responder
    if arduino_serial.inWaiting() > 0:
        state = arduino_serial.readline().decode().strip()
        update_data(state)
        return get_sensor_data()
    return "0"  # Devuelve un estado predeterminado si no hay respuesta

async def handle_arduino(websocket, path):
    connected_clients.add(websocket)
    status = arduino_data()
    await websocket.send(json.dumps(status))  # Enviar estado actual al cliente al conectarse
    async for message in websocket:
        try:
            data = json.loads(message)
            if 'alarmVolume' in data:
                update_config(tipo='volumen', valor=data['alarmVolume'])
                arduino_serial.write(f"0 {data['alarmVolume']}".encode())
            if 'threshold' in data:
                update_config(tipo='umbral', valor=data['threshold'])
                arduino_serial.write(f"1 {data['threshold']}".encode())
            if 'alarmOff' in data:
                update_config(tipo='alarma', valor=data['alarmOff'])
                arduino_serial.write("alarma".encode())
            status = arduino_data()
            print(connected_clients)
            for client in connected_clients:
                await client.send(json.dumps(status))
        except json.JSONDecodeError:
            print(f"Error al decodificar el mensaje: {message}")

async def start_server():
    async with websockets.serve(handle_arduino, "0.0.0.0", 3000):
        print("Servidor WebSocket iniciado en el puerto 3000")
        await asyncio.Future()  # Ejecuta el servidor indefinidamente

if __name__ == "__main__":
    asyncio.run(start_server())
