import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart/cart.service';
import { CartItem } from '../model/CartItem.model';
import { Cart } from '../model/Cart.model';
import { MessageDto } from '../dtos/Message.model';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent implements OnInit {
  
  cart:Cart|any;
  messageDto:MessageDto|any;
  constructor(private cartService:CartService){

  }
  
  
  ngOnInit(){
    const cartId=localStorage.getItem("cartId")??'0';
   this.cartService.cartTotalAmount(cartId).subscribe((data:any)=>{
    this.messageDto=data;
    if(this.messageDto.status==200){
      this.cart=this.messageDto.data;
    }
    else{
      alert(this.messageDto.message)
    }

   })
  }
  

}
