import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Stock } from '../../models/stock.model';
import { StockService } from '../../services/stockService/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {

  
  displayedColumns: string[] = ['Stock ID', 'Product Name', 'Product PU Price','Product qty','Total Price'];
 
   dataSource!: MatTableDataSource<Object>;
   @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
   
 
   constructor(
     public stockService: StockService
   ) { }
 
   ngOnInit(): void {
     this.getAllStock();
     this.stockService.refreshNeed.subscribe(() => {
       this.getAllStock();
     });
      
   }
 
   
   
   getAllStock(){
     this.stockService.getAllStock().subscribe(
       (data: Object[]) => {
         this.dataSource= new MatTableDataSource (data);
         this.dataSource.paginator = this.paginator;
       }
     );
   }

  

}
