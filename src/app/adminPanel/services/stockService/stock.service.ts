import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Stock } from '../../models/stock.model';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StockService {
  dataUrl = 'http://localhost:8080/stock';

  panelOpenState = false;

  currentStock: Stock = new Stock();
  
  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllStock(): Observable<Object[]> {
    return this.http.get<Object[]>(this.dataUrl+'/getAll', headerOption);
  }

  
}
