import { Component, OnInit } from '@angular/core';
import { Auth } from './../models/auth.model';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AuthService]
})
export class AuthComponent implements OnInit {

  auth;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.auth = this.authService.getAuth();
  }

  submitForm(userName: string, password: string){
    if(userName !== "" && password !== ""){
      var newAuth: Auth = new Auth(userName, password);
      this.authService.addAuth(newAuth);
    }else{
      confirm("You must enter a valid username and password");
    }
  }

}
