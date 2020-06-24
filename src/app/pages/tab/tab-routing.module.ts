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
        loadChildren: () => import('../publicaciones/publicaciones.module').then(m => m.PublicacionesPageModule)
      },
      {
        path: 'perfil-usuario',
        loadChildren: () => import('../perfil-d/perfil-d.module').then(m => m.PerfilDPageModule)
      },
      {
        path: 'chats',
        loadChildren: () => import('../chats/chats.module').then(m => m.ChatsPageModule)
      },
      {
        path: 'notificaciones',
        loadChildren: () => import('../notificaciones/notificaciones.module').then(m => m.NotificacionesPageModule)
      },
      {
        path: 'agregar',
        loadChildren: () => import('../add-publicacion/add-publicacion.module').then(m => m.AddPublicacionPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
