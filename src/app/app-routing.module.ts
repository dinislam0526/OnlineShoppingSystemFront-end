import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './adminPanel/admin-home/admin-home.component';
import { DefaultComponent } from './adminPanel/admin-home/default/default.component';
import { AddcategoryComponent } from './adminPanel/components/addcategory/addcategory.component';
import { AddproductComponent } from './adminPanel/components/addproduct/addproduct.component';
import { AddvendorComponent } from './adminPanel/components/addvendor/addvendor.component';
import { CreatepurchaseComponent } from './adminPanel/components/createpurchase/createpurchase.component';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { CardComponent } from './userPanel/card/card.component';
import { CheckoutComponent } from './userPanel/checkout/checkout.component';
import { FontPageComponent } from './userPanel/font-page/font-page.component';
import { LoginPageComponent } from './userPanel/login-page/login-page.component';
import { PaymentmethodComponent } from './userPanel/paymentmethod/paymentmethod.component';
import { ProductViewComponent } from './userPanel/product-view/product-view.component';
import { RegistrationPageComponent } from './userPanel/registration-page/registration-page.component';
import { UserHomeComponent } from './userPanel/user-home/user-home.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/userHome'
  },
  { path: 'userHome', component: UserHomeComponent },
  { path: 'FontPageComponent', component: FontPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'registration', component: RegistrationPageComponent },
  { path: 'adminHome', component: AdminHomeComponent },
  { path: 'card', component: CardComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'paymentmethod', component: PaymentmethodComponent },
  { path: 'view', component: ProductViewComponent },


  {
    path: 'admin',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'home',
        component: AdminHomeComponent
      },
      {
        path: 'category',
        component: AddcategoryComponent
      },
      {
        path: 'purchase',
        component: CreatepurchaseComponent
      },
      {
        path: 'addProduct',
        component: AddproductComponent
      },
      {
        path: 'addvendor',
        component: AddvendorComponent
      }


    ]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
