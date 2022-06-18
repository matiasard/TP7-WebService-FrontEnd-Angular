import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PasajeService {
  private url: string = 'http://localhost:3000/api';
  private pasajesLista: any[] = [];

  //* Getter
  get listaPasajes() {
    return [...this.pasajesLista];
  }

  constructor(private http: HttpClient) {}

  //* Obtener todos los pasajes
  getPasajes() {
    const urlPasajeros: string = `${this.url}/pasaje`;
    return this.http.get<any>(urlPasajeros).subscribe(
      (pasajes) => {
        this.pasajesLista = pasajes.results;
      },
      (err) => {
        alert('Surgio un error al obtener los datos de los pasajeros');
        console.log(err);
      }
    );
  }

  //* Crear nuevo pasaje
  createPasaje(pasaje: any) {
    const urlCreatePasaje: string = `${this.url}/pasaje`;
    return this.http.post(urlCreatePasaje, pasaje).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        alert('Surgio un error al crear el Pasaje');
        console.warn(error);
      }
    );
  }

  //* Filtrar por categoria
  getPorCategoria(busqueda: string) {
    const urlByCategoria: string = `${this.url}/pasaje/${busqueda}`;
    return this.http.get<any>(urlByCategoria).subscribe(
      (res) => {
        this.pasajesLista = res.results;
      },
      (error) => {
        alert('Surgio un error, no se pudo realizar la operacion');
        console.error(error);
      }
    );
  }

  //* Obtener todos los pasajeros
  getAllPersonas(): Observable<any> {
    const urlPersonas: string = `${this.url}/persona`;
    return this.http.get(urlPersonas);
  }

  //* Borrar pasaje
  deltePasaje(id: string) {
    const urlDeletePasaje: string = `${this.url}/pasaje/${id}`;
    return this.http.delete(urlDeletePasaje).subscribe(
      (pasaje) => {
        console.log(pasaje);
        this.getPasajes();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
