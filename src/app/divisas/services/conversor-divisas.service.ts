import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Divisa } from '../models/divisa';

@Injectable({
  providedIn: 'root',
})
export class ConversorDivisasService {
  private url: string = 'http://localhost:3000/api';
  private transaccionList: Divisa[] = [];
  private monedas: any[] = [
    {
      currency_code: 'ARS',
      country: 'Argentina',
    },
    {
      currency_code: 'USD',
      country: 'Estados Unidos',
    },
    {
      currency_code: 'GBP',
      country: 'United Kingdom',
    },
    {
      currency_code: 'BRL',
      country: 'Brazil',
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

  get listaTransacciones() {
    return [...this.transaccionList];
  }
  get monedasList() {
    return [...this.monedas];
  }

  constructor(private http: HttpClient) {}

  getTransacciones(): Observable<any> {
    const urlTranasacciones: string = `${this.url}/transaccion`;
    return this.http.get(urlTranasacciones);
  }

  getTransacciones2() {
    const urlTranasacciones: string = `${this.url}/transaccion`;
    return this.http.get<any>(urlTranasacciones).subscribe((res) => {
      this.transaccionList = res.listaTransacciones;
    });
  }

  conversionTransaccion(
    email: string,
    valor: number,
    fromType: string,
    toType: string
  ) {
    const urlConversion = `${this.url}/transaccion`;
    const body = {
      emailCliente: email,
      monedaOrigen: fromType,
      cantidadOrigen: valor,
      monedaDestino: toType,
    };
    console.log(body);
    return this.http.post(urlConversion, body).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        alert('Error en la peticion, no se pudo convertir');
        console.log(error);
      }
    );
  }

  transaccionesFilter(mOrigen: string, mDestino: string) {
    const urlFilter: string = `${this.url}/transaccion/listCurrency/${mOrigen}/${mDestino}`;
    return this.http.get<any>(urlFilter).subscribe((res) => {
      this.transaccionList = res.results;
    });
  }
}
