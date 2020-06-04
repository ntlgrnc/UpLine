import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilDPageRoutingModule } from './perfil-d-routing.module';

import { PerfilDPage } from './perfil-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilDPageRoutingModule
  ],
  declarations: [PerfilDPage]
})
export class PerfilDPageModule {}
