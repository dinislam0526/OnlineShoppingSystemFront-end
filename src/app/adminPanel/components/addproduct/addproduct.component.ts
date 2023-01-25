import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/Category.model';
import { Product } from '../../models/product.mode';
import { ProductService } from '../../services/productService/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  displayedColumns: string[] = ['Product ID', 'Category Name','Product Name','Product Price', 'Product Description', 'Product ImageName', 'Actions'];
  allCategory!: Category[];


  constructor(
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    // this.getAllCategoryName();
  }


  // getAllCategoryName(){
  //   this.productService.getAllCategoryName().subscribe(
  //     (data: Category[]) => {
  //       this.allCategory = data
  //     }
  //   );
  // }

  createOrUpdateProduct() {
    console.log(this.productService.currentProduct);
    if ( this.productService.currentProduct.pro_id != null ) {
      this.updateProduct(this.productService.currentProduct);
    } else {
      this.createProduct(this.productService.currentProduct);
    }
  }

  createProduct(product: Product) {
    this.productService.createProduct(product).subscribe();
  }

  updateProduct(product: Product) {
    this.productService.updateProduct(product).subscribe();
  }

  // clear() {
  //   this.productService.currentProduct =new Product();
  // }


}



