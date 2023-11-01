import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service';
import { MessageDto } from '../dtos/Message.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/User.model';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements  OnInit {
  
  customerprofileform:FormGroup|any;
  customer:User|any;



  messagedto: MessageDto|any;
  
  
  
  constructor(private userService:UserService){

    this.customerprofileform = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      dateOfBirth: new FormControl(null, [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      profilePicture:new FormControl('',Validators.required)
    });
  }
  
  
  
  ngOnInit(){

    this.userService.getcustomerByCustomerId(localStorage.getItem("customerId")).subscribe((data:any)=>{

      this.messagedto=data;
      console.log(data);
      if(this.messagedto.status==200){
        this.customer=this.messagedto.data;
        this.customerprofileform.patchValue(this.customer);
      }
      else{
        alert(this.messagedto.message)
      }

    })


  }
  onSubmit(){
   console.log(this.customerprofileform.value);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result; // Use the optional chaining operator
        if (result) {
          this.customerprofileform.get('profilePicture').setValue(result);
        }
      };
      reader.readAsDataURL(file);
    }
  }
  
  
  
  
  
  
  

}
