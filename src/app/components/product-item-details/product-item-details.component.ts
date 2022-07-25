import { Component, OnInit } from '@angular/core';
import { product } from './../../models/product';
import { DetailsService } from 'src/app/services/details.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CartService } from './../../services/cart.service';


@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {
  // st:any='';
  product:product={
    id:0,
      name:'',
      price:0,
      url:'',
      description:'',
      count:1
  };
  //icon arro for back
  arrowLeft=faArrowLeft;
  constructor(private detailsService:DetailsService ,  private cartService:CartService) {
   }

  ngOnInit(): void {
    this.product=this.detailsService.getProductDetails();
  }

  getCount(e:string):void{
    // console.log("hi option");
    // console.log(document.getElementById(`id${product.id}`));
    // console.log(e);
    this.product.count=+e;
  }

  addProductCart(p:product):void
  {
    this.cartService.updataCartProducts(p);
  }


}
