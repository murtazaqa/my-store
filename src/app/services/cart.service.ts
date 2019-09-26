import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  cartItems = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

  addToCart(product) {
    this.items.push(product);
    this.cartItems.next(this.items);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.cartItems.next(this.items);
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
