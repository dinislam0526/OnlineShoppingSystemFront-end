import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/adminPanel/models/product.mode';
import { ProductService } from 'src/app/adminPanel/services/productService/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {

  id!:number;
  allProduct!:Product;

  constructor(
    public productService: ProductService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['proid'];
    this.productService.getById(this.id).subscribe((data:Product)=>{
      this.allProduct = data;
    })
  }

}
