import { Component, OnInit } from '@angular/core';
import { DatosusService } from 'src/app/services/datosus.service';
import { HttpClient } from '@angular/common/http';
import { DatosUs } from 'src/app/models/datosu-model';
import { FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

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
    sexo: ""
  }

  

  constructor(private datosuService: DatosusService, private http:HttpClient) {

    this.idusuario = localStorage.getItem('idUsuario');
    this.nombr = 'mor';
   }

  ngOnInit() { }

  guardarDatosU(datosu) {
    this.datosuService.guardarDatosU(datosu.value).subscribe(data => {
      alert('se registro');
    },(error)=>{
      alert('No dio');
    });
  }
}
