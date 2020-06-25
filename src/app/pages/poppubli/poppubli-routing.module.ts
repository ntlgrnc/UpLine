import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoppubliPage } from './poppubli.page';

const routes: Routes = [
  {
    path: '',
    component: PoppubliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoppubliPageRoutingModule {}
