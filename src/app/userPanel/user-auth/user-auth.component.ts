import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/adminPanel/models/login.model';
import { SignUp } from 'src/app/adminPanel/models/SignUp.model';
import { ProductService } from 'src/app/adminPanel/services/productService/product.service';
import { UserService } from 'src/app/adminPanel/services/userAuthService/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent implements OnInit {
  showLogin:boolean=true
  authError:string="";
  constructor(private user: UserService, private productService:ProductService) {}

  ngOnInit(): void {
    this.user.userAuthReload();
  }

  signUp(data: SignUp) {
    this.user.userSignUp(data);
  }
  login(data: Login) {
    this.user.userLogin(data)
    this.user.invalidUserAuth.subscribe((result)=>{
      console.warn(result);
      if(result){
         this.authError="User not found"
      }else{
        // this.localCartToRemoteCart();
      }
      
    })
  }
  openSignUp(){
    this.showLogin=false
  }
  openLogin(){
    this.showLogin=true;
  }

  // localCartToRemoteCart(){
  //  let data = localStorage.getItem('localCart');
  //  let user = localStorage.getItem('user');
  //  let userId= user && JSON.parse(user).id;
  //  if(data){
  //   let cartDataList:Product[]= JSON.parse(data);
  
  //   cartDataList.forEach((product:Product, index)=>{
  //     let cartData:cart={
  //       ...product,
  //       productId:product.id,
  //       userId
  //     }
  //     delete cartData.id;
  //     setTimeout(() => {
  //       this.product.addToCart(cartData).subscribe((result)=>{
  //         if(result){
  //           console.warn("data is stored in DB");
  //         }
  //       })
  //     }, 500);
  //     if(cartDataList.length===index+1){
  //       localStorage.removeItem('localCart')
  //     }
  //   })
  //  }

  //  setTimeout(() => {
  //   this.product.getCartList(userId)
  //  }, 2000);
    
  // }
}
