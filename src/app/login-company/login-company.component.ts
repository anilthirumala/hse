import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-company',
  template: `
    <div class="login-container">
        <div class="form-group">    
        <input type="text" class="form-control" placeholder="Email"  [(ngModel)]="uname">
        </div>
        <div class="form-group">
        <input type="password" class="form-control" placeholder="Password" [(ngModel)]="pwd">
    </div>
    <div class="form-group">
        <button class="form-control btn btn-success" (click)="loginHandler()">Sign In</button>
         <button class="form-control btn btn-primary">Cancel</button> 
    </div>
    </div>
  `,
  styles: `
  .login-container{ width:50%;margin:auto;}
  `
})
export class LoginCompanyComponent {
uname:string=''
pwd:string=''
  constructor(private us:UserService,private router:Router){}
  loginHandler(){
     this.us.validateUser(this.uname,this.pwd);
     this.uname=''
     this.pwd=''
   this.router.navigate([''])
  }

}
