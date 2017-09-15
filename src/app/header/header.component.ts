import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  isAuthenticated =  false;
 
  constructor(private authService:AuthService) { 

  }
  logo = "logo.png";
  

  isAuth(){
      return this.isAuthenticated;
    }

    onLogOut(){ 
      this.authService.logOut();
    }

}
