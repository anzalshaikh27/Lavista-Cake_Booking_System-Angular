import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.CartDetails();
    this.loadCart();
  }
  getCartDetails:any=[];
  CartDetails(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart'));
  
    }
  }

  total:number = 0;
loadCart(){
 if(localStorage.getItem('localCart'))
 {
   this.getCartDetails = JSON.parse(localStorage.getItem('localCart'));
   this.total = this.getCartDetails.reduce(function(acc,val){
     return acc + (val.product_price * val.product_qty)
   }, 0);
 }
}
}