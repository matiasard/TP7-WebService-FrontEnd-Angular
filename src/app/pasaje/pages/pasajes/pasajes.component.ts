import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasajeService } from '../../services/pasaje.service';

@Component({
  selector: 'app-pasajes',
  templateUrl: './pasajes.component.html',
  styleUrls: ['./pasajes.component.css'],
})
export class PasajesComponent implements OnInit {
  //* Variables
  categoriaPasaje: string[] = ['Menor', 'Adulto', 'Jubilado', 'Todos'];
  categoria!: string;

  //* dependency injection
  constructor(private pasajeService: PasajeService, private router: Router) {}

  ngOnInit(): void {
    this.pasajeService.getPasajes();
  }

  //* Getter
  get pasajes() {
    return this.pasajeService.listaPasajes;
  }

  //* ************* Methods ****************

  //* Filtrar por categoria
  getPorCategoria(categoria: string): void {
    if (categoria === undefined) return;

    categoria === 'Todos'
      ? this.pasajeService.getPasajes()
      : this.pasajeService.getPorCategoria(categoria);
  }

  //* Crear
  createPasaje(): void {
    this.router.navigate(['pasajeForm']);
  }

  //* Borrar
  deletePasaje(id: string): void {
    this.pasajeService.deltePasaje(id);
  }

  updatePasaje(id: any): void {
    // this.pasajeService.findPasajeById(id)
    this.router.navigate(['pasajeForm', id]);
  }
}
