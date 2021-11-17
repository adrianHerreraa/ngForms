import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
// import { emailPattern, nombreApellidoPatter, noPuedeserNeoMach } from 'src/app/shared/validators/validaciones';
import { ValidatorService } from '../../../shared/validators/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group(
    {
      lblNombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.vService.nombreApellidoPatter),
        ],
      ],
      lblEmail: [
        '',
        [Validators.required, Validators.pattern(this.vService.emailPattern)],
        [this.emailValidator],
      ],
      lblUsername: ['', [Validators.required, this.vService.noPuedeserNeoMach]],
      lblPassword: ['', [Validators.required, Validators.minLength(6)]],
      lblPassword2: ['', [Validators.required]],
    },
    {
      validators: [this.vService.camposIguales('lblPassword', 'lblPassword2')],
    }
  );

  get emailErrorMsg(): string{

    const errors = this.miFormulario.get('lblEmail')?.errors;
    
    if( errors?.required ){
      return '* El campo email es obligatorio';
    }else if( errors?.pattern){
      return '* El formato de email no es válido';
    }else if( errors?.emailTomado ){
      return '* El email ya está en uso';
    }else{
      return '';
    }
  }

  constructor(
    private fb: FormBuilder,
    private vService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      lblNombre: 'Luis Adrian',
      lblEmail: 'test1@test.com',
      lblUsername: 'K4rma',
      lblPassword: '123456',
      lblPassword2: '123456',
    });
  }

  fieldIsValid(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  // emailRequired(){
  //   return (
  //     this.miFormulario.get('lblEmail')?.errors?.required &&
  //     this.miFormulario.get('lblEmail')?.touched
  //   );
  // }

  // emailPattern(){
  //   return (
  //     this.miFormulario.get('lblEmail')?.errors?.pattern &&
  //     this.miFormulario.get('lblEmail')?.touched
  //   );
  // }

  // emailTomado(){
  //   return (
  //     this.miFormulario.get('lblEmail')?.errors?.emailTomado &&
  //     this.miFormulario.get('lblEmail')?.touched
  //   );
  // }

  onSubmit() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
