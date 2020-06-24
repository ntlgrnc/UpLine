import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-add-rese',
  templateUrl: './modal-add-rese.page.html',
  styleUrls: ['./modal-add-rese.page.scss'],
})
export class ModalAddResePage implements OnInit {

  @Input() nombre;
  @Input() pais;

  constructor(private modal:ModalController) { }

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

}
