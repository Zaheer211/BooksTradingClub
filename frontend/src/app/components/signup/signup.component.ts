import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) {

  }

  createUser(form : NgForm){
    this.userService.validateUserData(form.value, (validationRes) => {
      if(validationRes === "IncompleteData"){
        toast("Please fill in all fields except last name!", 5000, 'red');
      }
      if(validationRes === "InvalidEmail"){
        toast("Provide correct email address!", 5000, 'red');
      }
      if(validationRes === "Valid"){
        this.userService.createAccount(form.value, (response) => {
          // console.log(response);
          if(response.data.success){
            this.router.navigate(['/user/authenticate']);
            toast("You are successfully registered!", 5000, 'green');
          }
        });
      }
    });
  }

  ngOnInit() {

  }

}
