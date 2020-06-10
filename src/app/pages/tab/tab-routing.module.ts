import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'publicaciones'
  },
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: 'publicaciones',
        loadChildren: './../publicaciones/publicaciones.module#PublicacionesPageModule'
      },
      {
        path: 'perfil-usuario',
        loadChildren: './../perfil-d/perfil-d.module#PerfilDPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
