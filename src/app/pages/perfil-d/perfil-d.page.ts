import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, PopoverController } from '@ionic/angular';
import { PopresePage } from '../poprese/poprese.page';
import { ModalAddResePage } from '../modal-add-rese/modal-add-rese.page';
import { DatosusService } from 'src/app/services/datosus.service';
import { HttpClient } from '@angular/common/http';
import { DatosUs } from 'src/app/models/datosu-model';
import { Router } from '@angular/router';
import { ResenasService } from 'src/app/services/resenas.service';
import { Resena } from 'src/app/models/resena-model';
import { PublicacionService } from 'src/app/services/publicacion.service';
import { Publicacion } from 'src/app/models/publicacion-model';

@Component({
  selector: 'app-perfil-d',
  templateUrl: './perfil-d.page.html',
  styleUrls: ['./perfil-d.page.scss'],
})
export class PerfilDPage implements OnInit {

  perfil: DatosUs[];

  resena: Resena[];

  resena2: Resena[];

  idUs = localStorage.getItem('idLogin');

  segmentSelect = 'publi';

  constructor(private menu: MenuController, private popover: PopoverController,
    private modal: ModalController, private datosusService: DatosusService , private resenasService: ResenasService, private route: Router) {

    this.datosusService.traerPerfil().subscribe((data: DatosUs[]) => {
      this.perfil = data;
    }, (error) => {
      console.log(error);
      alert('error');
    });

    this.resenasService.traerReseñas().subscribe((data: Resena[]) => {
      this.resena = data;
    }, (error) => {
      console.log(error);
      alert('error');
    });

    this.resenasService.traerPublicaciones().subscribe((data: Resena[]) => {
      this.resena2 = data;
    }, (error) => {
      console.log(error);
      alert('error');
    });
  }

  ngOnInit() {
  }

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  async createPopover(evento) {

    const popover = await this.popover.create({ component: PopresePage, event: evento, mode: "ios", showBackdrop: false });
    // this.popover.create({ component:PopresePage, showBackdrop:false }).then(( PopoverElement ) => {
    //   PopoverElement.present();
    // });
    await popover.present();
  }

  async AbrirModalAdd() {

    const modal = await this.modal.create({
      component: ModalAddResePage,
      componentProps: {
        titulo: 'Nueva reseña'
      }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    console.log('Retorno del modal', data);

  }

  cerrarSesion() {
    localStorage.clear();
    console.log(localStorage.getItem('idLogin'));

    this.route.navigate(['inicio-sesion']);
  }



}
