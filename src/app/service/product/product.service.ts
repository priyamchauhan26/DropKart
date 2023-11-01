import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ProductDto } from 'src/app/dtos/ProductDto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productDataSubject: BehaviorSubject<ProductDto | null> = new BehaviorSubject<ProductDto | null>(null);
  productData$ = this.productDataSubject.asObservable();
  constructor(private http:HttpClient) { }

  findImageByProductId(productId:String|any){
    const params=new HttpParams().set("productId",productId);
    return this.http.post("http://localhost:8081/productImages/findImageByProductId",params)

  }
  sendproduct(productdto:ProductDto|any){
    this.productDataSubject.next(productdto);

  }

  getProductSizeByProductId(productId:String|any){
    const params=new HttpParams().set("productId",productId);
    return this.http.post("http://localhost:8081/productSize/getProductSizeByProductId",params)
  }

  

 
 
 
}
