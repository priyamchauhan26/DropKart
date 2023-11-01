export class ProductRating{
     productRatingId:number|undefined;
     productId:number|undefined;
     averageRating:number|undefined;
     totalReviews:number|undefined;

    constructor(
        productRatingId:number,
        productId:number,
        averageRating:number,
        totalReviews:number
    ){

    }
}