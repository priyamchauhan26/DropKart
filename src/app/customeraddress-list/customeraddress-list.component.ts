import { Component, OnInit } from '@angular/core';
import { MessageDto } from '../dtos/Message.model';
import { Address } from '../model/Address.model';
import { AddressService } from '../service/address/address.service';
import { Router } from '@angular/router';
import { ModalService } from '../service/modal/modal.service';

@Component({
  selector: 'app-customeraddress-list',
  templateUrl: './customeraddress-list.component.html',
  styleUrls: ['./customeraddress-list.component.css']
})
export class CustomeraddressListComponent implements OnInit {

  messageDto:MessageDto|any;
  addresslist:Address[]|any;
  address:Address|any;
  modalopen:boolean=false;

constructor(private addressService:AddressService,private router:Router,private modalService:ModalService){

}


  ngOnInit(){

    
   
    this.addressService.getCustomeraddress(localStorage.getItem("customerId")).subscribe((data:any)=>{
 
      this.messageDto=data;
      if(this.messageDto.status==200){
        this.addresslist=this.messageDto.data;
      }

    }, (_error:any)=>{
      alert(_error.error.message);
       
    })

  }

  
}
