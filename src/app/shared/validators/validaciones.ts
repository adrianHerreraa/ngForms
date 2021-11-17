import { FormControl } from "@angular/forms";


export const nombreApellidoPatter: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


// TODO: Mover.
export const noPuedeserNeoMach = ( control: FormControl ) => {
    const value: string = control.value?.trim().toLowerCase();
    if(value === 'neomach'){
      return {
        noNeoMach: true,
      }
    }else{
      return null;
    }
  }

// TODO: Mover.
// noPuedeserNeoMach( control: FormControl ){
//     const value: string = control.value?.trim().toLowerCase();
//     if(value === 'neomach'){
//       return {
//         noNeoMach: true,
//       }
//     }else{
//       return null;
//     }
//   }