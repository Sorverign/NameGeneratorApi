/**
 * @author Almer Ibarra
 * @function Establece los controles para el formulario
 *  
 */

import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FlickrPage } from '../flickr/flickr';
import { NamePage } from '../name/name';
import { IntroPage } from '../intro/intro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  //-------Controles----------
  formulario: FormGroup;
  nombre: FormControl;
  contrasena: FormControl;


  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.createControles();
    this.getControles();
  }

  createControles() {
    this.nombre = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')]);
    this.contrasena = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')]);
  }

  getControles() {
    this.formulario = new FormGroup({
      nombre: this.nombre,
      contrasena: this.contrasena
    })
  }

  nameapi() {
    this.navCtrl.push(NamePage);
  }

  flickr() {
    this.navCtrl.push(FlickrPage);
  }

}
