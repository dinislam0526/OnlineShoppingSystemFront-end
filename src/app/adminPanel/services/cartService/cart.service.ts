import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, tap } from 'rxjs';
import { Cart } from '../../models/Cart.model';
import { Product } from '../../models/product.mode';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartData = new EventEmitter<Product[] | []>();
  constructor(private http: HttpClient, private router:Router) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

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

  // removeToCart(cartId:number){
  //   console.warn("hit to removeCart/"+cartId)
  //   return this.http.delete('http://localhost:8080/cart/delete/' + cartId);
  // }

  removeToCart(cartId:number): Observable<Cart> {
    console.warn("hit to removeCart/"+cartId)
    return this.http.delete<Cart>('http://localhost:8080/cart/delete/' + cartId, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    )
  }

  currentCart(){
    let userStore= localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this.http.get<Cart[]>('http://localhost:8080/cart/getCartList?userId=' + userData.id)
  }


}
