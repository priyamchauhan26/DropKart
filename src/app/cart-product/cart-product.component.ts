import { Component, OnInit } from '@angular/core';
import { ProductDto } from '../dtos/ProductDto.model';
import { CartItem } from '../model/CartItem.model';
import { CartItemService } from '../service/cartItem/cart-item.service';
import { MessageDto } from '../dtos/Message.model';
import { CartItemProductDto } from '../dtos/CartItemProductDto.model';
import { ProductService } from '../service/product/product.service';
import { ProductSizeDto } from '../dtos/ProductSizeDto.model';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent  implements OnInit{
  
  productDto:ProductDto|any;
  cartItem:CartItem|any;
  cartItemProductdto: CartItemProductDto|any;
  cartItemProductdtolist:CartItemProductDto[]=[];
  messageDto:MessageDto|any;
  productSizedto:ProductSizeDto|any;
  
  sizeOptions:string[]=[];
  quantityOptions:number[]=[];
  
  constructor(private cartItemService:CartItemService,private productService:ProductService){


  }
  
  
  ngOnInit(){
    this.cartItemService.findProductByCartId(localStorage.getItem("cartId")).subscribe((data:any)=>{
      this.messageDto=data;
      console.log(this.messageDto)
      if(this.messageDto.status==200){
       this.cartItemProductdtolist=this.messageDto.data;
       console.log(this.cartItemProductdtolist);
      
      }

    })

  }

  fetchDropdownOptions(fieldValue:string,i:number){
    console.log(fieldValue);
    this.cartItemProductdto=this.cartItemProductdtolist[i];

    console.log(this.cartItemProductdto)
    if(fieldValue==='size'){
    this.productService.getProductSizeByProductId(this.cartItemProductdto?.productDto.id).subscribe((data:any)=>{
      this.messageDto=data;
      console.log(this.messageDto);
      if(this.messageDto.status==200){
        this.productSizedto=this.messageDto.data;
      }
      else{
        alert('Failed to load data');
      }

    })
  }

  }

  onOptionChange(event:any,fieldValue:string){

    const selectedValue = event?.target?.value;
    console.log(selectedValue);
  }

}
