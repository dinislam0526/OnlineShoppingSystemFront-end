import { Component } from '@angular/core';
import { ProductService } from 'src/app/adminPanel/services/productService/product.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent {

  cartItems = 0;

  constructor(
    public productService:ProductService
  ) { }

  ngOnInit(): void {
    
    let cartData =localStorage.getItem('localCart');
    if(cartData){
      this.cartItems = JSON.parse(cartData).length
    }

    this.productService.cartData1.subscribe((items)=>{
      this.cartItems = items.length;
    })
  }

}
