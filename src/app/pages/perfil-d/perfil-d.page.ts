import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-d',
  templateUrl: './perfil-d.page.html',
  styleUrls: ['./perfil-d.page.scss'],
})
export class PerfilDPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
