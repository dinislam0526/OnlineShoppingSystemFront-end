import { Component } from '@angular/core';
import { Order } from 'src/app/adminPanel/models/order.model';
import { OrderService } from 'src/app/adminPanel/services/orderService/order.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent {

  orderData:Order[] | undefined
  
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderService.orderList().subscribe((result)=>{
      this.orderData = result;
    })
    
    
  };




}
