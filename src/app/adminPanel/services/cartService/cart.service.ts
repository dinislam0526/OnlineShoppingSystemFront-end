import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../../models/Cart.model';
import { Product } from '../../models/product.mode';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartData = new EventEmitter<Product[] | []>();
  constructor(private http: HttpClient, private router:Router) { }

  addToCart(cartData: Cart) {
    return this.http.post('http://localhost:8080/cart/post', cartData);
  }

  getCartList(userId: number) {
    return this.http
      .get<Product[]>('http://localhost:8080/cart/getCartList?userId=' + userId, {
        observe: 'response',
      })
      .subscribe((result) => {
        if (result && result.body) {
          this.cartData.emit(result.body);
        }
      });
  }

}
