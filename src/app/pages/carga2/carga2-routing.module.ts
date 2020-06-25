import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Carga2Page } from './carga2.page';

const routes: Routes = [
  {
    path: '',
    component: Carga2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Carga2PageRoutingModule {}
