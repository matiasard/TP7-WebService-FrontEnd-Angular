import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorDivisasComponent } from './pages/conversor-divisas/conversor-divisas.component';
import { FormsModule } from '@angular/forms';
import { FiltroFormComponent } from './pages/filtro-form/filtro-form.component';

@NgModule({
  declarations: [ConversorDivisasComponent, FiltroFormComponent],
  imports: [CommonModule, FormsModule],
})
export class DivisasModule {}
