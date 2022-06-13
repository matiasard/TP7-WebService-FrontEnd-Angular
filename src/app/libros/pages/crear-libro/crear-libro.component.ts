import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css'],
})
export class CrearLibroComponent implements OnInit {
  titulo!: string;
  descripcion!: string;
  imagen!: string;
  stock!: number;
  destacado: boolean = false;

  constructor(private libroService: LibroService, private router: Router) {}
  ngOnInit(): void {}

  crearLibro() {
    if (
      this.titulo == undefined ||
      this.descripcion.length <= 0 ||
      this.imagen.length <= 0 ||
      this.stock === undefined
    ) {
      console.log('Return Vacio');
      return;
    }

    this.imagen = this.imagen.trim();

    this.libroService.createLibro(
      this.titulo,
      this.descripcion,
      this.imagen,
      this.stock,
      this.destacado
    );
    console.log(this.titulo);
    console.log(this.descripcion);
    console.log(this.imagen);
    console.log(this.stock);
    console.log(this.destacado);

    //* Reset de Valores
    this.titulo = '';
    this.descripcion = '';
    this.imagen = '';
    this.stock = 0;
    this.destacado = false;

    //* Redireccionar a Libro Destacados
    this.router.navigate(['']);
  }
}
