import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilDPageRoutingModule } from './perfil-d-routing.module';

import { PerfilDPage } from './perfil-d.page';
import { ModalAddResePage } from '../modal-add-rese/modal-add-rese.page';
import { ModalAddResePageModule } from '../modal-add-rese/modal-add-rese.module';

@NgModule({
  entryComponents: [
    ModalAddResePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilDPageRoutingModule,
    ModalAddResePageModule
  ],
  declarations: [PerfilDPage]
})
export class PerfilDPageModule {}
