import { Injectable } from '@angular/core';
import { product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: product[] = [];


  constructor() { }

  addTOCart(product:product){
    this.cartItems.push(product)
  }

  getCartItems(){
    return this.cartItems;
  }

  removeCartItem(product: product) {
    this.cartItems.map((a, index) => {
      if (product.id === a.id) {
        this.cartItems.splice(index, 1)
      }
    })
  }

  clearCart(){
    this.cartItems=[];
    return this.cartItems
  }
}
