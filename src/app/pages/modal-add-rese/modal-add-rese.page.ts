import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Resena } from 'src/app/models/resena-model';
import { ResenasService } from 'src/app/services/resenas.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-add-rese',
  templateUrl: './modal-add-rese.page.html',
  styleUrls: ['./modal-add-rese.page.scss'],
})
export class ModalAddResePage implements OnInit {

  @Input() nombre;
  @Input() pais;

  constructor(private modal:ModalController, private resenasService: ResenasService, private route:Router) { }

  ngOnInit() {
  }

  SalirSinArgumentos(){
    this.modal.dismiss();
  }

  SalirConArgumentos(){
    this.modal.dismiss({
      nombre: 'Felipe',
      pais: 'Rusia'
    })
  }

  datos: Resena[];

  resena: Resena = {
    idResenas: 0,
    autor: 2,
    msjResena: "",
    estado: "",
    fecha: "",
    resenado: 2,
  }

  guardarResena(resena) {
    this.resenasService.guardarResena(resena.value).subscribe();
  }

}
