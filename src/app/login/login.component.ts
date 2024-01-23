
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from '../service/user/user.service';
import { MessageDto } from '../dtos/Message.model';
import { CartService } from '../service/cart/cart.service';
import { Cart } from '../model/Cart.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 userLoginForm:FormGroup | any;
 messageDto: MessageDto|any;
 cartData:Cart|any;
  h!:string;



 
 constructor(private userservice:UserService,private route:Router,private cartService:CartService){

 }
  ngOnInit(){
    this.userLoginForm= new FormGroup({
      email : new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required)
    })
  }
  

  onLogin(){
    
    const logindata=this.userservice.userLogin(this.userLoginForm.value).subscribe((data:any)=>{
      this.messageDto=data;
      if(this.messageDto.status===200){
        alert(this.messageDto.message);
        localStorage.setItem('customerId',this.messageDto.data);
        console.log(localStorage.getItem("customerId"))

        this.cartService.findcartDetails(this.messageDto.data).subscribe((data:any)=>{
          this.messageDto=data;
          if(this.messageDto.status==200){
            this.cartData=this.messageDto.data;
            console.log(this.cartData)
            localStorage.setItem('cartId',this.cartData.cartId);
            console.log(localStorage.getItem("cartId"))

          }

        })

        this.route.navigate(['/home']);

      }
      else if(this.messageDto.status==400){
        alert(this.messageDto.message);
        this.route.navigate(['/login']);
        this.userLoginForm.reset();
      }

    },
    (_error:any)=>{
      alert(_error.error.message);
      this.route.navigate(['/login']);
        this.userLoginForm.reset();
    })
    
    

  
    
  }

  email(arg0: string, email: any) {
    throw new Error('Method not implemented.');
  }
}
