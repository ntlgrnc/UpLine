import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-registro-inicial',
  templateUrl: './registro-inicial.page.html',
  styleUrls: ['./registro-inicial.page.scss'],
})
export class RegistroInicialPage implements OnInit {
  
  // url = 'http://localhost:8000/api';

  constructor(private http: HttpClient, private usuarioService: UsuarioService) { 

  }

  ngOnInit() { 
    // console.log(this.usuarioService.getUsuarios());
   }


}
