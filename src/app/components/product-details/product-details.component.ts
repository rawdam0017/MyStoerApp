import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId = 0;
  productData: any;
  quantity=1;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data['id'];
      console.log(this.productId)
    })
    this.productService.getProductID(this.productId).subscribe(data=>{
      console.log(data)
      this.productData=data;
    })




  }
}














//   id: number | null = null;
//   products: product[]= [];
//   product: product | null = null;

//   constructor(private route: ActivatedRoute, private productService: ProductService) { }

//   ngOnInit(): void {
//     this.route.paramMap.subscribe(params => {
//       this.id = Number(params.get('id'));
//     })
//     this.productService.getProduct().subscribe(res =>{
//        res=this.products;
//       this.product = this.getProductById(this.id)
//       console.log(this.product)
//     },
//     (err) => { console.log(err)})
//   }
//   getProductById(id: number | null): product{
//     return this.products.filter(product => product.id === id)[0];
//   }
// }
///////////////////////////////////////////////////////////////////////////////////////
//   product: any ;
//   id: number = 0;

//   constructor(private activatedRoute: ActivatedRoute, private ProductService: ProductService) {
//     //  const activeID = this.activatedRoute.snapshot.params['id']
//     // this.Details = Di.filter((pro) => pro.id == activeID);
//   }

//   ngOnInit(): void {
//     this.activatedRoute.params.subscribe((params)=>{this.product = this.ProductService.getProductID(params['id'])});



// }
// }
