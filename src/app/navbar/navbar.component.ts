import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    ls = localStorage;
    
   themeHandler(t:string){
    localStorage.setItem('theme',t)
   }
   logoutHandler(){
    localStorage.clear();

   }
}
