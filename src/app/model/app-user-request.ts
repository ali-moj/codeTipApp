import {FileRequest} from './file-request';

export class AppUserRequest {
  username: string;
  password: string;
  confirm: string;
  fullName: string;
  token: string;
  file: FileRequest;
  admin: boolean;
  id: number;
}
