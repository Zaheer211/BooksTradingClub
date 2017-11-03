import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-saved-books',
  templateUrl: './saved-books.component.html',
  styleUrls: ['./saved-books.component.css']
})
export class SavedBooksComponent implements OnInit {
  username : string;
  savedBooks : any;
  constructor(
    private userService: UserService
  ) {
    this.username = userService.getUserData().username;
    this.getUserSavedBooks();
  }

  ngOnInit() {

  }

  getUserSavedBooks(){
    this.userService.getUserSavedBooks(this.username, (response) => {
      this.savedBooks = response.data.savedBooks;
    })
  }

}
