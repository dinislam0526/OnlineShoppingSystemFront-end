import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/adminPanel/models/product.mode';
import { ProductService } from 'src/app/adminPanel/services/productService/product.service';

@Component({
  selector: 'app-category-wise-product-view',
  templateUrl: './category-wise-product-view.component.html',
  styleUrls: ['./category-wise-product-view.component.css']
})
export class CategoryWiseProductViewComponent {

  catName!:string;
  allProduct! : Product[];
  categoryWiseProduct!:Product[];
  constructor(
    public productService: ProductService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.catName = this.route.snapshot.params['pro_cat'];
    this.productService.getCategoryWiseProduct(this.catName).subscribe((data:Product[])=>{
      this.categoryWiseProduct = data;

      
    })
 
  }
}