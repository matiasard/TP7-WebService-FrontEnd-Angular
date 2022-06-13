import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../models/libro';
import { LibroDestacado } from '../interfaces/libroDestacado.interface';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  url: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getLibros(): Observable<any> {
    const urlLibros = `${this.url}/libro`;
    return this.http.get(urlLibros);
  }

  getLibrosDestacados(): Observable<LibroDestacado> {
    const urlLibrosDestacados = `${this.url}/libro/destacados`;
    return this.http.get<LibroDestacado>(urlLibrosDestacados);
  }

  createLibro(
    titulo: string,
    descripcion: string,
    imagen: string,
    stock: number,
    destacado: boolean
  ) {
    const urlCreateLibro = `${this.url}/libro`;
    // const body = new HttpParams()
    //   .set('titulo', titulo)
    //   .set('descripcion', descripcion)
    //   .set('imagen', imagen)
    //   .set('stock', stock)
    //   .set('destacado', destacado);
    const params = {
      titulo: titulo,
      descripcion: descripcion,
      imagen: imagen,
      stock: stock,
      destacado: destacado,
    };
    return this.http.post(urlCreateLibro, params).subscribe((data) => {
      console.log(data);
    });
  }
}
