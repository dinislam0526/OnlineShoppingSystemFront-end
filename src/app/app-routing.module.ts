import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './adminPanel/admin-home/admin-home.component';
import { DefaultComponent } from './adminPanel/admin-home/default/default.component';
import { CreatepurchaseComponent } from './adminPanel/components/createpurchase/createpurchase.component';
import { ProductComponent } from './adminPanel/components/product/product.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { FontPageComponent } from './userPanel/font-page/font-page.component';
import { LoginPageComponent } from './userPanel/login-page/login-page.component';
import { RegistrationPageComponent } from './userPanel/registration-page/registration-page.component';
import { UserHomeComponent } from './userPanel/user-home/user-home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/userHome'
 },
  { path: 'userHome', component: UserHomeComponent },

  { path: 'FontPageComponent', component: FontPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'registration', component: RegistrationPageComponent },
  { path: 'adminHome', component: AdminHomeComponent },
  {
    path: 'admin',
    component: DefaultComponent,
    children: [
      {
      path: '',
      component: DashboardComponent
      },
      {
      path: 'abc',
      component: AdminHomeComponent
      },
      {
      path: 'category',
      component: ProductComponent
      },
      {
       path: 'purchase',
      component: CreatepurchaseComponent
        }
     
    ]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
