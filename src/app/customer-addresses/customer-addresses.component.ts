import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-customer-addresses',
  templateUrl: './customer-addresses.component.html',
  styleUrls: ['./customer-addresses.component.css']
})
export class CustomerAddressesComponent  {

constructor(private router:Router,private route: ActivatedRoute){}
  ngOnInit(){

  }



  NavigatenewAddress(){
    this.router.navigate(['../address', 'newaddress'], { relativeTo: this.route });

  }
  Navigateaddresslist(){ 
    this.router.navigate(['../address', 'addresslist'], { relativeTo: this.route });
  }
 

}
