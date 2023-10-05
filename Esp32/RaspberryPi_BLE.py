import asyncio
from bleak import BleakScanner, BleakClient

# ESP32のデバイスを識別するためのUUID 
#ESP32_UUIDs = ["34:85:18:9D:72:59"]
ESP32_UUIDs = ["C0:49:EF:67:FD:DA"]

# Nordic UART Service (NUS)
#NUS_UUID = '6e400002-b5a3-f393-e0a9-e50e24dcca9e'
#RX_UUID = '93222d1f-2837-4f1d-88d0-e30b6d1935e1'

# コールバック関数: データが送信されたときに呼び出される
def notification_handler(sender: int, data: bytearray, **_kwargs):
    print(f"Received: {data.decode()} (from {sender})")

async def run():

    # 1. 周囲のBLE発信をスキャン
    scanner = BleakScanner()
    devices = await scanner.discover()

    clients = []
    for device in devices:
        print(f'name:{device.name},address:{device.address}')
        if device.address in ESP32_UUIDs:
            client = BleakClient(device)
            clients.append(client)


    try:
        
        # 2. クライアント（ESP32などのデバイス）とデータのやり取りをする
        for client in clients:
            await client.connect()

            # Characteristicの情報を得る
            for service in client.services:
                print('---------------------')
                print(f"service uuid:{service.uuid}, description:{service.description}")
                [print(f'{c.properties},{c.uuid}',) for c in service.characteristics]
            
            #await client.start_notify('93222d1f-2837-4f1d-88d0-e30b6d1935e1', notification_handler)
                await client.start_notify('cd4e5793-eb97-4364-8193-4f5fcb7ef69b', notification_handler)
            
            
        while True:
            # 実際のアプリケーションではここで何らかの処理
            await asyncio.sleep(1.0)
    finally:
        print(14)
        # for client in clients:
        #     await client.stop_notify(RX_UUID)
        #     await client.disconnect()

asyncio.run(run())