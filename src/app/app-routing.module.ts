import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio-registro',
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
