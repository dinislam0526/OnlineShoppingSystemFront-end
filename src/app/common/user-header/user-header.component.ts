import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/adminPanel/models/Category.model';
import { Coupon } from 'src/app/adminPanel/models/coupon.model';
import { CartService } from 'src/app/adminPanel/services/cartService/cart.service';
import { CouponService } from 'src/app/adminPanel/services/couponService/coupon.service';
import { ProductService } from 'src/app/adminPanel/services/productService/product.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  allCategory!: Category[];
  cartItems = 0;
  test: boolean = false;
  sellerName: string = "";
  userName: string = "";
  couponDetail!:Coupon[];

  constructor(
    public productService: ProductService,
    public cartService: CartService,
    public couponService:CouponService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getLogin();

    this.getAllCategoryName();

    this.getAllCouponDetails();

    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      this.cartItems = JSON.parse(cartData).length
    };

    this.productService.cartData1.subscribe((items) => {
      this.cartItems = items.length;
    });

    this.cartService.cartData.subscribe((items) => {
      this.cartItems = items.length;
    });



    // this.route.events.subscribe((val: any) => {


    //   if (val.url) {
    //      if(localStorage.getItem('user')){
    //       let userStore = localStorage.getItem('user');
    //       console.warn('userStore---userStore--',userStore);

    //       let userData = userStore && JSON.parse(userStore);
    //       this.userName= userData.username;
    //       console.warn('userName-----',this.userName);

    //       this.menuType='user';
    //     }
    //      else {
    //       this.menuType = 'default';
    //     }
    //   }
    // });

  }

  getLogin() {
    if (localStorage.getItem('user')) {
      let userStore = localStorage.getItem('user');
      let userData = userStore && JSON.parse(userStore);
      this.userName = userData.username;
      this.test = true;
      this.cartService.getCartList(userData.id);
    }
    
  }

  getAllCategoryName() {
    this.productService.getAllCategoryName().subscribe(
      (data: Category[]) => {
        this.allCategory = data
      }
    );
  }

  userLogout() {
    localStorage.removeItem('user');
    this.route.navigate(['/UserAuth'])
    this.productService.cartData1.emit([]);
  }

  getAllCouponDetails(){
    this.couponService.getAllCouponDetails().subscribe((data)=>{
      this.couponDetail = data;
    })
  }
  

}



