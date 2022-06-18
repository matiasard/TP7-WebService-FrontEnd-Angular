import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasajeService } from '../../services/pasaje.service';

@Component({
  selector: 'app-pasaje-form',
  templateUrl: './pasaje-form.component.html',
  styleUrls: ['./pasaje-form.component.css'],
})
export class PasajeFormComponent implements OnInit {
  //* Variables
  categoriasPasaje: string[] = ['Menor', 'Adulto', 'Jubilado'];
  pasajeros: any[] = [];

  //* ForGroup: Un formulario con un CONJUNTO fijo de CONTROLES que pueden administrar juntos.
  //* Los controles de formulario individuales ahora se recopilan dentro de un grupo
  pasajeFormulario = new FormGroup({
    precioPasaje: new FormControl('', Validators.required),
    categoriaPasajero: new FormControl('', Validators.required),
    fechaCompra: new FormControl('', Validators.required),
    pasajero: new FormControl('', Validators.required),
  });

  //* dependency injection
  constructor(private pasajeService: PasajeService, private router: Router) {}

  ngOnInit(): void {
    this.pasajeService.getAllPersonas().subscribe(
      (personas) => {
        this.pasajeros = personas.results;
        console.log(this.pasajeros);
      },
      (error) => {
        alert('Error al obtener el listado de personas');
        console.warn(error);
      }
    );
  }

  //* ************* Methods ****************

  //* Crear nuevo pasaje
  crearPasaje() {
    console.log(this.pasajeFormulario.value);
    this.pasajeService.createPasaje(this.pasajeFormulario.value);
    this.router.navigate(['/pasaje']);
  }
}
