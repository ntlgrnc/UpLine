import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Resena } from '../models/resena-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResenasService {

  url = "http://localhost:8000/api";

  idUs = localStorage.getItem('idLogin');

  constructor(private http: HttpClient) { }

  guardarResena(resena: Resena){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.url + '/resena', resena, {headers: headers});
  }

  traerReseñas(){
    const urlResena = `http://localhost:8000/api/toResena/${this.idUs}`;
    return this.http.get(urlResena);
  }

  traerPublicaciones(){
    return this.http.get(this.url + `/toPubli/${this.idUs}`);
  }
}
