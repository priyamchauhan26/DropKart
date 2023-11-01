export class Product{
    private id:number|undefined;
    private productname:String|undefined;
    private price:String|undefined;
    private totalquantity:String|undefined;
    private sellquantity:String|undefined;
	private serialnummber:String|undefined;
	private address:String|undefined;
	private code:String|undefined;
	private mid:String|undefined;
	private subcategory:String|undefined;
	private pcid :number|undefined;
	private filename:String|undefined;
	private createdDate:String|undefined;
	private updatedDate:String|undefined;
	private consumerType:String|undefined;

    constructor(id:number,
        productname:String,
        price:String,
        totalquantity:String,
        sellquantity:String,
        serialnummber:String,
        address:String,
        code:String,
        mid:String,
        subcategory:String,
        pcid :number,
        filename:String,
        createdDate:String,
        updatedDate:String,
        consumerType:String,
    ){}
            
}