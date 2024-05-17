import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenericResponse } from '../model/GenericResponse';
import { AppUser } from '../model/AppUser';
import { ApiUrlList } from '../setting/ApiUrlList';
import { RoomResponse } from '../model/room-response';
import { MessageRequest } from '../model/message-request';
import { MessageResponse } from '../model/message-response';
import { AppUserRequest } from '../model/app-user-request';
import { FileMessageRequest } from '../model/file-message-request';
import { UserRoom } from '../model/user-room';
import { RoomMessageResponse } from 'src/app/model/room-message-response';
import {ChatRoom} from '../model/chat-room';

@Injectable()
export class ChatService {

  constructor(private _http: HttpClient) {
  }

  getUserList(): Observable<GenericResponse<AppUser[]>> {
    const url = ApiUrlList.getUserList;
    return this._http.get<GenericResponse<AppUser[]>>(url);
  }


  createNewRoom(request: ChatRoom): Observable<GenericResponse<number>> {
    const url = ApiUrlList.createNewChatRoom;
    return this._http.post<GenericResponse<number>>(url, request);

  }

  editRoom(request: ChatRoom): Observable<GenericResponse<number>> {
    const url = ApiUrlList.editRoom;
    return this._http.post<GenericResponse<number>>(url, request);

  }

  chatRoomList(userId: number): Observable<GenericResponse<RoomResponse[]>> {
    let url = `${ApiUrlList.userRoomList}${userId}`;
    return this._http.get<GenericResponse<RoomResponse[]>>(url);
  }

  sendMessage(message: MessageRequest): Observable<GenericResponse<MessageResponse[]>> {
    let url = ApiUrlList.sendMessage;
    return this._http.post<GenericResponse<MessageResponse[]>>(url, message);
  }

  roomMessages(roomId: number): Observable<GenericResponse<RoomMessageResponse>> {
    let url = ApiUrlList.roomMessage + roomId;
    return this._http.get<GenericResponse<RoomMessageResponse>>(url);
  }

  roomPrevMessages(roomId: number, messageId: number): Observable<GenericResponse<MessageResponse[]>> {
    let url = `${ApiUrlList.roomPrevMessage}${roomId}/${messageId}`;
    return this._http.get<GenericResponse<MessageResponse[]>>(url);
  }

  createNewUser(request: AppUserRequest): Observable<GenericResponse<number>> {
    //create-new-user
    let url = ApiUrlList.createNewUser;
    return this._http.post<GenericResponse<number>>(url, request);
  }

  sendFileMessage(message: FileMessageRequest): Observable<GenericResponse<MessageResponse[]>> {
    let url = ApiUrlList.sendFileMessage;
    return this._http.post<GenericResponse<MessageResponse[]>>(url, message);
  }

  allRoomList(): Observable<GenericResponse<RoomResponse[]>> {
    let url = `${ApiUrlList.roomList}`;
    return this._http.get<GenericResponse<RoomResponse[]>>(url);
  }

  getRoomUsers(id: number): Observable<GenericResponse<AppUser[]>> {
    let url = `${ApiUrlList.roomUsers}/${id}`;
    return this._http.get<GenericResponse<AppUser[]>>(url);
  }

  deleteRoom(id: number): Observable<GenericResponse<boolean>> {
    let url = `${ApiUrlList.roomUsers}/${id}`;
    return this._http.delete<GenericResponse<boolean>>(url);
  }

  AddUserToRoom(request: UserRoom): Observable<GenericResponse<AppUser>> {
    let url = ApiUrlList.addRoomUser;
    return this._http.post<GenericResponse<AppUser>>(url, request);
  }

  removeUserFromRoom(request: UserRoom): Observable<GenericResponse<AppUser>> {
    let url = ApiUrlList.removeRoomUser;
    return this._http.post<GenericResponse<AppUser>>(url, request);
  }

  seenMessage(id: number): Observable<GenericResponse<number>> {
    let url = ApiUrlList.seenMessage;
    return this._http.post<GenericResponse<number>>(url, id);
  }
}
