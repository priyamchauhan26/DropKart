import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDto } from 'src/app/dtos/ProductDto.model';
import { CartItem } from 'src/app/model/CartItem.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  

  constructor(private http:HttpClient) { }

  
  findcartDetails(customerId:number){
    const params=new HttpParams().set("customerId",customerId);
    return this.http.post("http://localhost:9092/cart/createCartforCustomer",params);
  }

  cartTotalAmount(cartId:string){
    const params=new HttpParams().set("cartId",cartId);
    return this.http.post("http://localhost:9092/cart/totalAmountOfCart",params);
  }
}
