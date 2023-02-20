import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Coupon } from '../../models/coupon.model';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  dataUrl = 'http://localhost:8080/coupon';

  panelOpenState = false;

  currentCoupon: Coupon = new Coupon();
  
  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllCoupon(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(this.dataUrl+'/getAll', headerOption);
  }

  deleteCoupon(coupid: number): Observable<Coupon> {
    return this.http.delete<Coupon>(this.dataUrl + '/delete/' + coupid, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createCoupon(cat: Coupon): Observable<Coupon> {
    return this.http.post<Coupon>(this.dataUrl+ '/post', cat, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updateCoupon(cat: Coupon): Observable<Coupon> {
    return this.http.put<Coupon>(this.dataUrl + '/update', cat, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  coupCodeApply(data:string):Observable<Coupon>{
    return this.http.get<Coupon>('http://localhost:8080/coupon/getByCouponCode?couponCode='+ data, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

}
