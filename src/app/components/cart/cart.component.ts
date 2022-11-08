import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { product, productCount } from '../../models/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: product[] = [];
  productCount: number[] = productCount;
  totalPrice: number = 0;



  constructor(private cartService: CartService, private router: Router) { }


  ngOnInit(): void {
    this.products = this.cartService.getCartItems();
    this.TotalPrice();
  }

  selectChange(id: number, event: any): void {
    const selectedOption = event.target.options[event.target.options.selectedIndex].value;
    const cartIdx = this.products.findIndex(cart => cart.id === id);
    cartIdx != -1 && this.products.length > 0 ? this.products[cartIdx].option = selectedOption : null;
    this.TotalPrice()
  }

  TotalPrice(): void {
    this.totalPrice = this.products.reduce((acc: number, val: any) => {
      if (val.option == null) {
        val.option = 1
      }
      return acc + Number(val.price) * Number(val.option);
    }, 0);
    this.totalPrice = Number(this.totalPrice.toFixed(2));
  }


  remove(item: any) {
    this.cartService.removeCartItem(item)
    this.totalPrice -= item.price * item.option;
    this.totalPrice = Number(this.totalPrice.toFixed(2));
    alert('this item removed from your cart')


  }


  checkout() {
    this.router.navigateByUrl(`confirmation-massage/${this.totalPrice}`);
  }




}
