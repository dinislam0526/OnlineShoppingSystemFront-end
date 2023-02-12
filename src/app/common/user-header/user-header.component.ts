import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/adminPanel/models/Category.model';
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
  constructor(
    public productService: ProductService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getLogin();

    this.getAllCategoryName();

    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      this.cartItems = JSON.parse(cartData).length
    };

    this.productService.cartData1.subscribe((items) => {
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
      console.warn('userStore---userStore--', userStore);

      let userData = userStore && JSON.parse(userStore);
      this.userName = userData.username;
      console.warn('userName-----', this.userName);
      this.test = true;

    }
    else {

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
    this.productService.cartData1.emit([])
  }

  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      // this.product.searchProduct(element.value).subscribe((result)=>{

      //   if(result.length>5){
      //     result.length=length
      //   }
      //   this.searchResult=result;
      // })
    }
  }
  hideSearch() {
    // this.searchResult=undefined
  }
  redirectToDetails(id: number) {
    this.route.navigate(['/details/' + id])
  }
  submitSearch(val: string) {
    console.warn(val)
    this.route.navigate([`search/${val}`]);
  }
}



