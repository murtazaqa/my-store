import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  cartItems;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cartItems.subscribe(res => this.cartItems = res);
  }

}
