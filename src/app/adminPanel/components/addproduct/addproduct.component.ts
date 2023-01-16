import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  displayedColumns: string[] = ['Product ID', 'Category Name', 'Product Name', 'Product Description', 'Product ImageName', 'Manufacturer Name', 'Supplier Name', 'Reorder Quantity', 'Supply Quantity', 'Actions'];

  constructor(

  ) { }

  ngOnInit(): void {

  }



}



