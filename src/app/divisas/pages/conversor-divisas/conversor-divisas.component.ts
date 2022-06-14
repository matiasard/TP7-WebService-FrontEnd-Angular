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

  email: string = '';
  valor: number = 0;
  fromType: string = '';
  toType!: string;
  isZero: boolean = false;
  // monedasList: string[] = ['USD', 'EUR', 'GBP'];
  monedas: any[] = [
    {
      currency_code: 'ARS',
      country: 'Argentina',
    },
    {
      currency_code: 'BRL',
      country: 'Brazil',
    },
    {
      currency_code: 'GBP',
      country: 'United Kingdom',
    },
    {
      currency_code: 'USD',
      country: 'Estados Unidos',
    },
    {
      currency_code: 'HKD',
      country: 'Hong Kong',
    },
    {
      currency_code: 'PEN',
      country: 'Peru',
    },
    {
      currency_code: 'EGP',
      country: 'Egypt',
    },
    {
      currency_code: 'COP',
      country: 'Colombia',
    },
  ];
  transacciones: Divisa[] = [];

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

    //* Update Table
    // this.tablaTransacciones();
  }

  filtrarTransaccion() {
    //* Re asignar el valor de this.transacciones con el resultado de la busqueda con Filtro (ARS-USD)
    // this.transacciones = transaccion.listaTransacciones;
  }

  mostrarFiltro() {
    console.log(this.isChecked);
    this.isChecked = !this.isChecked;
  }
}
