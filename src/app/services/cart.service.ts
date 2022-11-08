import { Injectable } from '@angular/core';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: product[] = [];

  constructor() { }


  addTOCart(product: product) {
    let exist:boolean = false;
    this.cartItems = this.cartItems.map(cart =>
      {
        if(cart.id == product.id){
          exist = true;
            alert('already exist in cart')
        }
      return cart;
      });

    if(!exist){
        this.cartItems.push(product);
        alert('this item added to your cart')
    }
  }

  getCartItems() {
    return this.cartItems;
  }


  removeCartItem(product: product) {
    this.cartItems.map((a, index) => {
      if (product.id === a.id) {
        this.cartItems.splice(index, 1)
      }
    })
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems
  }
}
