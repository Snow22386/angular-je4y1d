import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-New-customer',
  templateUrl: './New-customer.component.html',
  styleUrls: ['./New-customer.component.css'],
})
export class NewCustomerComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
}
