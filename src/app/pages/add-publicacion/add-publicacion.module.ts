import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPublicacionPageRoutingModule } from './add-publicacion-routing.module';

import { AddPublicacionPage } from './add-publicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPublicacionPageRoutingModule
  ],
  declarations: [AddPublicacionPage]
})
export class AddPublicacionPageModule {}
