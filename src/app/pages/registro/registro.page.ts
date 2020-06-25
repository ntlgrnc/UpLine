import { Component, OnInit } from '@angular/core';
import { DatosusService } from 'src/app/services/datosus.service';
import { HttpClient } from '@angular/common/http';
import { DatosUs } from 'src/app/models/datosu-model';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dec'];

  fechaNacimiento = '';
  
  cambioFecha(event) {
    this.fechaNacimiento = moment(event.detail.value).format('YYYY-MM-DD');
  }

  datos: DatosUs[];
    
  idusuario:string;

  nombr: string;
  
  datosUs: DatosUs = {
    idDatosU: 0,
    FK_idUsuario: '',
    nombres: "",
    apellidos: "",
    usuario: "",
    fechaNacimiento: this.fechaNacimiento,
    sexo: "",
    celular: 0,
    ubicacion: '',
    foto: ''
  }

  spinner = false;
  texto = true;

  constructor(private datosuService: DatosusService, private http:HttpClient, private route:Router) {

    this.idusuario = localStorage.getItem('idUsuario');
    this.nombr = 'mor';
   }

  ngOnInit() { }

  activarSpinner() {
    this.spinner=true;
    this.texto = false;
  }

  guardarDatosU(datosu) {
    this.datosuService.guardarDatosU(datosu.value).subscribe(data => {
      this.route.navigate(['carga2']);
      this.spinner = false;
    },(error)=>{
      alert('Ocurrió un error');
    });
  }
}
