import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Carga2PageRoutingModule } from './carga2-routing.module';

import { Carga2Page } from './carga2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Carga2PageRoutingModule
  ],
  declarations: [Carga2Page]
})
export class Carga2PageModule {}
