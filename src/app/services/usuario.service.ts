import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = "http://localhost:8000/api";

  usuarios: UsuarioModel[];

  constructor(private http: HttpClient) {

      http.get(this.url + '/usuarios' ).subscribe((data: UsuarioModel[]) => {
        this.usuarios = data;
      });
   }
  
}
