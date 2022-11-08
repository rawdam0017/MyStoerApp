import { Component, OnInit, Input } from '@angular/core';
import { product } from '../../models/product';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() cardItem: any;

  constructor(private router: Router, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {

  }

  showDetails() {
    this.router.navigate(['/product-detalis', this.cardItem.id])
  }

  addToCart(product: product) {
    this.cartService.addTOCart(product);
  }

}
