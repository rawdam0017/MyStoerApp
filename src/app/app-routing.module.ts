import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationMassageComponent } from './components/confirmation-massage/confirmation-massage.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'productList', component: ProductListComponent },
  { path: 'product-detalis/:id', component: ProductDetailsComponent },
  { path: 'confirmation-massage/:sum', component: ConfirmationMassageComponent },
  { path: 'confirmation/:Name', component: ConfirmationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
