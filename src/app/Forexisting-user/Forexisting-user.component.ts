import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-Forexisting-user',
  templateUrl: './Forexisting-user.component.html',
  styleUrls: ['./Forexisting-user.component.css'],
})
export class ForexistingUserComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
}
