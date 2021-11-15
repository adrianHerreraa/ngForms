import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    lblProducto: '',
    lblPrecio: 0,
    lblExistencias: 0,
  };

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log( this.miFormulario );
    this.miFormulario.resetForm({
      lblProducto: '',
      lblPrecio: 0,
      lblExistencias: 0,
    });
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls.lblProducto?.invalid 
      && this.miFormulario?.controls.lblProducto?.touched;
  }

  precioValido(): boolean {
    return this.miFormulario?.controls.lblPrecio?.touched
      && this.miFormulario?.controls.lblPrecio?.value < 0;
  }

}
