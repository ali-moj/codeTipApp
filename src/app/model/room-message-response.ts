import { MessageResponse } from './message-response';

export class RoomMessageResponse {
  messages: MessageResponse[];
  lastSeenId: number;
}
