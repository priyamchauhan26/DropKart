import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CustomerSettingComponent } from './customer-setting/customer-setting.component';
import { CustomerAddressesComponent } from './customer-addresses/customer-addresses.component';
import { CustomeraddnewaddressComponent } from './customeraddnewaddress/customeraddnewaddress.component';
import { CustomereditAddressComponent } from './customeredit-address/customeredit-address.component';
import { CustomeraddressListComponent } from './customeraddress-list/customeraddress-list.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { MensComponent } from './mens/mens.component';
import { WomenComponent } from './women/women.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';
import { ProductbuyComponent } from './productbuy/productbuy.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:"full"},
    {path:'home',component:HomepageComponent},
    
  {path:'login' ,component:LoginComponent },
  {path:'signup',component:SignupComponent},
  {path:'customerSetting',component:CustomerSettingComponent,children:[
    {path:'address',component:CustomerAddressesComponent,children:[
    {path:'addresslist',component:CustomeraddressListComponent},
    {path:'newaddress',component:CustomeraddnewaddressComponent},
    {path:':id',component:CustomeraddnewaddressComponent},
    {path:':id/editaddress',component:CustomereditAddressComponent},
    {path:"",redirectTo:"newaddress",pathMatch:"full"}
    
    ]},
    {path:"profile",component:CustomerprofileComponent}
    
  ]},
  {path:'product/:type',component:ShowproductsComponent},
  {path:':subcategory/:brand/:productname/:productId/buy',component:ProductbuyComponent},
  {path:"cart",component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
