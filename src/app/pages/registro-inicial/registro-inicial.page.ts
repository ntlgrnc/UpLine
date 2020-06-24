import { Component, OnInit } from '@angular/core';
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
  registro = false;

  constructor(private usuarioService: UsuarioService, private http:HttpClient, private route:Router) {

    
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

    this.usuarioService.guardarUs(user.value).subscribe(data => {
      this.idUsuario = data;
      localStorage.setItem('idUsuario',String(this.idUsuario));
      this.route.navigate(['carga1']);
    }, (error)=>{
      console.log(error);
      this.registro = true;
    });

 }

}
