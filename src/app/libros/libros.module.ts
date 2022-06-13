import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LibroComponent } from './pages/libro/libro.component';
import { CrearLibroComponent } from './pages/crear-libro/crear-libro.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LibroComponent, CrearLibroComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, FormsModule],
})
export class LibrosModule {}
