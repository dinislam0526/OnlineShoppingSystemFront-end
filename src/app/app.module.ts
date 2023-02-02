import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHeaderComponent } from './common/user-header/user-header.component';
import { UserFooterComponent } from './common/user-footer/user-footer.component';
import { UserHomeComponent } from './userPanel/user-home/user-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminHomeComponent } from './adminPanel/admin-home/admin-home.component';
import { FontPageComponent } from './userPanel/font-page/font-page.component';
import { LoginPageComponent } from './userPanel/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule} from './AngularMateril.module';
import { RegistrationPageComponent } from './userPanel/registration-page/registration-page.component';
import { AdminModule} from './adminPanel/admin-home/default/admin.module';
import { CardComponent } from './userPanel/card/card.component';
import { CheckoutComponent } from './userPanel/checkout/checkout.component';
import { PaymentmethodComponent } from './userPanel/paymentmethod/paymentmethod.component';
import { ProductViewComponent } from './userPanel/product-view/product-view.component';
import { ContactComponent } from './userPanel/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserHeaderComponent,
    UserFooterComponent,
    UserHomeComponent,
    AdminHomeComponent,
    FontPageComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    CardComponent,
    CheckoutComponent,
    PaymentmethodComponent,
    ProductViewComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AdminModule,
    HttpClientModule,
    FormsModule
    
  ],

  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
