import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario-model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-registro-inicial',
  templateUrl: './registro-inicial.page.html',
  styleUrls: ['./registro-inicial.page.scss'],
})
export class RegistroInicialPage implements OnInit {

  usuarios: Usuario[];

  usuario: Usuario = {
    idUsuario: 0,
    correo: "",
    clave: ""
  }
  registro: boolean;

  constructor(private usuarioService: UsuarioService, private http:HttpClient) {

    
    // this.usuarioService.getUsuario().subscribe((data: Usuario[])=>{
    //   this.usuarios = data;
    // }, (error)=>{
    //   console.log(error);
    //   alert('error');
    // }); 
    
   }

  ngOnInit() { 
  }

  idUsuario = 0;

  guardarUsuario(user) {

    console.log(user.value);

    this.usuarioService.guardarUs(user.value).subscribe(data => {
      alert('se registro');
      this.idUsuario = data;
      localStorage.setItem('idUsuario',String(this.idUsuario));
      this.registro = true;
    }, (error)=>{
      console.log(error);
      alert('No se pudo guardar');
      this.registro = false;
    });

 }

}
