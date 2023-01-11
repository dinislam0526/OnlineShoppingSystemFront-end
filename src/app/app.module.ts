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

@NgModule({
  declarations: [
    AppComponent,
    UserHeaderComponent,
    UserFooterComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    UserHomeComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
