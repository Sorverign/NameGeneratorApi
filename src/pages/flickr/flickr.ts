import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FlickrService } from '../service/flickr.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap'
import { HomePage } from '../home/home';
/**
 * Generated class for the FlickrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flickr',
  templateUrl: 'flickr.html',
})
export class FlickrPage implements OnInit{
  //-----
  busqueda = new FormControl();
  model$: Observable<string>;
  fotos: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, private flick: FlickrService) {
  }

  ngOnInit() {
    this.busqueda.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap((query: string) => this.flick.getResultados(query))
      .subscribe(value => {
        this.fotos = value;
      });
  }

}
