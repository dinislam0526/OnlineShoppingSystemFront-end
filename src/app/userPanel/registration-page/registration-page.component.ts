import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/adminPanel/models/login.model';
import { SignUp } from 'src/app/adminPanel/models/SignUp.model';


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit{
   showLogin:boolean= true;
  constructor( ){}
  
  ngOnInit(): void {
   
  }
  // UserCreate(data:SignUp){
  //   this.signUpService.create(data).subscribe();
  //   alert("Sign Up completed!!")
  // }

  UserCreate(data:SignUp){
   
    alert("Sign Up completed!!")
  }

  login(data:Login){
    console.warn(data)
  }

  openSignUp(){
    this.showLogin = false;
  }
  
  openLogin(){
    this.showLogin = true;
  }

}
