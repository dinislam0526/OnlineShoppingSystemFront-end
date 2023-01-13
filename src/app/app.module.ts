import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHeaderComponent } from './common/user-header/user-header.component';
import { UserFooterComponent } from './common/user-footer/user-footer.component';
import { AdminHeaderComponent } from './common/admin-header/admin-header.component';
import { AdminFooterComponent } from './common/admin-footer/admin-footer.component';
import { UserHomeComponent } from './userPanel/user-home/user-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminHomeComponent } from './adminPanel/admin-home/admin-home.component';
import { FontPageComponent } from './userPanel/font-page/font-page.component';
import { LoginPageComponent } from './userPanel/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule} from './materil.module';
import { RegistrationPageComponent } from './userPanel/registration-page/registration-page.component';
import { DefaultModule } from './adminPanel/admin-home/default/default.module';

@NgModule({
  declarations: [
    AppComponent,
    UserHeaderComponent,
    UserFooterComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    UserHomeComponent,
    AdminHomeComponent,
    FontPageComponent,
    LoginPageComponent,
    RegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    DefaultModule
  ],

  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
