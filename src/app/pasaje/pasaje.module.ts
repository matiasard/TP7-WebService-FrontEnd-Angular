import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PasajesComponent } from './pages/pasajes/pasajes.component';
import { PasajeFormComponent } from './pages/pasaje-form/pasaje-form.component';

@NgModule({
  declarations: [PasajesComponent, PasajeFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class PasajeModule {}
