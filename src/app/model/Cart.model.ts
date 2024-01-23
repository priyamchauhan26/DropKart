export class Cart{

  cartId :number|undefined;
 cartTotal:number|undefined;
 shippingMethod:string|undefined;
 shippingCost:number|undefined;
 couponCode:string|undefined;
 lastUpdatedDate:string|undefined;
 expirationDate:string|undefined;
 customerId:string|undefined;
 cartStatus:number|undefined;

 constructor(cartId :number|undefined,
    cartTotal:number|undefined,
    shippingMethod:string|undefined,
    shippingCost:number|undefined,
    couponCode:string|undefined,
    lastUpdatedDate:Date|undefined,
    expirationDate:Date|undefined,
    customerId:string|undefined,
    cartStatus:number|undefined){

 }

}