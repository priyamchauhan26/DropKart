import { ProductDto } from "./ProductDto.model";

export class CartItemProductDto{
    cartItemId:number|undefined;
    productDto:ProductDto|undefined;
    cartId:string|undefined;
    size:string|undefined;
    quantity:number|undefined;


    constructor(cartItemId:number|undefined,
        productDto:ProductDto|undefined,
        cartId:String|undefined,
        size:String|undefined,
        quantity:number|undefined){

    }

}