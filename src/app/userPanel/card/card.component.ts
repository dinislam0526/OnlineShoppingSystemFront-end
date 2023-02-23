import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/adminPanel/models/Cart.model';
import { Coupon } from 'src/app/adminPanel/models/coupon.model';
import { PriceSummery } from 'src/app/adminPanel/models/PriceSummery.model';
import { CartService } from 'src/app/adminPanel/services/cartService/cart.service';
import { CouponService } from 'src/app/adminPanel/services/couponService/coupon.service';
import { ProductService } from 'src/app/adminPanel/services/productService/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  couponCode:string ='';
  cartData: Cart[] | undefined;
  priceSummery: PriceSummery = {
    price: 0,
    discount: 0,
    tax: 0,
    delivery: 0,
    total: 0
  };

  constructor(private cartService: CartService,
    private couponService:CouponService ,
    private productService:ProductService,
    private router:Router
    ){ }
     

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
    if(localStorage.getItem('user')){
      this.cartService.currentCart().subscribe((result) => {
        this.cartData = result;
        let price = 0;
        result.forEach((item) => {
          if(item.pro_qnt){
            price = price + (+item.pro_price* +item.pro_qnt);
          }
        });
        this.priceSummery.price = price;
        this.priceSummery.discount=price*.0;
        this.priceSummery.tax = +(price*.10).toFixed(3);
        this.priceSummery.delivery = 100;
        this.priceSummery.total = price+100+(price*.10)-(this.priceSummery.discount);
        this.priceSummery.total =+ this.priceSummery.total.toFixed(3)
      });
    }else{
      let result = this.productService.getCartFromLocal();
      this.cartData = result;
      let price = 0;
      result.forEach((item: { pro_qnt: string | number; pro_price: string | number; }) => {
        if(item.pro_qnt){
          price = price + (+item.pro_price* +item.pro_qnt);
        }
        
      });
      this.priceSummery.price = price;
      this.priceSummery.discount=price*.0;
      this.priceSummery.tax = +(price*.10).toFixed(3);
      this.priceSummery.delivery = 100;
      this.priceSummery.total = price+100+(price*.10)-(this.priceSummery.discount);
      this.priceSummery.total =+ this.priceSummery.total.toFixed(3)
    }
  }

  coupon!:Coupon;
  coupCodeApply(data:string){

    this.couponService.coupCodeApply(data).subscribe((result:Coupon)=>{
      this.coupon = result;
    
      if(this.coupon !== null){
        if(this.priceSummery.price >this.coupon.minimumRange){
          console.warn('.............'+this.priceSummery.price);
          this.priceSummery.price 
          this.priceSummery.discount=(this.priceSummery.price*this.coupon.percentage) / 100;
          this.priceSummery.tax = +(this.priceSummery.price*.10).toFixed(3);
          this.priceSummery.delivery = 100;
          this.priceSummery.total = this.priceSummery.price+100+(this.priceSummery.price*.10)-(this.priceSummery.discount);
          this.priceSummery.total =+ this.priceSummery.total.toFixed(3)
        }
      }

    });
  }

  redirectToCheckoutPage(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/checkout'])
    }else{
      this.router.navigate(['/UserAuth'])
    }
  }


}
