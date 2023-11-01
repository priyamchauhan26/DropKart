import { Component, OnInit } from '@angular/core';
import { MessageDto } from '../dtos/Message.model';
import { ProductDto } from '../dtos/ProductDto.model';
import { UserService } from '../service/user/user.service';
import { ProductRating } from '../model/ProductRating.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product/product.service';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent  implements OnInit{
  
  messageDto :MessageDto|any;
  productdtolist:ProductDto[]=[]; 
  productRating:ProductRating|any;
  productdto:ProductDto|any;
  constructor(private userService:UserService,private productService:ProductService ,private route:ActivatedRoute,private router:Router){

  }
  
  
  
  ngOnInit(){

    let productType=null;
    this.route.params.subscribe(params => {
      productType = params['type'];
    
    this.userService.getProduct(productType).subscribe((data:any)=>{
      this.messageDto=data;
      if(this.messageDto.status==200){
        this.productdtolist=this.messageDto.data;
      }
      else{
        alert(this.messageDto.message);
      }

    }, (_error:any)=>{
      alert(_error.error.message);
       
    })

  })

  }
  onSubmit(i:number|any){
    this.productdto=this.productdtolist[i];
    console.log(this.productdtolist[i]);
    this.productService.sendproduct(this.productdto);
    const brandname=this.productdto.brandname;
    const productid=this.productdto.id;
    const subcategory=this.productdto.subcategory;
    const productname=this.productdto.productname;
    const url = `${subcategory}/${brandname}/${productname}/${productid}/buy`;
   
    this.router.navigate([url]);
    
  }

 


}
