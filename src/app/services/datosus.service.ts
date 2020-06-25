import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatosUs } from '../models/datosu-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosusService {

  url = "http://localhost:8000/api";

  idUs = localStorage.getItem('idUsuario');

  constructor(private http: HttpClient) { }

  guardarDatosU(datosu: DatosUs){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.url + '/registro', datosu, {headers: headers});
  }

  traerPerfil(){
    const urlPerfil = `http://localhost:8000/api/perfil/${this.idUs}`;
    return this.http.get(urlPerfil);
  }

}
