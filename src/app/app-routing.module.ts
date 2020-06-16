import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio-sesion',
    pathMatch: 'full'
  },
  {
    path: 'fin-registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio-registro',
    loadChildren: () => import('./pages/registro-inicial/registro-inicial.module').then( m => m.RegistroInicialPageModule)
  },
  {
    path: 'publicaciones',
    loadChildren: () => import('./pages/publicaciones/publicaciones.module').then( m => m.PublicacionesPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./pages/tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'perfil-usuario',
    loadChildren: () => import('./pages/perfil-d/perfil-d.module').then( m => m.PerfilDPageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./pages/inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },  {
    path: 'recuperar-con',
    loadChildren: () => import('./pages/recuperar-con/recuperar-con.module').then( m => m.RecuperarConPageModule)
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
