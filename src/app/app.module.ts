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
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule} from './AngularMateril.module';
import { RegistrationPageComponent } from './userPanel/registration-page/registration-page.component';
import { AdminModule} from './adminPanel/admin-home/default/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    UserHeaderComponent,
    UserFooterComponent,
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
    AdminModule
    
  ],

  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
