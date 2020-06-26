import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario-model';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

   usuario: Usuario = {
    idUsuario: 0,
    correo: "",
    clave: ""
  }

  constructor(private usuarioService: UsuarioService, private route: Router) { }

  ngOnInit() {
  }

  resultado = '';
  alerta = false;
  spinner = false;
  texto = true;

  activarSpinner(){
    this.spinner = true;
    this.texto = false;
  }

  inicioSesion(login) {
    this.usuarioService.inicioSesion(login.value).subscribe(data => {
      this.resultado = data;
      console.log(data);
      if(this.resultado == 'error'){
        this.alerta = true;
        this.spinner = false;
        this.texto = true;
      } else {
        localStorage.setItem('idLogin', String(this.resultado));
        this.route.navigate(['tab']);
      }
    }, (error) => {
      console.log(error);
    });
  }


}
