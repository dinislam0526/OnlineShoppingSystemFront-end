import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/Category.model';
import { Product } from '../../models/product.mode';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 currentProduct:Product = new Product();
 dataUrl = 'http://localhost:8080/product';

  constructor(private http:HttpClient) {  }

  getAllCategoryName(): Observable<Category[]> {
    return this.http.get<Category[]>(this.dataUrl+'/catnamelist');
  }

}
