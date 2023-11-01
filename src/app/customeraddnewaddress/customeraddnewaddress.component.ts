import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from '../model/Address.model';
import { AddressService } from '../service/address/address.service';
import { MessageDto } from '../dtos/Message.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customeraddnewaddress',
  templateUrl: './customeraddnewaddress.component.html',
  styleUrls: ['./customeraddnewaddress.component.css']
})
export class CustomeraddnewaddressComponent {
  addressForm: FormGroup;
  address:Address|any;
  messageDto:MessageDto|any;

  constructor(private addressService:AddressService,private router:Router,private route:ActivatedRoute) {
    this.addressForm = new FormGroup({
      name: new FormControl(null,Validators.required),
      houseNo: new FormControl(null,Validators.required),
      addressline1: new FormControl(null,Validators.required),
      addressline2:new FormControl(null,Validators.required),
      city: new FormControl(null,Validators.required),
      stateOrProvince: new FormControl(null,Validators.required),
      country:new FormControl(null,Validators.required),
      postalCode: new FormControl(null,Validators.required),
      mobileNo: new FormControl(null,Validators.required),
      
      
    });
  }
  onSubmit() {
    if (this.addressForm.valid) {
      this.address=this.addressForm.value;
      console.log(localStorage.getItem("customerId"))
      const formdata= this.addressService.saveaddress(localStorage.getItem("customerId"),this.address).subscribe((data:any)=>{
          if(data !=null){
            this.messageDto=data;
            if(this.messageDto.status==200){
              alert(this.messageDto.message);
              this.router.navigate(['../', 'addresslist'], { relativeTo: this.route });
            }
            else{
              alert(this.messageDto.message);
            }


          }
       }, (_error:any)=>{
        alert(_error.error.message);
        this.router.navigate(['../', 'newaddress'], { relativeTo: this.route });
        this.addressForm.reset();
         
      })

      const formData = this.addressForm.value;
      console.log(formData);
    } else {
      
    }
  }

}
