import { NgModule,Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ɵInternalFormsSharedModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = 'fileUpload';
  images;
  multipleImages = [];
  product: any;
  _msg = '';
  constructor(private _productService: ProductsService,private http: HttpClient){}

  ngOnInit(){
    this._productService.getProducts().subscribe((product:any) => {
      this.product = product;
    });
  }

  inc(item)
  {
    if(item.product_qty !=5){
     item.product_qty += 1;
    }
  }

  dec(item)
  {
    if(item.product_qty !=1){
      item.product_qty -= 1;
     }
  }

  itemsCart:any = [];
  addCart(item)
  {
    console.log(item);
    let cartDataNull = localStorage.getItem('localCart');
    if(cartDataNull == null)
    {
      let storeDataGet:any = [];
      storeDataGet.push(item);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));
    }
    else{
      var id = item.product_id;
      let index:number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localCart'));
      for(let i=0; i<this.itemsCart.length;i++)
      {
        if(parseInt(id) === parseInt(this.itemsCart[i].product_id)) {
          this.itemsCart[i].product_qty = item.product_qty;
          index = i;
          break;
        }
      }

      if(index == -1)
      {
        this.itemsCart.push(item);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }
      else
      {
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }
    }
    this.cartNumberFunc();
  }

  cartNumber:number =0;
  cartNumberFunc(){
    var cartValue = JSON.parse(localStorage.getItem('localCart'));
    this.cartNumber = cartValue.length;
    this._productService.cartSubject.next(this.cartNumber); 

  }
  
  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  selectMultipleImage(event){
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('file', this.images);
    console.log("Files Uploaded Successfully..")
   // this.http.post<any>('http://localhost:3000/file', formData).subscribe(
      this.http.post<any>('file', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  onMultipleSubmit(){
    const formData = new FormData();
    for(let img of this.multipleImages){
      formData.append('files', img);
    } 
    this._msg = 'File Uploaded Successfully..'

   // this.http.post<any>('http://localhost:3000/multipleFiles', formData).subscribe(
      this.http.post<any>('multipleFiles', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
 
}