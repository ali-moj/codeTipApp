import { Injectable, OnDestroy } from '@angular/core';
import { StompService, StompState } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AuthService } from '../core/auth.service';
import { ApiUrlList } from '../setting/ApiUrlList';
import { AppSetting } from '../setting/app-setting';
import { SharedDataService } from './shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class SocketHandlerService implements OnDestroy {
  stompConfig: any;
  stompService: StompService;
  messages: Observable<Message>;

  stompState: Observable<StompState>;

  roomSubscribtion: Subscription;

  queueSubscribtions: Subscription[] = [];

  constructor(private _auth: AuthService, private _data: SharedDataService) {
    // prepare connection
    this.initialize();

    // listen to rooms list changes and resubscribe if required
    this.roomSubscribtion = this._data.roomList.subscribe(rooms => {
      // check for room existance
      if(!rooms) {
        return;
      }

      this.queueSubscribtions.forEach(sub => {
        sub.unsubscribe();
      })

      // resubscribe too rooms
      rooms.forEach((room, index) => {
        this.queueSubscribtions[index] = this.stompService.subscribe(`/user/queue/room/${room.id}`).subscribe(msg => {
          this._data.setNewMessage(JSON.parse(msg.body));
        });
      });

      // subscribe to a global notification
    this.queueSubscribtions[this.queueSubscribtions.length] = this.stompService.subscribe('/user/queue/notify').subscribe(msg => {
      this._data.setNewMessage(JSON.parse(msg.body));
    });
    });
  }

  private initialize() {
    const url = `${ApiUrlList.websocketUrl}${this._auth.userInfo().token}`;
    this.stompConfig = {
      url: url,
      heartbeat_in: AppSetting.socketHeartBeatIn,
      heartbeat_out: AppSetting.socketHeartBeatOut,
      reconnect_delay: AppSetting.socketReconnectDelay,
      debug: () => {}
    };

    // connect to server
    this.stompService = new StompService(this.stompConfig);
  }

  public stream(): Observable<Message> {
    return this.messages;
  }

  public send(url: string, message: any) {
    return this.stompService.publish(url, JSON.stringify(message));
  }

  public state(): BehaviorSubject<StompState> {
    return this.stompService.state;
  }

  ngOnDestroy(): void {
    this.roomSubscribtion.unsubscribe();
    this.queueSubscribtions.forEach(sub => {
      sub.unsubscribe();
    })
  }
}
