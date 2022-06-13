import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversorDivisasComponent } from './divisas/pages/conversor-divisas/conversor-divisas.component';
import { CrearLibroComponent } from './libros/pages/crear-libro/crear-libro.component';
import { LibroComponent } from './libros/pages/libro/libro.component';

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
  // {
  //   path: 'convertidor',
  //   component: ConversorDivisasComponent,
  // },
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
