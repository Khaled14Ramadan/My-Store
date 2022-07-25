import { Injectable } from '@angular/core';
import { product } from './../models/product';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  prod:product={
      id:0,
      name:'',
      price:0,
      url:'',
      description:'',
      count:1
  };
  localProduct:any='[]';
  constructor() {
    if(localStorage.getItem('Product'))
    {
      this.localProduct=localStorage.getItem('Product');
      this.prod = JSON.parse(this.localProduct);
    }
   }

  addProductDetails(p:product)
  {
    this.prod = p;
    localStorage.setItem("Product",JSON.stringify(this.prod));
  }
  getProductDetails():product
  {
    return this.prod;
  }
}
