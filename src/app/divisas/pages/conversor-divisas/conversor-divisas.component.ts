import { Component, OnInit } from '@angular/core';
import { Divisa } from '../../models/divisa';
import { ConversorDivisasService } from '../../services/conversor-divisas.service';

@Component({
  selector: 'app-conversor-divisas',
  templateUrl: './conversor-divisas.component.html',
  styleUrls: ['./conversor-divisas.component.css'],
})
export class ConversorDivisasComponent implements OnInit {
  isChecked = false;
  isZero: boolean = false;

  email: string = '';
  valor: number = 0;
  fromType: string = '';
  toType!: string;
  // transacciones: Divisa[] = [];

  constructor(private conversorService: ConversorDivisasService) {}

  ngOnInit(): void {
    // this.tablaTransacciones();
    this.conversorService.getTransacciones2();
  }

  // tablaTransacciones() {
  //   this.conversorService.getTransacciones().subscribe((transaccion) => {
  //     this.transacciones = transaccion.listaTransacciones;
  //     console.log(this.transacciones);
  //   });
  // }

  //* METODO GET - Tabla de Transacciones
  get resultados() {
    return this.conversorService.listaTransacciones;
  }

  //* Get - Obtener todas las monedas
  get monedas() {
    return this.conversorService.monedasList;
  }

  //* COnversion
  convertirMoneda() {
    this.valor <= 0 ? (this.isZero = true) : (this.isZero = false);
    if (
      this.valor <= 0 ||
      this.email.length <= 0 ||
      this.fromType.length <= 0 ||
      this.toType.length <= 0
    ) {
      return;
    }

    //* Convertir moenda origen a moneda Destino
    this.conversorService.conversionTransaccion(
      this.email,
      this.valor,
      this.fromType,
      this.toType
    );

    //* Reset
    this.valor = 0;
    this.email = '';
    this.fromType = '';
    this.toType = '';
  }

  //* Busqueda
  mostrarFiltro() {
    this.isChecked = !this.isChecked;
  }
}
