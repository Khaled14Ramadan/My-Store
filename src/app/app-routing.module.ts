import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductItemDetailsComponent } from './components/product-item-details/product-item-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SuccessComponent } from './components/success/success.component';

const routes: Routes = [
  {path:'' , component: ProductListComponent},
  {path:'productlist' , component: ProductListComponent},
  {path:'cart' , component: CartComponent},
  {path:'details' , component: ProductItemDetailsComponent},
  {path:'success' , component: SuccessComponent},
  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],



exports: [RouterModule]
})
export class AppRoutingModule { }
