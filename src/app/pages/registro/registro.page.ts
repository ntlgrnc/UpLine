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

  idUs = parseInt(localStorage.getItem('idUsuario'));

  datos: DatosUs[];

  datosUs: DatosUs = {
    idDatosU: 0,
    FK_idUsuario: this.idUs,
    nombres: "",
    apellidos: "",
    usuario: "",
    fechaNacimiento: this.fechaNacimiento,
    sexo: ""
  }

  constructor(private datosuService: DatosusService, private http:HttpClient) {
  
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
