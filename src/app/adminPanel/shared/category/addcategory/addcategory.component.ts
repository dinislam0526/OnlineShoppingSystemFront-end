import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/adminPanel/models/category/Category.model';
import { CategoryserviceService } from 'src/app/adminPanel/services/categoryServices/categoryservice.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  msg="";

  constructor(
    public categoryService: CategoryserviceService
  ) { }

  ngOnInit(): void {
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

  clear() {
    this.categoryService.currentCategory = {
      catid: 0,
      catname: '',
      catdesc: '',
    };
    this.msg="";
  }

}
