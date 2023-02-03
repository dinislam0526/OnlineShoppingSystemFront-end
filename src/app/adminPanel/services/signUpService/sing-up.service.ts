import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SignUp } from '../../models/SignUp.model';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SingUpService {
  dataUrl = 'http://localhost:8080/signUp';

  panelOpenState = false;

  currentSignUp: SignUp = new SignUp();
  
  constructor(
    private http: HttpClient,
    private router:Router
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  create(sign: SignUp): Observable<SignUp> {
    console.log(sign)
    return this.http.post<SignUp>(this.dataUrl+ '/post', sign, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
        this.router.navigate(['/']);
      })
    );
    
  }

  getAll(): Observable<SignUp[]> {
    return this.http.get<SignUp[]>(this.dataUrl+'/getAll', headerOption);
  }

  delete(catid: number): Observable<SignUp> {
    return this.http.delete<SignUp>(this.dataUrl + '/delete/' + catid, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  

  update(cat: SignUp): Observable<SignUp> {
    return this.http.put<SignUp>(this.dataUrl + '/update', cat, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

}
