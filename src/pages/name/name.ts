import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { nameApiService } from '../service/nameapi.service';

//Necesario para poder usar Observables con http
import 'rxjs/add/operator/map';
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

  //Esto lo usaremos en la plantilla
  nombres = [];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public name: nameApiService) {
  }

  /**
   * @description Ejecutamos esto al inicio de la pagina.
   * 
   * @see nameapi.service.ts
   * Solicitamos getNombres del servicio.
   * Mapeamos los datos y los pasamo a json.
   * Nos 'subscribimos' para hacer realizar una operacion por cada dato.
   * Por ultimo: convertimos los datos a un Array y lo asignamos a la variable nombres
   */
  ngOnInit() {
    this.name.getNombres()
    .map(res => res.json())
    .subscribe((data) => {
        this.nombres = data['results'];
      }
    );
  }

}
