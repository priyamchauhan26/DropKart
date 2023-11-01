import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product/product.service';
import { ProductDto } from '../dtos/ProductDto.model';
import { async } from 'rxjs';
import { ProductSizeDto } from '../dtos/ProductSizeDto.model';
import { MessageDto } from '../dtos/Message.model';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  
  productDto:ProductDto|any;
  productSizeDtolist:ProductSizeDto[]|any;
  productSizeDto:ProductSizeDto|any;
  messageDto:MessageDto|any;
  activeCardIndex: number | null = null;
  isSizeClicked:boolean=false;
  flag:number=0;
  constructor(private productService:ProductService){
    

  }
  
  
  ngOnInit() {
    this.productService.productData$.subscribe((data: ProductDto | null) => {
      this.productDto = data;
      console.log("Data received inside the component", this.productDto);
    });
    console.log("Data received outside the subscribe method", this.productDto);

    this.productService.getProductSizeByProductId(this.productDto.id).subscribe((data:any)=>{
      this.messageDto=data;
      if(this.messageDto.status==200){
        this.productSizeDtolist=this.messageDto.data;
        console.log("Product Size ==>"+this.productSizeDtolist)
      }
    })
  }

  oncardClick(i: number) {
    
    console.log(i);
    this.productSizeDto=this.productSizeDtolist[i];
    
    if (this.activeCardIndex === i) {
      this.activeCardIndex = null; // Clicked card is already active, reset it
    } else {
      this.activeCardIndex = i; // Set the clicked card as active
    }
  }

  addtocart(){

    if (this.flag==0) {
      this.isSizeClicked=!this.isSizeClicked;
    }
    console.log( "productSize" +this.productSizeDto.productSize);
    console.log( "product" +this.productDto);

  }
  addtowishlist(){
    
  }



}
