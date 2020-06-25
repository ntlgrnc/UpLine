import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopresePage } from './poprese.page';

const routes: Routes = [
  {
    path: '',
    component: PopresePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopresePageRoutingModule {}
