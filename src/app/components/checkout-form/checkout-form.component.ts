import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  Name: string = '';
  Address: string = '';
  CreditCard: string = '';
  sum: number = 0;


  constructor(private route: ActivatedRoute, private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.sum = Number(params.get('sum'));
    })
  }

  confirmation(): void {
    this.cartService.clearCart();
    this.router.navigateByUrl(`confirmation/${this.Name}`);
  }


}
