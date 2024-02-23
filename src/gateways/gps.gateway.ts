import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class GpsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('gpsLocation')
  handleGpsLocation(
    client: Socket,
    payload: { lat: number; lng: number },
  ): void {
    // Aquí puedes manejar la ubicación GPS que recibes del dispositivo móvil
    // Por ejemplo, puedes emitir un evento a todos los clientes conectados con la nueva ubicación
    this.server.emit('newGpsLocation', payload);
  }

}
