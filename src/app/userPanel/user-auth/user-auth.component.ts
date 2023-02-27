import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/adminPanel/models/Cart.model';
import { Login } from 'src/app/adminPanel/models/login.model';
import { Product } from 'src/app/adminPanel/models/product.mode';
import { SignUp } from 'src/app/adminPanel/models/SignUp.model';
import { CartService } from 'src/app/adminPanel/services/cartService/cart.service';
import { ProductService } from 'src/app/adminPanel/services/productService/product.service';
import { UserService } from 'src/app/adminPanel/services/userAuthService/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent implements OnInit {
  showLogin: boolean = true
  authError: string = "";
  constructor(private userService: UserService, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.userService.userAuthReload();
  };

  signUp(data: SignUp) {
    this.userService.userSignUp(data);
  };

  login(data: Login) {
    this.userService.userLogin(data)
    this.userService.invalidUserAuth.subscribe((result) => {
      if (result) {
        this.authError = "User not found"
      } else {
        this.localCartToRemoteCart();
      }

    });
  };

  openSignUp() {
    this.showLogin = false
  };

  openLogin() {
    this.showLogin = true;
  };

  localCartToRemoteCart() {
    let data = localStorage.getItem('localCart');
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;
    if (data) {
      let cartDataList: Product[] = JSON.parse(data);

      cartDataList.forEach((product: Product, index) => {
        let cartData: Cart = {
          ...product,
          cart_id: undefined,
          userId
        }
        setTimeout(() => {
          this.cartService.addToCart(cartData).subscribe((result) => {
            if (result) {
              console.warn("data is stored in DB");
            }
          })
        }, 500);
        if (cartDataList.length === index + 1) {
          localStorage.removeItem('localCart')
        }
      })
    }
    setTimeout(() => {
      this.cartService.getCartList(userId)
    }, 2000);
  }



}