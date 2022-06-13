import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro';
import { LibroService } from '../../services/libro.service';

declare var window: any;

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent implements OnInit {
  carruselImg!: any;
  indice: number = 0;
  libros: Libro[] = [];
  librosDestacados: Libro[] = [
    {
      descripcion:
        "Altair se embarca en una misión formidable, una que lo lleva por Tierra Santa y le muestra el verdadero significado de Assassin's Creed. Para demostrar su compromiso, Altair debe derrotar a nueve enemigos mortales, incluido el líder templario, Robert de Sable.",
      destacado: true,
      imagen:
        'https://covers.zlibcdn2.com/covers299/books/dd/88/2a/dd882a683fad21fb874fef198bc6bc8b.jpg',
      stock: 15,
      titulo: "Assassin's Creed The Secret Crusade",
      __v: 0,
      _id: '629ea044a4d88b31c645f9f9',
    },
  ];
  libro!: Libro;

  constructor(private libroService: LibroService) {
    this.cargarLibros();
    this.iniciar2();
  }

  ngOnInit(): void {
    console.log('Funcion desde ngOnInit:');

    this.carruselImg = new window.bootstrap.Carousel(
      document.querySelector('#carouselExampleCaptions')
    );
    // this.iniciar();
  }

  cargarLibros() {
    //* Obtener todos los Libros
    this.libroService.getLibros().subscribe(
      (result) => {
        this.libros = result;
        console.log(this.libros);
      },
      (error) => {
        console.log(error);
      }
    );

    this.libroService.getLibrosDestacados().subscribe(
      (resp) => {
        this.librosDestacados = resp.destacados;
        console.log(resp.destacados);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  iniciar2() {
    if (this.indice < this.librosDestacados.length) {
      this.libro = this.librosDestacados[this.indice];
      console.log('HOLAA');
    }
  }

  next2() {
    // debugger;
    this.carruselImg.next();
    this.indice += 1;
    if (this.indice < this.librosDestacados.length) {
      this.libro = this.librosDestacados[this.indice];
    }
    if (this.indice >= this.librosDestacados.length) {
      this.indice = 0;
    }
  }

  back2() {
    // debugger;
    this.carruselImg.prev();
    this.indice -= 1;
    if (this.indice < 0) {
      this.indice = this.librosDestacados.length - 1;
    }
    if (this.indice < this.librosDestacados.length) {
      this.libro = this.librosDestacados[this.indice];
    }
    if (this.indice < 0) {
      this.indice = 2;
    }
  }
}
