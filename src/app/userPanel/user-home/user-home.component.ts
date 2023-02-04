import { Component } from '@angular/core';
import { Category } from 'src/app/adminPanel/models/Category.model';
import { Product } from 'src/app/adminPanel/models/product.mode';
import { CategoryserviceService } from 'src/app/adminPanel/services/categoryServices/categoryservice.service';
import { ProductService } from 'src/app/adminPanel/services/productService/product.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {

  allCategory!:Category[];
  allProduct! : Product[];
  constructor(
    public productService: ProductService,
    public categoryService: CategoryserviceService
  ) { }

  ngOnInit(): void {
    
    this.productService.getAllProduct().subscribe((data:Product[])=>{
      this.allProduct = data;
    })

    this.categoryService.getAllCategory().subscribe((data:Category[])=>{
      this.allCategory = data;
    })
  }

 


}
