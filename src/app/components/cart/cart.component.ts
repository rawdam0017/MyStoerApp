import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // @Output() checkout = new EventEmitter();
  @Input() sum = 0
  quantity: number = 1;



  constructor(private cartService: CartService, private router : Router) { }


  ngOnInit(): void {

    this.totalPrice();

  }
  items = this.cartService.getCartItems();


  increaseCounter(item:any) {
    this.quantity += 1 ;
    this.sum += item.price * this.quantity;
  }
  decreaseCounter(item:any) {
    this.quantity -= 1 ;
    this.sum += item.price * this.quantity;
  }


  totalPrice(){
    for (let item of this.items)
    this.sum += item.price * this.quantity;
    return this.sum
  }


  remove(item: any) {
    this.cartService.removeCartItem(item)
    this.sum -= item.price ;

  }


  checkout(){
    this.router.navigateByUrl(`checkout-form/${this.sum}`);
  }




}
