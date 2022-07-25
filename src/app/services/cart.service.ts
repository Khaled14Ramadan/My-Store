import { Injectable } from '@angular/core';
import { product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts:product[]=[];
  localCart:any='[]';
  constructor() {
    //if reload dont delet this products
    if(localStorage.getItem('cart')!== null)
    {
      // this.cartProducts = JSON.parse(localStorage.getItem('cart'));
      this.localCart=localStorage.getItem('cart');
      this.cartProducts = JSON.parse(this.localCart);
    }
   }
  
  updataCartProducts(p:product):void
  {
    let flag=true;
    let total = p.count;
    for(let i=0 ; i<this.cartProducts.length;i++)
    {
      if(this.cartProducts[i].id === p.id)
      {
        // console.log(typeof this.cartProducts[i].count);
  
        //count is string so wriye in Number()
        this.cartProducts[i].count =Number(this.cartProducts[i].count) +  p.count;
        total = this.cartProducts[i].count;
        flag = false;
        break;
      }
      
    }
    if(flag)
      {
        //(deep copy) to no change after store
        this.cartProducts.push({...p});
      }
      
    localStorage.setItem("cart" , JSON.stringify(this.cartProducts));
    alert(`add ${p.count} of ${p.name} to your products
                  total of this is ${total}`);
    console.log(this.cartProducts);
  }
}
