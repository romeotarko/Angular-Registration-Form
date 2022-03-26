import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  message='';
  constructor(private service : RegistrationService, private router : Router) { }

  ngOnInit(): void {
  }

  
  loginUser(){
      this.service.loginUserFromRemote(this.user).subscribe(
        data => {
          console.log("Response recived")
          this.router.navigate(['/loginsuccess'])
        },
        error => {
          console.log("Exception")
          this.message="Bad credentials , please enter valide email and password"
        }  
      )
  }

  goToRegistration(){
    this.router.navigate(['/registration'])
  }

}
