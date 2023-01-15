import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-createpurchase',
  templateUrl: './createpurchase.component.html',
  styleUrls: ['./createpurchase.component.css']
})
export class CreatepurchaseComponent implements OnInit {
  displayedColumns: string[] = ['Detail ID', 'Purchase ID', 'Product Name','Qauntity', 'Unit Price','SubTotal', 'Date', 'Actions'];
  constructor(
   
  ) { }

  ngOnInit(): void {
  }

 
  }

  


