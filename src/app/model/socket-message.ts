import { MessageResponse } from 'src/app/model/message-response';
import { RoomResponse } from 'src/app/model/room-response';

export class SocketMessage {
  roomId : number;
  type   : number;
  message: MessageResponse;
  room: RoomResponse;
  lastSeenId: number;
}
