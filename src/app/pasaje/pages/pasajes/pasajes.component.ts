import { Component, OnInit } from '@angular/core';
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
  constructor(private pasajeService: PasajeService) {}

  ngOnInit(): void {
    this.pasajeService.getPasajes();
  }

  //* Getter
  get pasajes() {
    return this.pasajeService.listaPasajes;
  }

  //* Methods
  getPorCategoria(categoria: string): void {
    if (categoria === undefined) return;
    if (categoria === 'Todos') this.pasajeService.getPasajes();
    this.pasajeService.getPorCategoria(categoria);
  }

  createPasaje(): void {
    console.log('New Pasaje');
  }

  deletePasaje(id: string): void {
    this.pasajeService.deltePasaje(id);
  }
}
