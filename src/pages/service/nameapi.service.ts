import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()

export class nameApiService {

    constructor(
        private http: Http
    ) {}

    getNombres() {
        return this.http.get('https://randomuser.me/api/?results=25')
    }
}