import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
};

interface Favorito {
  id: number;
  nombre: string;
};

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  persona: Persona = {
    nombre: 'Luis Adrian',
    favoritos: [
      {
        id: 1,
        nombre: 'FarCry',
      },
      {
        id: 2,
        nombre: 'GTA V',
      }
    ],
  };

  nuevoJuego: string = '';

  guardar(){
    console.log('Formulario posteado');
  }

  guardarFavorito(){
    
    const nuevoJFav: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    };

    this.persona.favoritos.push({...nuevoJFav});
    this.nuevoJuego = '';
  }

  eliminar( index: number ){
    this.persona.favoritos.splice(index, 1);
  }

}
