import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConversorDivisasComponent } from './divisas/pages/conversor-divisas/conversor-divisas.component';
import { CrearLibroComponent } from './libros/pages/crear-libro/crear-libro.component';
import { LibroComponent } from './libros/pages/libro/libro.component';
import { PasajeFormComponent } from './pasaje/pages/pasaje-form/pasaje-form.component';
import { PasajesComponent } from './pasaje/pages/pasajes/pasajes.component';

const routes: Routes = [
  {
    path: '',
    component: LibroComponent,
    pathMatch: 'full',
  },
  {
    path: 'divisas',
    component: ConversorDivisasComponent,
  },
  {
    path: 'nuevoLibro',
    component: CrearLibroComponent,
  },
  {
    path: 'pasaje',
    component: PasajesComponent,
  },
  {
    path: 'pasajeForm',
    component: PasajeFormComponent,
  },
  {
    path: 'pasajeForm/:id',
    component: PasajeFormComponent,
  },
  // {
  //   path: 'generadorQr',
  //   component: GeneradorQrComponent,
  // },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
