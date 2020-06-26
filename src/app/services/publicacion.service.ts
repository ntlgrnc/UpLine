import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Publicacion } from '../models/publicacion-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  url = "http://localhost:8000/api";


  constructor(private http: HttpClient) { }

  guardarPublicacion(publicacion: Publicacion){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.url + '/publicaciones', publicacion, {headers: headers});
  }

  traerPublicaciones(){
    return this.http.get(this.url + "/toPublicaciones");
  }
}
