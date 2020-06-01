import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroInicialPageRoutingModule } from './registro-inicial-routing.module';

import { RegistroInicialPage } from './registro-inicial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroInicialPageRoutingModule
  ],
  declarations: [RegistroInicialPage]
})
export class RegistroInicialPageModule {}
