import { Component } from '@angular/core';
import { FormGroup , FormControl , ReactiveFormsModule , Validators } from '@angular/forms';

import { UserService  } from '../services/user.service';

@Component({
  selector: 'form-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  myForm : FormGroup;
  genders = ['male','female'];
  constructor(private userService: UserService) { 
    this.myForm = new FormGroup({
        'userData' :new FormGroup({
            'username': new FormControl('Himanshi',Validators.required),
            'email' : new FormControl('', 
                      [Validators.required,
                       Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
        }),
        
        'password' :new FormControl('',Validators.required),
        'confirmPassword': new FormControl('',Validators.compose([
                            Validators.required,
                            this.isEqualPassword.bind(this)
        ])),
        'gender' : new FormControl('male')
    });
  }

  onSignUp(){ 
    //this.authService.signUpUser(this.myForm.value);
    //console.log(this.myForm);
  }

  isEqualPassword(control:FormControl) : {[s: string] : boolean}{
    if(!this.myForm){
      return {passwordNotMatch : true};
    }

    if(control.value != this.myForm.controls['password'].value ){
      return {passwordNotMatch : true};
    }
  }

  


}
