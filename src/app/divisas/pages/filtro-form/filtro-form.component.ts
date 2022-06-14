import { Component, OnInit } from '@angular/core';
import { ConversorDivisasService } from '../../services/conversor-divisas.service';

@Component({
  selector: 'app-filtro-form',
  templateUrl: './filtro-form.component.html',
  styleUrls: ['./filtro-form.component.css'],
})
export class FiltroFormComponent implements OnInit {
  monedaOrigen: string = '';
  monedaDestino: string = '';

  constructor(private conversorService: ConversorDivisasService) {}

  ngOnInit(): void {}

  get monedas() {
    return this.conversorService.monedasList;
  }

  filtrar() {
    if (this.monedaOrigen.length <= 0 || this.monedaDestino.length <= 0) {
      alert('Por favor ingrese valores en los 2 campos');
      return;
    }

    //* Service
    this.conversorService.transaccionesFilter(
      this.monedaOrigen,
      this.monedaDestino
    );
    //* Reset
    this.monedaOrigen = '';
    this.monedaDestino = '';
  }

  allTransacciones() {
    this.conversorService.getTransacciones2();
  }
}
