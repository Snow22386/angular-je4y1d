import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PublicaddressValidator } from './AddressValidator';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  form1 = new FormGroup({
    username: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        PublicaddressValidator.isLongEnough,
      ])
    ),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    console.log('Submitted: ' + JSON.stringify(this.form1.value));
  }
}
