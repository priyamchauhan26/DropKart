import { Component, Input, OnInit } from '@angular/core';
import { ProductDto } from '../dtos/ProductDto.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product/product.service';
import { ProductImagesDto } from '../dtos/ProductImagesDto.model';
import { MessageDto } from '../dtos/Message.model';

@Component({
  selector: 'app-productimages',
  templateUrl: './productimages.component.html',
  styleUrls: ['./productimages.component.css']
})
export class ProductimagesComponent implements OnInit {

 productImagesDto:ProductImagesDto[]|undefined;
 messageDto:MessageDto|any;
 
  constructor(private route:ActivatedRoute,private ProductService:ProductService){

  }


  @Input("productId") productId: String | undefined;

  ngOnInit(){
    let productId=null;
    this.route.params.subscribe(params => {
      productId = params['productId'];
      console.log(productId)
      this.ProductService.findImageByProductId(productId).subscribe((data:any)=>{
        this.messageDto=data;
        if(this.messageDto.status==200){
          this.productImagesDto=this.messageDto.data;
        }

      })

  })
  

}

}
