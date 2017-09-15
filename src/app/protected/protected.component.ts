import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})

export class ProtectedComponent implements OnInit {

  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(public router: Router, public http: Http, public authHttp: AuthHttp, public authService: AuthService) {
    //this.jwt = localStorage.getItem('id_token');
  //  this.decodedJwt = this.jwt && this.jwtHelper.decodeToken(this.jwt);
  }

 
  ngOnInit() {
  }

  logout(){
        this.authService.logOut();
        this.router.navigate(['login']);
  }
  
}
