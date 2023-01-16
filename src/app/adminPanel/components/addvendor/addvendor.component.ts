import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.css']
})
export class AddvendorComponent implements OnInit{

  displayedColumns: string[] = ['Category ID', 'Category Name', 'Category Description', 'Actions'];
   msg="";
  ngOnInit(): void {
   
  }
  
}
