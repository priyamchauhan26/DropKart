export class Address{
    
    private  addressId:number|undefined;
	private  name:String|undefined;
	private  houseNo:String|undefined;
	private  addressline1:String|undefined;
	private  addressline2:String|undefined;
	private  city:String|undefined;
	private  stateOrProvince:String|undefined;
	private  country:String|undefined;
	private  postalCode:String|undefined;
	private  mobileNo:String|undefined;
	private  customerId:String|undefined;
	private  status:number|undefined;
	private  createdDate:Date|undefined;
	private  modifiedDate:Date|undefined;

    constructor(addressId:number,
        name:String,
        houseNo:String,
        addressline1:String,
        addressline2:String,
        city:String,
        stateOrProvince:String,
        country:String,
        postalCode:String,
        mobileNo:String,
        customerId:String,
        status:number,
        createdDate:Date,
        modifiedDate:Date){};
}