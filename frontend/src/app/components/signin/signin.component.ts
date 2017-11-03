import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  username : string;

  constructor(
    private userService: UserService,
    private router: Router
  ) {

  }

  ngOnInit() {

  }

  authUser(form: NgForm){
    this.userService.authenticateUser(form.value, (res)=>{
      if(res.data.msg === "username is inncorrect"){
        toast("username is inncorrect", 5000, 'red');
      }else if(res.data.msg === "password is incorrect"){
        toast("password is incorrect", 5000, 'red');
      }else if(res.data.success){
        this.router.navigate(['/dashboard/'+ form.value.username])
      }
    })
  }

}
