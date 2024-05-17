import { MessageType } from './message-type.enum';

export class MessageResponse {

  userName   : string;
  userAvatar : string;
  roomId     : number;
  userId     : number;
  body       : string;
  time       : number;
  id         : number;
  type       : number;
  messageType: MessageType;
  seen       : boolean;
  offsetTop  : number;
}
