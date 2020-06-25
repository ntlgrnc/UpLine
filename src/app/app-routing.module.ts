import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'perfil-usuario',
    pathMatch: 'full'
  },
  {
    path: 'fin-registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'inicio-registro',
    loadChildren: () => import('./pages/registro-inicial/registro-inicial.module').then(m => m.RegistroInicialPageModule)
  },
  {
    path: 'publicaciones',
    loadChildren: () => import('./pages/publicaciones/publicaciones.module').then(m => m.PublicacionesPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./pages/tab/tab.module').then(m => m.TabPageModule)
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./pages/perfil-d/perfil-d.module').then(m => m.PerfilDPageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./pages/inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionPageModule)
  },
  {
    path: 'recuperar-con',
    loadChildren: () => import('./pages/recuperar-con/recuperar-con.module').then(m => m.RecuperarConPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/add-publicacion/add-publicacion.module').then(m => m.AddPublicacionPageModule)
  },
  {
    path: 'nueva-clave',
    loadChildren: () => import('./pages/nueva-clave/nueva-clave.module').then(m => m.NuevaClavePageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./pages/chats/chats.module').then(m => m.ChatsPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./pages/notificaciones/notificaciones.module').then(m => m.NotificacionesPageModule)
  },
  {
    path: 'poprese',
    loadChildren: () => import('./pages/poprese/poprese.module').then( m => m.PopresePageModule)
  },
  {
    path: 'carga1',
    loadChildren: () => import('./pages/carga1/carga1.module').then( m => m.Carga1PageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'carga2',
    loadChildren: () => import('./pages/carga2/carga2.module').then( m => m.Carga2PageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
