import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Vendor } from '../../models/Vendor.model';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  dataUrl = 'http://localhost:8080/vendor';

  panelOpenState = false;

  currentVendor: Vendor = new Vendor();
  
  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllVendor(): Observable<Vendor[]> {
    return this.http.get<Vendor[]>(this.dataUrl+'/getAll', headerOption);
  }

  deleteVendor(catid: number): Observable<Vendor> {
    return this.http.delete<Vendor>(this.dataUrl + '/delete/' + catid, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createVendor(cat: Vendor): Observable<Vendor> {
    return this.http.post<Vendor>(this.dataUrl+ '/post', cat, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updateVendor(cat: Vendor): Observable<Vendor> {
    return this.http.put<Vendor>(this.dataUrl + '/update', cat, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

}
