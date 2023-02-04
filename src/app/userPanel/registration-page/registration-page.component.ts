import { Component } from '@angular/core';
import { SignUp } from 'src/app/adminPanel/models/SignUp.model';
import { SingUpService } from 'src/app/adminPanel/services/signUpService/sing-up.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  
  constructor(public signUpService:SingUpService){}
  
  ngOnInit(): void {
   
  }
  // UserCreate(data:SignUp){
  //   this.signUpService.create(data).subscribe();
  //   alert("Sign Up completed!!")
  // }

  UserCreate(data:SignUp){
    this.signUpService.userSignUp(data);
    alert("Sign Up completed!!")
  }
}
