import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroInicialPage } from './registro-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroInicialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroInicialPageRoutingModule {}
