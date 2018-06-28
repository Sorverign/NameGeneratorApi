/**
 * @author Almer Ibarra
 * @description Establece los controles para el formulario
 */

import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
//-------------
import { FormControl, FormGroup, Validators } from '@angular/forms';
//-------------
import { NamePage } from '../name/name';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  //-------Controles----------
  formulario: FormGroup;
  nombre: FormControl;
  contrasena: FormControl;


  constructor(
    public navCtrl: NavController
  ) { }

  //Por prefencia hago los formularios por funciones para abreviar su uso
  ngOnInit() {
    this.createControles();
    this.getControles();
  }

  /**
   * @description:
   * 
   * Creamos los controles del formulario con su respectivo patron
   * El patron valida si hay un solo @
   */

  createControles() {
    this.nombre = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')]);
    this.contrasena = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')]);
  }

  //Asignamos el valor de los controles ya creados a sus respectivas variables
  getControles() {
    this.formulario = new FormGroup({
      nombre: this.nombre,
      contrasena: this.contrasena
    })
  }

  //Para dirigir a la Pagina de la API
  nameapi() {
    this.navCtrl.push(NamePage);
  }


}
