import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  displayedColumns: string[] = ['Category ID', 'Category Name', 'Category Description', 'Actions'];

  msg="";

  constructor(
   
  ) { }

  ngOnInit(): void {
  }

 

}
