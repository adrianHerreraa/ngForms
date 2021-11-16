import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    lblNombre:[
      '', 
      [ 
        Validators.required, 
        Validators.minLength(5), 
      ],
    ],
    favoritos: this.fb.array([
      ['Metal Gear', Validators.required], 
      ['Death Stranding', Validators.required],
      ],
      Validators.required,
    ),
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  fieldIsValid( label: string ){
    return this.miFormulario.controls[label].touched 
      && this.miFormulario.controls[label].errors;
  }

  onSave(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }else{
      console.log(this.miFormulario.value);
      // this.miFormulario.reset();
    }
  }
  
  agregarFavorito(){
    
    if(this.nuevoFavorito.invalid){
      return;
    }

    // this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ));
    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ) );

    this.nuevoFavorito.reset();
  }

  borrar( index: number ){
    console.log('Borrarrrr' + index);
    this.favoritosArr.removeAt(index);
  }

}
