import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PoppubliPage } from '../poppubli/poppubli.page';
import { Publicacion } from 'src/app/models/publicacion-model';
import { PublicacionService } from 'src/app/services/publicacion.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
})
export class PublicacionesPage implements OnInit {

  publicacion: Publicacion[];

  constructor(private popover:PopoverController, private publicacionServicio: PublicacionService) { 
    this.publicacionServicio.traerPublicaciones().subscribe((data: Publicacion[]) => {
      this.publicacion = data;
    }, (error) => {
      console.log(error);
      alert('error');
    });
  }

  ngOnInit() {
  }

  async createPopover( evento ){

    const popover = await this.popover.create({ component:PoppubliPage, event: evento, mode: "ios", showBackdrop: false});
    // this.popover.create({ component:PopresePage, showBackdrop:false }).then(( PopoverElement ) => {
    //   PopoverElement.present();
    // });
    await popover.present();
  }

}
