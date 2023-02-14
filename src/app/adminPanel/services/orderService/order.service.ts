import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor( private http:HttpClient) { }

  orderNow(data:Order){
    return this.http.post('http://localhost:8080/order/post',data);
  }

  orderList() {
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this.http.get<Order[]>('http://localhost:8080/order/getOrderList?userId=' + userData.id )
 
  }


}
