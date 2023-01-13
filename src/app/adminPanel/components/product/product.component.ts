import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['Category ID', 'Category Name', 'Category Description', 'Actions'];

  ngOnInit(): void {
  }

}
