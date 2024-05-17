import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Router } from '@angular/router';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
})
export class SecureComponent implements OnInit, OnDestroy {
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'List',
            url: '/list',
            icon: 'list'
        }
    ];


    //...............
    ngOnDestroy(): void {
    }

    ngOnInit(): void {
    }
  // TODO: create a message model that can handle global messages, chat messages, seen messages and so on.
  // TODO: no need to push global messages in message list and showing a notification is enough.
  messageList: any[] = [];

  msgSubscription: Subscription;

  connectionState: boolean = false;

  constructor(

    private _router: Router,
  ) {




}
}
