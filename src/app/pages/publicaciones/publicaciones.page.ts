import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PoppubliPage } from '../poppubli/poppubli.page';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
})
export class PublicacionesPage implements OnInit {

  constructor(private popover:PopoverController) { }

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
