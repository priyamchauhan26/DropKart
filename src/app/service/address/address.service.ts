import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from 'src/app/model/Address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) { }

  public saveaddress(customerId:string|any,address:Address|any){
    const params=new HttpParams().set("customerId",customerId);
    return this.http.post<any>("http://localhost:8080/customeraddress/addAddress",address,{params})



  }

  public getCustomeraddress(customerId:string|any){
    const params=new HttpParams().set("customerId",customerId);
    return this.http.post<any>("http://localhost:8080/customeraddress/getaddressBycustId",params)
  }
}
