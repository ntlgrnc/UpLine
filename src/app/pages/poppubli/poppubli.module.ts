import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoppubliPageRoutingModule } from './poppubli-routing.module';

import { PoppubliPage } from './poppubli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoppubliPageRoutingModule
  ],
  declarations: [PoppubliPage]
})
export class PoppubliPageModule {}
