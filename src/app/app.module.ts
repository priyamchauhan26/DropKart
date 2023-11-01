import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { CustomerAddressesComponent } from './customer-addresses/customer-addresses.component';
import { CustomeraddressformComponent } from './customeraddressform/customeraddressform.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerSettingComponent } from './customer-setting/customer-setting.component';
import { Sidemenu1Component } from './sidemenu1/sidemenu1.component';
import { Sidemenu2Component } from './sidemenu2/sidemenu2.component';
import { CustomeraddnewaddressComponent } from './customeraddnewaddress/customeraddnewaddress.component';
import { CustomereditAddressComponent } from './customeredit-address/customeredit-address.component';
import { CustomeraddressListComponent } from './customeraddress-list/customeraddress-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { MensComponent } from './mens/mens.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { FilterComponent } from './filter/filter.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';
import { FiltercategoriesComponent } from './filtercategories/filtercategories.component';
import { FilterBrandsComponent } from './filter-brands/filter-brands.component';
import { ProductbuyComponent } from './productbuy/productbuy.component';
import { ProductimagesComponent } from './productimages/productimages.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { AmountComponent } from './amount/amount.component';
import { ProductsOffersComponent } from './products-offers/products-offers.component'; // Import MatDialogModule


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    CustomeraddressformComponent,
    CustomerAddressesComponent,
    LoginComponent,
    SignupComponent,
    CustomerSettingComponent,
    Sidemenu1Component,
    Sidemenu2Component,
    CustomeraddnewaddressComponent,
    CustomereditAddressComponent,
    CustomeraddressListComponent,
    ModalComponent,
    CustomerprofileComponent,
    MensComponent,
    WomenComponent,
    KidsComponent,
    FilterComponent,
    ShowproductsComponent,
    FiltercategoriesComponent,
    FilterBrandsComponent,
    ProductbuyComponent,
    ProductimagesComponent,
    ProductdetailsComponent,
    CartComponent,
    CartProductComponent,
    AmountComponent,
    ProductsOffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
