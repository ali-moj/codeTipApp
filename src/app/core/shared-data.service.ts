import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RoomResponse } from '../model/room-response';
import { SocketMessage } from '../model/socket-message';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private roomsSubject = new BehaviorSubject<RoomResponse[]>(null);
  private messageSubject = new BehaviorSubject<SocketMessage>(null);
  private langSubject = new BehaviorSubject<string>('');

  constructor() {}

  get roomList(): Observable<RoomResponse[]> {
    return this.roomsSubject.asObservable();
  }

  setRoomList(value: RoomResponse[]) {
    this.roomsSubject.next(value);
  }

  setNewMessage(value: SocketMessage) {
    this.messageSubject.next(value);
  }

  get newMessage(): Observable<SocketMessage> {
    return this.messageSubject.asObservable();
  }

  getUnread(roomId: number): number {
    const room = this.roomsSubject.value.find(x => x.id === roomId);
    if (!room) {
      return;
    }

    if (!room.unread) {
      return 0;
    } else {
      return room.unread;
    }
  }

  setUnread(roomId: number, count: number) {
    const room = this.roomsSubject.value.find(x => x.id === roomId);
    if (!room) {
      return;
    }
    room.unread = count;
  }

  getRooms() {
    return this.roomsSubject.value;
  }

  updateRoom(room: RoomResponse) {
    const prevRoom = this.roomsSubject.value.find(x => x.id === room.id);
    if(!prevRoom) {
      return;
    }

    prevRoom.name = room.name;
    prevRoom.url = room.url;
  }

  addRoom(room: RoomResponse) {
    const prevRoom = this.roomsSubject.value.find(x => x.id === room.id);
    if(prevRoom) {
      return;
    }

    // TODO: only emit rooms that changed not all rooms
    this.roomsSubject.value.push(room);
    this.roomsSubject.next(this.roomsSubject.value);
  }

  removeRoom(roomId: number) {
    const prevRoom = this.roomsSubject.value.findIndex(x => x.id === roomId);
    if(prevRoom < 0) {
      return;
    }

    // TODO: only emit rooms that changed not all rooms
    this.roomsSubject.value.splice(prevRoom, 1)
    this.roomsSubject.next(this.roomsSubject.value);
  }

  setLanguage(lang: string) {
    this.langSubject.next(lang);
  }

  get language(): Observable<string> {
    return this.langSubject.asObservable();
  }
}
