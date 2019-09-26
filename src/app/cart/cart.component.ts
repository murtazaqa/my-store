import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(private cartService: CartService,
              private formBuilder: FormBuilder) {

                this.items = this.cartService.getItems();
                this.checkoutForm = this.formBuilder.group({
                  name: '',
                  address: ''
                });

  }

  ngOnInit() {
    console.log(this.items);
  }

  onSubmit(customerData) {
    alert('Your order has been submitted.\n Name: ' + customerData.name + '\n Address: ' + customerData.address);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

  }

}
