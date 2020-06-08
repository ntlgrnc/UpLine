import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8000/api/usuarios";

  getUsuarios() {
    return new Promise( resolve=> {
      this.http.get(this.url+'/usuarios').subscribe(data =>{
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }
}
