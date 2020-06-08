import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = "http://localhost:8000/api";

  constructor(private http: HttpClient) {

    function getUsuarios() {
      http.get(this.url + '/usuarios' ).subscribe((data) => {
        console.log(data);
      });
    }
   }
  
}
