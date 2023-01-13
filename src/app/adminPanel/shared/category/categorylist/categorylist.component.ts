import {Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'src/app/adminPanel/models/category/Category.model';
import { CategoryserviceService } from 'src/app/adminPanel/services/categoryServices/categoryservice.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {

  displayedColumns: string[] = ['Category ID', 'Category Name', 'Category Description', 'Actions'];
  dataSource!: MatTableDataSource<Category>;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(
    private categoryService: CategoryserviceService
  ) {
  }

  ngOnInit() {
    this.getAllCategories();
    this.categoryService.refreshNeed.subscribe(() => {
      this.getAllCategories();
    });
    
  }

  togglePanel() {
    this.categoryService.panelOpenState = !this.categoryService.panelOpenState
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllCategories(){
    this.categoryService.getAllCategory().subscribe(
      (data: Category[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  deleteCategory(catid: number) {
    this.categoryService.deleteCategory(catid).subscribe();
  }

  editCategory(cat: Category) {
    this.categoryService.currentCategory = Object.assign({}, cat);
    this.togglePanel();
  }

}