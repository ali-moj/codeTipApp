import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth.service';
import {ToastController} from '@ionic/angular';
import {OperationResult} from '../../model/OperationResult';
import { Subscription } from 'rxjs';
import {SharedDataService} from '../../core/shared-data.service';
import {ChatService} from '../../core/chat.service';
import {SocketHandlerService} from '../../core/socket-handler.service';
import {RoomResponse} from '../../model/room-response';
import {GenericResponse} from '../../model/GenericResponse';
import {StompState} from '@stomp/ng2-stompjs';
import {BackgroundMode} from '@ionic-native/background-mode/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ChatService,LocalNotifications,BackgroundMode]
})
export class HomePage implements OnInit{
    msgSubscription: Subscription;
    connectionState: boolean = false;



  constructor(
              private _auth: AuthService,
              public toastController: ToastController,
              private _room: ChatService,
              private _socket: SocketHandlerService,
              private _data: SharedDataService,
              public _notification: LocalNotifications,
              public platform :Platform,
              private _backgroundMode: BackgroundMode) {
      this.msgSubscription = this._data.newMessage.subscribe(msg => {
          if(!msg) {
              return;
          }

          // TODO: if it's a chat message check for url and if route is chat ignore otherwise show a notification
          if(msg.type === 1) {

          } else if(msg.type === 0) {
              // global notification
          } else if(msg.type === 4) {
              // room edited notification
              this._data.updateRoom(msg.room);
          } else if(msg.type === 5) {
              // add room to users room list
              this._data.addRoom(msg.room);
          } else if(msg.type === 6) {
              // remove room from users room list
              this._data.removeRoom(msg.room.id);
          }
      });


      let response: GenericResponse<RoomResponse[]>;
      this._room.chatRoomList(this._auth.userInfo().id).subscribe(
          (data: GenericResponse<RoomResponse[]>) => {
              response = data;
          },
          () => {},
          () => {
              if (response.operationResult === OperationResult.Success)
                  this._data.setRoomList(response.result);
          }
      );

      this._socket.state().subscribe(state => {
          if (state === StompState.CONNECTED) {
              this.connectionState = true;
          } else {
              this.connectionState = false;
          }
      });
  }


    ngOnInit(): void {
        this._backgroundMode.enable();
        this._backgroundMode.wakeUp();
        this._backgroundMode.moveToForeground();
        this._notification.schedule({
            text: 'Delayed ILocalNotification',
            trigger: {at: new Date(new Date().getTime() + 3600)},
            led: 'FF0000',
            sound: null

        });

        this.presentToast('user :' + this._auth.userInfo().fullName).then();
    }

    async presentToast(me :string) {
        const toast = await this.toastController.create({
            message: me,
            duration: 2000
        });
        toast.present();
    }


}
