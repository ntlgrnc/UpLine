import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, NavParams } from '@ionic/angular'

@Component({
  selector: 'app-registro-inicial',
  templateUrl: './registro-inicial.page.html',
  styleUrls: ['./registro-inicial.page.scss'],
})
export class RegistroInicialPage implements OnInit {

  registros: any;

  constructor(
    private http: HttpClient) { }

  // ionViewDidLoad(){
  //   console.log('ionViewDidLoad RegistroInicialPage');
  //   this.getregistrosInicial();
  // }

  ngOnInit() {
  }

  registro = {}

  apiUrl = "http://localhost/procesos-Upline/";

  // formReg1(){
  //   this.http.post(this.apiUrl, JSON.stringify(this.registro)).subscribe(data=>{
  //     console.log(data);
  //   })
  // }

  // getregistrosInicial(){
  //   let funcion = "getRegistroInicial";
  //   this.http.post(this.apiUrl, JSON.stringify(funcion)).subscribe(
  //     res=>{
  //       console.log(res);
  //     }
  //   );
  // }

}
