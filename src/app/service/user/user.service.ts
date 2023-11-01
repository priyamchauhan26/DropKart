import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  getProduct(data:string|any) {

    const params=new HttpParams().set("consumerType",data);
    const getproductUrl=`http://localhost:8081/product/${data}`
     return this.http.post(getproductUrl,params)
    
  }

  constructor(private http:HttpClient) {}
  userLogin(data:any)
  {
     return this.http.post('http://localhost:8080/customer/login',data)
  }

  getuserByemail(email:any){
    const params=new HttpParams().set("email",email);
    return this.http.post("http://localhost:8082/user/getuser",params)


  }
  updateprofile(user:any){
    return  this.http.post("http://localhost:8082/user/updateprofiledetails",user )
  }

  getcustomerByCustomerId(customerId:string|any){
    const params=new HttpParams().set("customerId",customerId);
    return this.http.post("http://localhost:9001/customer/getcustomerByCustomerId",params)
  }

}
