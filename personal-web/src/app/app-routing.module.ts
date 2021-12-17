import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactoComponent  } from './contacto/contacto.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { ResumenComponent } from './resumen/resumen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'about',
    pathMatch: 'full'

  },
  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'resumen',
    component: ResumenComponent

  },
  {
    path: 'contacto',
    component: ContactoComponent
  },

  {
    path: 'proyectos',
    component: ProyectoComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
