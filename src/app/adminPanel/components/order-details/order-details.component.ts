import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from '../../models/order.model';
import { OrderService } from '../../services/orderService/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {

  displayedColumns: string[] = ['Order ID', 'User Name','User Email', 'User Address', 'User Contact','Total Prices','Order Status','Action'];
  dataSource!: MatTableDataSource<Order>;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;



  constructor(
    public orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getOrderList();
     
  }
  approvedData(id: number){


  }

  getOrderList(){
    this.orderService.orderList().subscribe(
      (data: Order[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }


}
