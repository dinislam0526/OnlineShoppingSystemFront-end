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
  allProduct!: Product;
  productQuantity:number=1;
  removeCart = false;

  constructor(
    public productService: ProductService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['proid'];
    this.productService.getById(this.id).subscribe((data:Product)=>{
      this.allProduct = data;

      let cartData= localStorage.getItem('localCart');
      if(this.id && cartData){
        let items = JSON.parse(cartData);
        items = items.filter((item :Product)=> this.id == item.pro_id)
        if(items.length){
          this.removeCart = true
        }else{
          this.removeCart = false
        }
      }
    })

  }

  handleQuantity(val:string){
    if(this.productQuantity <20 && val === 'plus'){
      this.productQuantity += 1;
    }else if(this.productQuantity >1 && val === 'min'){
      this.productQuantity -= 1;
    }
  }

  addToCart(){
    if(this.allProduct){
      this.allProduct.Pro_qnt = this.productQuantity;
      if(!localStorage.getItem('user')){
        this.productService.localAddToCart(this.allProduct);
        this.removeCart = true
      }
      
    }
  }

  removeToCart(pro_id:number){
    this.productService.removeItemFromCart(pro_id);
    this.removeCart = false
  }

}
