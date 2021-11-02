import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})

export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    /*console.log(this.nuevo);*/

    /*  Con el FormModule emite y recibe datos,
        por lo tanto el this.nuevo ya está cargado
        con la info agregada por el usuario al hacer submit
    this.personajes.push(this.nuevo);*/

    this.onNewCharacter.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }

}
