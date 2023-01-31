import { Component } from '@angular/core';
import { Product } from 'src/app/adminPanel/models/product.mode';
import { ProductService } from 'src/app/adminPanel/services/productService/product.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {

  allProduct! : Product[];
  constructor(
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    
    this.productService.getAllProduct().subscribe((data:Product[])=>{
      this.allProduct = data;
    })
  }

 


}
