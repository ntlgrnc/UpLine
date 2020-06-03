import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RegistroInicialPage } from './registro-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroInicialPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule],
})
export class RegistroInicialPageRoutingModule {}
