import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/common/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FooterComponent } from 'src/app/common/components/footer/footer.component';
import { HeaderComponent } from 'src/app/common/components/header/header.component';
import { SidebarComponent } from 'src/app/common/components/sidebar/sidebar.component';
import { AngularMaterialModule } from 'src/app/AngularMateril.module';
import { ProductComponent } from '../../components/product/product.component';
import { CategorylistComponent } from '../../shared/category/categorylist/categorylist.component';
import { CategoryserviceService } from '../../services/categoryServices/categoryservice.service';
import { FormsModule } from '@angular/forms';
import { CreatepurchaseComponent } from '../../components/createpurchase/createpurchase.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        DefaultComponent,
        DashboardComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        ProductComponent,
        CreatepurchaseComponent,
        CategorylistComponent
    ],
    providers:[
      CategoryserviceService
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatSidenavModule,
        MatDividerModule,
        AngularMaterialModule,
        FormsModule,
        FlexLayoutModule
       
    ]
})
export class AdminModule { }
