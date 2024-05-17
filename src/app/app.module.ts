import {ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CookieService} from 'ngx-cookie-service';
import {GlobalErrorHandler} from './core/global-error-handler';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SecureModule} from './secure/secure.module';
import {LocalNotifications} from '@ionic-native/local-notifications';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    SecureModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
