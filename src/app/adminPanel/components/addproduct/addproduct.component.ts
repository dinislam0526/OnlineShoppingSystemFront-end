import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  dataSource!: MatTableDataSource<Product>;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getAllCategoryName();

    this.getAllproduct();
    this.productService.refreshNeed.subscribe(() => {
      this.getAllproduct();
    });
  }

  getAllproduct(){
    this.productService.getAllProduct().subscribe(
      (data: Product[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  getAllCategoryName(){
    this.productService.getAllCategoryName().subscribe(
      (data: Category[]) => {
        this.allCategory = data
      }
    );
  }

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

  deleteProduct(pro_id: number) {
    this.productService.deleteProduct(pro_id).subscribe();
  }

  // clear() {
  //   this.productService.currentProduct =new Product();
  // }


}



