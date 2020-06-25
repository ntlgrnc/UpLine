import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopresePageRoutingModule } from './poprese-routing.module';

import { PopresePage } from './poprese.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopresePageRoutingModule
  ],
  declarations: [PopresePage]
})
export class PopresePageModule {}
