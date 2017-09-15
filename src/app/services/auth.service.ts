import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { User } from "./user.interface";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
declare var firebase: any;

@Injectable()
export class AuthService {
     public token: string;   
    constructor(private router: Router, private httpService:Http){
                // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('data'));
        this.token = currentUser && currentUser.token;

    }

    signUpUser(user: User){
            firebase.auth().createUserWithEmailAndPassword(user['userData'].email, user.password)
            .catch(function(error) {
                console.log(error);
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            });
    }

    logOut(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('id_token');
    }

    public login(email,password){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
         let body = JSON.stringify({ email: email,  password: password });
         let options = new RequestOptions({ headers: headers });
        return  this.httpService.post('http://localhost:81/learnl/public/api/User/Authenticate', body, options)
                 .subscribe(
         response => {     
            let token = response.json() && response.json().data.user.authToken;
            console.log(token);
           if(token){
               console.log("Ddd");
                 // set token property
                    this.token = token;
//            response.json().data.authToken
            localStorage.setItem('id_token',  JSON.stringify({ data: response.json().data, token: token })); 
//            console.log(response.json().data.user.authToken);
            this.router.navigate(['protected']);
            }

        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
    }
    signInUser(user: User){
       firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
                    console.log(error);
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                });
    }

    logOuts(){
        firebase.auth().signOut();
        this.router.navigate(['/login']);
    }
    isAuthenticated(){
        var user = firebase.auth().currentUser;
        if (user){
            return true;
        }else{
            return false;
        }
       
    }

    isLoggedIn(){
        if (localStorage.getItem('id_token')) {
                    // If they do, return true and allow the user to load the home component
                return true;
        }
    }
   

}