import { FormControl } from '@angular/forms';

export class PublicaddressValidator {
  static isLongEnough(formControl: FormControl) {
    return { isLongEnough: formControl.value.length > 41 };
  }
}
