import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontPageComponent } from './userPanel/font-page/font-page.component';

import { LoginPageComponent } from './userPanel/login-page/login-page.component';
import { RegistrationPageComponent } from './userPanel/registration-page/registration-page.component';
import { UserHomeComponent } from './userPanel/user-home/user-home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'FontPageComponent' },
  { path: 'FontPageComponent', component: FontPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'registration', component: RegistrationPageComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
