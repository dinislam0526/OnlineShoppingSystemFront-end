import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../models/login.model';
import { SignUp } from '../../models/SignUp.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

invalidUserAuth= new EventEmitter<boolean>(false)
  constructor(private http: HttpClient, private router:Router) { }

  userSignUp(user:SignUp){
   this.http.post("http://localhost:8080/signUp/post",user,{observe:'response'})
   .subscribe((result)=>{
    if(result){
      localStorage.setItem('user',JSON.stringify(result.body));
      this.router.navigate(['/']);
    }
    
   })
    
  }
  
  userLogin(data:Login){
    this.http.get<SignUp[]>(`http://localhost:8080/signUp/getUser?username=${data.username}&password=${data.password}`,
    {observe:'response'}
    ).subscribe((result)=>{

      if(result && result.body?.length){
        localStorage.setItem('user',JSON.stringify(result.body[0]));
        this.router.navigate(['/']);
        this.invalidUserAuth.emit(false)
      }else{
        this.invalidUserAuth.emit(true)
      }
    })
  }

  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/']);
    }
  }
}
