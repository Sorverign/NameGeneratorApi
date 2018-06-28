/**
 * @author Almer Ibarra
 * @description Simple servicio para la API
 * @
 */

import { Injectable } from "@angular/core";
//importante
import { Http } from "@angular/http";

@Injectable()

export class nameApiService {

    constructor(
        private http: Http
    ) {}

    getNombres() {
        return this.http.get('https://randomuser.me/api/?results=25'); //25 resultados simples
    }
}