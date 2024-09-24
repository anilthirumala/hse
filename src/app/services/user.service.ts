import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private bhumika:HttpClient) {
   }
  registerUser(u:User){
    this.bhumika.post('http://localhost:3000/users',u).subscribe(()=>{
      alert('user added successfully')
    });
  }
  validateUser(uname:string,pwd:string){
    let f:User|undefined;
      this.bhumika.get<Array<User>>('http://localhost:3000/users')
      .subscribe((users)=>{
       f =  users.find((u)=>{return u.email===uname && u.password===pwd});
        if(f)
        {
         // alert("user"+JSON.stringify(f))
         localStorage.setItem('status','loggedin')
         localStorage.setItem('user',uname)
        }
        else
        alert("error"+JSON.stringify(f))
  })
}
}
