import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Category } from '../../models/Category.model';


const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable()
export class CategoryserviceService {

  dataUrl = 'http://localhost:8080/api';

  panelOpenState = false;

  currentCategory: Category = new Category();
  
  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.dataUrl, headerOption);
  }

  deleteCategory(catid: number): Observable<Category> {
    return this.http.delete<Category>(this.dataUrl + '/' + catid, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createCategory(cat: Category): Observable<Category> {
    return this.http.post<Category>(this.dataUrl+ '/post', cat, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updateCategory(cat: Category): Observable<Category> {
    return this.http.put<Category>(this.dataUrl + '/' + cat.catid, cat, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

}
