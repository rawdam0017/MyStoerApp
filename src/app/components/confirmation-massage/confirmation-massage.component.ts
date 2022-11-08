import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation-massage',
  templateUrl: './confirmation-massage.component.html',
  styleUrls: ['./confirmation-massage.component.css']
})
export class ConfirmationMassageComponent implements OnInit {
  Name: string = ''
  constructor(private cartService: CartService,) { }

  ngOnInit(): void {
  }

  checkoutSuccess(): void {
    this.cartService.clearCart();
  }
}
