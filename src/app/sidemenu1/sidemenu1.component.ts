import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu1',
  templateUrl: './sidemenu1.component.html',
  styleUrls: ['./sidemenu1.component.css']
})
export class Sidemenu1Component {

  constructor(private router:Router){}

  onAddressClick(){
    this.router.navigate(["../customerSetting","address"])
  }
  onProfileClick(){
    this.router.navigate(["../customerSetting","profile"])
  }


}
