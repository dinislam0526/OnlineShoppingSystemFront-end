import { Component } from '@angular/core';
import { Cart } from 'src/app/adminPanel/models/Cart.model';
import { PriceSummery } from 'src/app/adminPanel/models/PriceSummery.model';
import { CartService } from 'src/app/adminPanel/services/cartService/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  cartData: Cart[] | undefined;
  priceSummery: PriceSummery = {
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0
  };

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.loadDetails();


  }

  removeToCart(cartId:number|undefined){
    cartId && this.cartData && this.cartService.removeToCart(cartId)
    .subscribe((result)=>{
      this.loadDetails();
    })
  }

  loadDetails(){
    this.cartService.currentCart().subscribe((result) => {
      this.cartData = result;
      let price = 0;
      result.forEach((item) => {
        if(item.pro_qnt){
          price = price + (+item.pro_price* +item.pro_qnt);
        }
        
      });
      this.priceSummery.price = price;
      this.priceSummery.discount=price/10;
      this.priceSummery.tax = price/10;
      this.priceSummery.delivery= 100;
      this.priceSummery.total= price+100-(price/10)-(price/10);
      
    });


  }


}
