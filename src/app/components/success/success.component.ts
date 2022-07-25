import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  name:any='';
  total:any=0;
  src:string='./../../assets/clipart.png'
  constructor(private router:ActivatedRoute ) { }

  ngOnInit(): void {
    this.name = this.router.snapshot.paramMap.get('name');
    this.total =this.router.snapshot.paramMap.get('total');
    console.log(`hiiii ${this.name}`);
    console.log(`${this.total}`);
  }

}
