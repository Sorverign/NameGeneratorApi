import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//-----------------
import { FlickrService } from '../pages/service/flickr.service';
//-----------------
import { FlickrPage } from '../pages/flickr/flickr';

import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
} from '@angular/material';
import { HttpModule } from '@angular/http';
import { nameApiService } from '../pages/service/nameapi.service';
import { NamePage } from '../pages/name/name';

import { IntroPage } from "../pages/intro/intro";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FlickrPage,
    NamePage,
    IntroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {scrollAssist: false, autoFocusAssist: false}),
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FlickrPage, //paginas
    NamePage,
    IntroPage
  ],
  providers: [
    StatusBar,
,    
    SplashScreen,
    FlickrService, //Servicios
    nameApiService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
