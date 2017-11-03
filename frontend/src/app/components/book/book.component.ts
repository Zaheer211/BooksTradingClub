import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookTitle: string;
  book: any;
  username: string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private booksService: BookService
  ) {

    this.username = this.userService.getUserData().username;

    this.route.params.subscribe(params => {
      this.bookTitle = params['title'];
      this.booksService.getBookByTitle(this.bookTitle, response => {
        // console.log(response);
        this.book = response.data.res;
      })
    })
  }

  ngOnInit() {

  }

  getABook(){

  }

}
