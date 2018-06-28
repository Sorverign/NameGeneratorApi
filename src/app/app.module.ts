import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyApp } from './app.component';
//----------------
import { HomePage } from '../pages/home/home';
//-----------------

import { HttpModule } from '@angular/http';
import { nameApiService } from '../pages/service/nameapi.service';
import { NamePage } from '../pages/name/name';


@NgModule({
  declarations: [
    MyApp,
    HomePage, //Paginas
    NamePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false }),
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NamePage,
  ],
  providers: [
    StatusBar, 
    SplashScreen,
    nameApiService, //Servicio
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
