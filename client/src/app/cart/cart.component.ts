import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _productService: ProductsService) { }

  ngOnInit(): void {
    this.CartDetails();
    this.loadCart();
    
  }

  cartNumber:number =0;
  cartNumberFunc(){
    var cartValue = JSON.parse(localStorage.getItem('localCart'));
    this.cartNumber = cartValue.length;
    this._productService.cartSubject.next(this.cartNumber); 

  }

//To display all the products of cart from localStorage in table format
getCartDetails:any=[];
CartDetails(){
  if(localStorage.getItem('localCart')){
    this.getCartDetails = JSON.parse(localStorage.getItem('localCart'));

  }
}
//TO increment qty of product in Cart.html
incQty(prodId, qnt)
{
  for(let i=0; i<this.getCartDetails.length;i++) {
    if(this.getCartDetails[i].product_id === prodId) {
      if(qnt!=5)
      {
        this.getCartDetails[i].product_qty = parseInt(qnt) + 1;
      }
    }
  }

  localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
  this.loadCart();
}

decQty(prodId, qnt)
{
  for(let i=0; i<this.getCartDetails.length;i++) {
    if(this.getCartDetails[i].product_id === prodId) {
      if(qnt!=1)
      {
        this.getCartDetails[i].product_qty = parseInt(qnt) - 1;
      }
    }
  }

  localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
  this.loadCart();
}

//To calculate Total Price
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

//To Remove All Products:
removeall(){
  localStorage.removeItem('localCart');
  this.getCartDetails = [];
  this.total=0;
  this.cartNumber=0;
  this._productService.cartSubject.next(this.cartNumber); 
}

//To Remove SIngle Product
singleDelete(getCartDetail) {
  if(localStorage.getItem('localCart'))
 {
  this.getCartDetails = JSON.parse(localStorage.getItem('localCart'));
  for(let i=0; i<this.getCartDetails.length;i++){
    if(this.getCartDetails[i].product_id === getCartDetail) {
        this.getCartDetails.splice(i,1);
        localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
        this.loadCart();
        this.cartNumberFunc();
  }
 }
}
}
}
