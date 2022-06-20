import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { isEmpty } from 'rxjs';
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
  accion: string = 'new';
  pasajeId!: string;

  //* ForGroup: Un formulario con un CONJUNTO fijo de CONTROLES que pueden administrar juntos.
  //* Los controles de formulario individuales ahora se recopilan dentro de un grupo
  pasajeFormulario = new FormGroup({
    precioPasaje: new FormControl('', Validators.required),
    categoriaPasajero: new FormControl('', Validators.required),
    fechaCompra: new FormControl('', Validators.required),
    pasajero: new FormControl('', Validators.required),
  });

  //* dependency injection
  constructor(
    private pasajeService: PasajeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  //* NgOnINIT
  ngOnInit(): void {
    //* Lista de pasajeros
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

    //* Actualizar Pasaie
    this.activatedRoute.params.subscribe((params) => {
      this.pasajeId = params['id'];
      if (this.pasajeId == undefined) {
        this.accion = 'new';
        console.log(this.accion);
      } else {
        this.accion = 'update';
        console.log(this.accion);
        this.findPasajeById(this.pasajeId);
      }
    });
  }

  //* ************* Methods ****************

  //* Crear nuevo pasaje
  crearPasaje() {
    if (this.accion == 'update') {
      this.pasajeService.updatePasaje(
        this.pasajeId,
        this.pasajeFormulario.value
      );
      // Redireccionar
      this.reDireccionarRuta('pasaje');
    } else {
      this.pasajeService.createPasaje(this.pasajeFormulario.value);
      // Redireccionar
      this.reDireccionarRuta('pasaje');
    }
  }

  findPasajeById(id: any) {
    const pasajeEncontrado: any = this.pasajeService.findPasajeById(id);

    //* Rellenar Formulario con Datos del Pasaje
    this.pasajeFormulario.patchValue({
      precioPasaje: pasajeEncontrado.precioPasaje,
      categoriaPasajero: pasajeEncontrado.categoriaPasajero,
      fechaCompra: this.formatDate(new Date(pasajeEncontrado.fechaCompra)),
      pasajero: pasajeEncontrado.pasajero._id,
    });
  }

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  formatDate(date: Date) {
    return [
      date.getFullYear(),
      this.padTo2Digits(date.getMonth() + 1),
      this.padTo2Digits(date.getDate() + 1),
    ].join('-');
  }

  reDireccionarRuta(ruta: string) {
    this.router.navigate([`/${ruta}`]);
  }
}
