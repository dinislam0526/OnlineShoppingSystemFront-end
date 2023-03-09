import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Purchase } from '../../models/Purchase.model';

const headerOption = {
  headers :new HttpHeaders({
    'content-type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  dataUrl = 'http://localhost:8080/purchase';
  dataUrl2 = 'http://localhost:8080/joinTable';

  panelOpenState = false;

  currentPurchase: Purchase = new Purchase();
  
  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllPurchase(): Observable<Object[]> {
    return this.http.get<Object[]>(this.dataUrl2+'/getAll', headerOption);
  }

  deletePurchase(catid: number): Observable<Purchase> {
    return this.http.delete<Purchase>(this.dataUrl + '/delete/' + catid, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createPurchase(cat: Purchase): Observable<Purchase> {
    return this.http.post<Purchase>(this.dataUrl+ '/post', cat, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updatePurchase(cat: Purchase): Observable<Purchase> {
    return this.http.put<Purchase>(this.dataUrl + '/update', cat, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }
}
