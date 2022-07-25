import { Component, Input, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/services/details.service';
import { product } from './../../models/product';
import { CartService } from './../../services/cart.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input('p') product:product;
  constructor(private detailsService:DetailsService , private cartService:CartService) {
    this.product ={
      id:0,
      name:'',
      price:0,
      url:'',
      description:'',
      count:1
    }
   }

  ngOnInit(): void {
  }

  onClickImg(p:product){
    this.detailsService.addProductDetails(p);
  }

  getCount(e:any):void{
    this.product.count=+e;
    console.log(this.product.count);
  }

  addProductCart(p:product):void
  {
    this.cartService.updataCartProducts(p);
  }

}
