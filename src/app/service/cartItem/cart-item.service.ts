import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/model/CartItem.model';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  constructor(private http:HttpClient) { }

  addItemtoCart(cartItems:CartItem|any){
    return  this.http.post("http://localhost:9092/cartItem/addProductItem",cartItems)
    
  }
  findProductByCartId(cartId:string|any){
    const param=new HttpParams().set("cartId",cartId);
    return  this.http.post("http://localhost:9092/cartItem/findProductByCartId",param)

  }
}
