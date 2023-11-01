import { ProductDiscount } from "../model/ProductDiscount.model";
import { ProductRating } from "../model/ProductRating.model";
import { ProductSize } from "../model/ProductSize.model";

export class ProductDto{
     id:number|undefined;
     productname:String|undefined;
     price:String|undefined;
     totalquantity:String|undefined;
     sellquantity:String|undefined;
	 serialnummber:String|undefined;
	 address:String|undefined;
	 code:String|undefined;
	 mid:String|undefined;
     brandname:String|undefined
	 subcategory:String|undefined;
	 pcid :number|undefined;
	 filename:String|undefined;
	 createdDate:String|undefined;
	 updatedDate:String|undefined;
	 consumerType:String|undefined;
     productsize:ProductSize|undefined;
     productRating:ProductRating|undefined;
     productDiscount:ProductDiscount|undefined;

    constructor(
        id:number,
productname:String,
price:String,
totalquantity:String,
sellquantity:String,
serialnummber:String,
address:String,
code:String,
mid:String,
brandname:String|undefined,
subcategory:String,
pcid :number,
filename:String,
createdDate:String,
updatedDate:String,
consumerType:String,
productsize:ProductSize,
productRating:ProductRating,
productDiscount:ProductDiscount,
    ){}

    
}