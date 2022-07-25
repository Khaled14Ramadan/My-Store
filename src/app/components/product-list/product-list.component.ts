import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/product';
import { HttpService } from './../../services/http.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:product[]=[];
  constructor(private http:HttpService) { }

  ngOnInit(): void {
      this.http.getProducts().subscribe(res=>{
        for(let i=0 ; i<res.length;i++){
          const product=res[i];
          product["count"]=1;
        }
        this.products = res;
      });
  }

 
}
