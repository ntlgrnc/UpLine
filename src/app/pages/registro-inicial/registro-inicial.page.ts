import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario-model';

@Component({
  selector: 'app-registro-inicial',
  templateUrl: './registro-inicial.page.html',
  styleUrls: ['./registro-inicial.page.scss'],
})
export class RegistroInicialPage implements OnInit {

  usuarios: Usuario[];

  usuario: Usuario = {
    correo: '',
    clave: '',
    estado: ''
  }

  constructor(private usuarioService: UsuarioService, private http:HttpClient) {

    /**
    this.usuarioService.getUsuario().subscribe((data: Usuario[])=>{
      this.usuarios = data;
    }, (error)=>{
      console.log(error);
      alert('error');
    }); */
    
   }

  ngOnInit() { 
  }

  guardarUsuario() {
    this.usuarioService.guardarUs(this.usuario).subscribe((data) => {
      alert('se registro');
      console.log(data);
    }, (error)=>{
      console.log(error);
      alert('No se pudo guardar');
    });
  }

}
