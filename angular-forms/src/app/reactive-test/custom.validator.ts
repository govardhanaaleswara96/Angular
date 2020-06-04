import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class customValidators {
  static nameChecker(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, rejects) => {
      if (control.value === 'Test') {
        resolve({ NameNotAllowed: true });
      } else {
        resolve(null);
      }
    });
    return promise;
  }
  static checkNameChecker(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Text') {
      return { NameNotAllowed: true };
    } else {
      return null;
    }
  }
}
