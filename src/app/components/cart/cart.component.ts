import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { product } from './../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:product[]=[];
  // localCarty: any='';
  total:any=0;

  empMSG:boolean=true; //this for display massage if the cart is empty

  name:string='';
  address:string='';
  card:any=null;
  constructor(private cartService:CartService , private router: Router) { }

  ngOnInit(): void {
    this.products = this.cartService.cartProducts;

    //used variable becouse JSON.parse not accept if localStorage is Null
    // this.localCarty = localStorage.getItem("cart");
    // this.products = localStorage.getItem("cart")?JSON.parse(this.localCarty) : this.cartService.cartProducts;
    this.calcTotal();
    if(this.total || this.products!==[] )
    {
      this.empMSG=false;
    }
  }

  //calculate the total
  calcTotal():void
  {
    //  this.total=this.products.reduce((total , p)=> total += (p.count*p.price));
    this.total=0;
    this.products.forEach(p =>{
      this.total += p.price * p.count;
    });
  }

  //icrease or decrease amount
  updateCount(p:product , vCount:any):void
  {
    for(let i=0  ; i < this.products.length ; i++)
    {
      if(this.products[i].id === p.id)
      {
        if(vCount==0)
        {
          //to remove this product from array
          console.log(this.products.splice(i,1));
        }
        else
        {
          this.products[i].count = vCount;
        }
        break;
      }
    }

    console.log(this.products);
    localStorage.setItem("cart" , JSON.stringify(this.products));
    
    //updata total price
    this.calcTotal();
  }

  // this for navigate after submit
  submitForm():void
  {
    console.log(this.name);
    if(this.total !== 0)
    {
      this.router.navigate(['/success' , {name:this.name , total:this.total}]);
      localStorage.removeItem('cart');
      this.cartService.cartProducts=[];
      
    }
    else
    {
      this.empMSG=true;//this for display empty massage if the cart is empty
      alert("you are not add any product to cart!!");
    }
  }
}
