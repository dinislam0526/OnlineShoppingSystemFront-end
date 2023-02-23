import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/adminPanel/models/Cart.model';
import { Product } from 'src/app/adminPanel/models/product.mode';
import { CartService } from 'src/app/adminPanel/services/cartService/cart.service';
import { ProductService } from 'src/app/adminPanel/services/productService/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {

  id!: number;
  allProduct: Product = new Product;
  productQuantity: number = 1;
  removeCart = false;
  cartData!: Product;
  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    public cartService: CartService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['proid'];
    this.productService.getById(this.id).subscribe((data: Product) => {
      this.allProduct = data;

      let cartData = localStorage.getItem('localCart');
      if (this.id && cartData) {
        let items = JSON.parse(cartData);
        items = items.filter((item: Product) => this.id == item.pro_id)
        if (items.length) {
          this.removeCart = true
        } else {
          this.removeCart = false
        }
      }

      let user = localStorage.getItem('user');
      if (user) {
        let userId = user && JSON.parse(user).id;
        this.cartService.getCartList(userId);

        this.cartService.cartData.subscribe((result) => {
          let item = result.filter((item: Product) => this.id?.toString() === item.pro_id?.toString());
          if (item.length) {
            this.cartData = item[0];
            this.removeCart = true;
          }
        })
      }
    });

  }

  handleQuantity(val: string) {
    if (this.productQuantity < 20 && val === 'plus') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && val === 'min') {
      this.productQuantity -= 1;
    }
  }

  addToCart() {
    if (this.allProduct) {
      this.allProduct.pro_qnt = this.productQuantity;
      if (!localStorage.getItem('user')) {
        this.productService.localAddToCart(this.allProduct);
        this.removeCart = true
      } else {
        let user = localStorage.getItem('user');
        let userId = user && JSON.parse(user).id
        let cartData: Cart = {
          ...this.allProduct,
          userId,
          cart_id: undefined,

        }

        this.cartService.addToCart(cartData).subscribe((result) => {
          if (result) {
            this.cartService.getCartList(userId);
            this.removeCart = true;
          }
        });

      }
      // alert("Add to cart Completed!!")
      this.router.navigate(['/card'])
      this.ngOnInit();
    }
  }

  removeToCart(pro_id: number) {
    if (!localStorage.getItem('user')) {
      this.productService.removeItemFromCart(pro_id);
      this.removeCart = false;
    } else {
      this.cartService.removeToCart(this.cartData.cart_id)
        .subscribe((result) => {
          let user = localStorage.getItem('user');
          let userId = user && JSON.parse(user).id;
          this.cartService.getCartList(userId)
        })
    }
    this.removeCart = false
    alert("Remove to cart Completed!!")
  }




}
