import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dec'];

  constructor() { }

  ngOnInit() {
    var idUs = localStorage.getItem('idUsuario');
    console.log(idUs);
  }

  
  
  

}
