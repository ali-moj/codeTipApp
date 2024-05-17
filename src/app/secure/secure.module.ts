import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';
import { HttpClient } from '@angular/common/http';
import {IonicModule} from '@ionic/angular';




@NgModule({
  declarations: [
    SecureComponent,
  ],
  imports: [
    CommonModule,
    SecureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
    providers:[],
  entryComponents: []
})
export class SecureModule {
}
