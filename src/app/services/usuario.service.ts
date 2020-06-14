import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = "http://localhost:8000/api";

  constructor(private http: HttpClient) { }

   getUsuario() {
      return this.http.get(this.url + "/usuarios");
   }

   getDatosUsuario() {
      return this.http.get(this.url + "/datosusuarios");
   }

   guardarUs(usuario: Usuario): Observable<any> {
      const headers = new HttpHeaders({'Content-Type':'application/json'});
      return this.http.post(this.url + '/registroini', usuario, {headers: headers});
   }
  
}
