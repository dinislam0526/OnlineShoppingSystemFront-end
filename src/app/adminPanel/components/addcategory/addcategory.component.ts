import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from '../../models/Category.model';
import { CategoryserviceService } from '../../services/categoryServices/categoryservice.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  displayedColumns: string[] = ['Category ID', 'Category Name', 'Category Description', 'Actions'];
  dataSource!: MatTableDataSource<Category>;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  msg="";

  constructor(
    public categoryService: CategoryserviceService
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.categoryService.refreshNeed.subscribe(() => {
      this.getAllCategories();
    });
     
  }

  togglePanel() {
    this.categoryService.panelOpenState = !this.categoryService.panelOpenState
  }

  createOrUpdateCategory(currentCategory: Category) {

    if (currentCategory.catid != null) {
      this.updateCategory(currentCategory);
    } else {
      this.createCategory(currentCategory);
    }

    this.msg="Saved Successfully!!"
  }

  createCategory(cat: Category) {
    this.categoryService.createCategory(cat).subscribe();
  }

  updateCategory(cat: Category) {
    this.categoryService.updateCategory(cat).subscribe();
  }

  deleteCategory(catid: number) {
    this.categoryService.deleteCategory(catid).subscribe();
  }

  editCategory(cat: Category) {
    this.categoryService.currentCategory = Object.assign({}, cat);
    this.togglePanel();
  }
  
  getAllCategories(){
    this.categoryService.getAllCategory().subscribe(
      (data: Category[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  clear() {
    this.categoryService.currentCategory = {
      catid: null,
      catname: '',
      catdesc: ''
    };
    this.msg="";
  }

}
