import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username : any;
  home_image: any;

  constructor(
    private userService: UserService
  ) {

    this.home_image = "/assets/home_image.jpg"
    this.username = this.userService.getUserData().username;

  }

  logout(){
    this.userService.logOut();
  }

  ngOnInit() {
  }

}
