import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
// import { emailPattern, nombreApellidoPatter, noPuedeserNeoMach } from 'src/app/shared/validators/validaciones';
import { ValidatorService } from '../../../shared/validators/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    lblNombre: [
      '', 
      [ 
        Validators.required, 
        Validators.pattern( this.vService.nombreApellidoPatter ) 
      ],
    ],
    lblEmail: [
      '',
      [
        Validators.required,
        Validators.pattern( this.vService.emailPattern ),
      ],
    ],
    lblUsername: [
      '',
      [
        Validators.required,
        this.vService.noPuedeserNeoMach,
      ]
    ],
    lblPassword: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
      ]
    ],
    lblPassword2: [
      '',
      [
        Validators.required,
      ]
    ],
    
  },
  {
    validators: [
      this.vService.camposIguales('lblPassword', 'lblPassword2'),
    ]
  });

  constructor( 
    private fb: FormBuilder,
    private vService: ValidatorService,
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      lblNombre: 'Luis Adrian',
      lblEmail: 'neomch55@gmail.com',
      lblUsername: 'K4rma',
    });
  }

  fieldIsValid( campo: string ){
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched;
  }

  onSubmit(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
