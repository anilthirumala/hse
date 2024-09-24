import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-regiter-company',
  templateUrl: './regiter-company.component.html',
  styleUrl: './regiter-company.component.css'
})
export class RegiterCompanyComponent {
 theme = localStorage.getItem('theme')
 u:User = new User();
 constructor(protected uservice:UserService){
  if(this.theme=='black')
    this.theme = 'blackcontainer';
    else
    this.theme = 'bluecontainer ';
 }
 isEnabled=true;
 registerHandler(){
  this.uservice.registerUser(this.u)
 }
}
