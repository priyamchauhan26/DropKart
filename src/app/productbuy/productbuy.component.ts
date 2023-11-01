import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product/product.service';
import { ProductDto } from '../dtos/ProductDto.model';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Component({
  selector: 'app-productbuy',
  templateUrl: './productbuy.component.html',
  styleUrls: ['./productbuy.component.css']
})
export class ProductbuyComponent implements OnInit{

constructor(private productService:ProductService){

}

ngOnInit() {

   
}

}
