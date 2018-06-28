import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlickrPage } from './flickr';

import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
} from '@angular/material';

@NgModule({
  declarations: [
    FlickrPage,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  imports: [
    IonicPageModule.forChild(FlickrPage),
  ],
})
export class FlickrPageModule { }
