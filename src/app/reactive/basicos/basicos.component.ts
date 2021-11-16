import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   lblNombre: new FormControl('RTX 4080ti'),
  //   lblPrecio: new FormControl(0),
  //   lblExistencias: new FormControl(0),
  // });

  miFormulario: FormGroup = this.fb.group({
    lblNombre: [
      , 
      [
        Validators.required,
        Validators.minLength(5),
      ],
    ],
    lblPrecio: [
      ,
      [
        Validators.required,
        Validators.min(0),
      ],
    ],
    lblExistencias: [
      ,
      [
        Validators.required,
        Validators.min(0),
      ],
    ]
  });

  constructor( private fb: FormBuilder) { }

  ngOnInit(){

    // Si utilizas la función setValue, debes de mandar los campos exactamente igual al formGroup definido arriba.

    // this.miFormulario.setValue({
    //   lblNombre: 'RTX 4080ti',
    //   lblPrecio: 1800,
    //   lblExistencias: 7,
    // });

    // Mejor se utiliza reset, que permite poner los campos que gustes sin obligarte a poner todos.
    this.miFormulario.reset({
      lblNombre: 'RTX 4080ti',
      lblPrecio: 1800,
    });

  }

  isFieldValid( campo: string ){
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched;
  }

  onSave(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }else{
      console.log(this.miFormulario.value);
      this.miFormulario.reset();
    }
    
  }

}
