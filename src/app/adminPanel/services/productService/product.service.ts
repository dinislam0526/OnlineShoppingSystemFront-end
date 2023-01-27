import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Category } from '../../models/Category.model';
import { Product } from '../../models/product.mode';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

const headerOption2 = {
  headers: new HttpHeaders({
    'content-type': 'text'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  dataUrl = 'http://localhost:8080/product';

  dataUrl2 = 'http://localhost:8080/category';

  dataUrl3 = 'http://localhost:8080/api/v1/productwithcatname';


  currentProduct: Product = new Product();
  panelOpenState = false;

  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl, headerOption);
  }

  getAllProductAndCategory():Observable<Object[]>{
    return this.http.get<Object[]>(this.dataUrl, headerOption);
  }

  getAllCategoryName(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:8080/category/catnamelist', headerOption);
  }

  deleteProduct(pid: number): Observable<Product> {
    return this.http.delete<Product>(this.dataUrl + '/' + pid, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.dataUrl+'/post', product, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.dataUrl + '/' + product.pro_id, product, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

}
