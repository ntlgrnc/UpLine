import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatosUs } from '../models/datosu-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosusService {

  url = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }

  guardarDatosU(datosu: DatosUs){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.url + '/registro', datosu, {headers: headers});
  }

  traerPerfil(datosp){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.url + '/perfil', datosp, {headers: headers});
  }

}
