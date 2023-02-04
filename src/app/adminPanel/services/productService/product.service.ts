import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
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
  cartData1 = new EventEmitter<Product[] | []>();

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
    return this.http.get<Product[]>(this.dataUrl+'/getAll', headerOption);
  }

  getCategoryWiseProduct(catname:string): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl+'/getCategoryWiseProduct?catName='+catname, headerOption);
  }

  getById(pid: number): Observable<Product> {
    return this.http.get<Product>(this.dataUrl + '/getById/' + pid, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  getAllProductAndCategory():Observable<Object[]>{
    return this.http.get<Object[]>(this.dataUrl, headerOption);
  }

  getAllCategoryName(): Observable<Category[]> {
    return this.http.get<Category[]>(this.dataUrl2+'/catnamelist', headerOption);
  }

  deleteProduct(pid: number): Observable<Product> {
    return this.http.delete<Product>(this.dataUrl + '/delete/' + pid, headerOption).pipe(
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
    return this.http.put<Product>(this.dataUrl + '/update', product, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  localAddToCart(data:Product){
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if(!localCart){
      localStorage.setItem('localCart',JSON.stringify([data]));
    }else{
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart',JSON.stringify(cartData));
    }
    this.cartData1.emit(cartData);
  }
  
  removeItemFromCart(productId:Number){
    let cartData=localStorage.getItem('localCart');
    if(cartData){
      let items:Product[]=JSON.parse(cartData);
      items = items.filter((item:Product)=> productId!==item.pro_id);
      localStorage.setItem('localCart',JSON.stringify(items));
      this.cartData1.emit(items);
    }
  }

}
