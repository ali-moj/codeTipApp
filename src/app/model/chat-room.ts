import {FileRequest} from './file-request';

export class ChatRoom {
  id: number;
  name: string;
  users: number[];
  url : string;
  file:FileRequest;
}
