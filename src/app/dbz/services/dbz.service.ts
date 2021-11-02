import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

  // Propiedades

  private _personajes: Personaje[] = [
    { nombre: 'Goku', poder: 15000 },
    { nombre: 'Vegeta', poder: 7500 },
    { nombre: 'Krillin', poder: 700 }
  ];

  // Gets y Sets

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  // Constructor

  constructor() {
    console.log('Servicio inicializado...')
  }

  // Métodos

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
