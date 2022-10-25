import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products : any ;

  constructor(private ProductService : ProductService) { }

  ngOnInit(): void {
    this.ProductService.getProduct().subscribe(
      (res) =>{
      this.products = res
      console.log(res)
    })


  }

}
