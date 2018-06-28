import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { nameApiService } from '../service/nameapi.service';

/**
 * Generated class for the NamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-name',
  templateUrl: 'name.html',
})
export class NamePage implements OnInit {

  nombres = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public name: nameApiService) {
  }

  ngOnInit() {
    this.name.getNombres()
    .map(res => res.json())
    .subscribe((data) => {
        this.nombres = data['results'];
      }
    );
  }

}
