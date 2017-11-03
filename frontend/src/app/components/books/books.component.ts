import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { BookService } from '../../services/book.service';
import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  username: string;
  allBooks: any;
  constructor(
    private userService: UserService,
    private bookService: BookService
  ) {
    this.username = userService.getUserData().username;
    this.getAllBooks();
  }

  ngOnInit() {

  }

  getAllBooks(){
    this.bookService.getAllBooks(response => {
      this.allBooks = response.data.books;
      // console.log(this.allBooks);
    })
  }

  saveBook(event){
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let id = idAttr.nodeValue;
    this.userService.saveBook(id, this.username, (response) =>{
      // console.log(response);
      if(response.data.success){
        toast("Saved!", 3000, 'green' );
      }
    })
  }

  saveRequestedBook(event){
    let target = event.target || event.srcElement || event.currentTarget;
    let idAttr = target.attributes.id;
    let bookTitle = idAttr.nodeValue;
    this.userService.saveRequestedBook(this.username, bookTitle, (response) => {
      // console.log(response);
      if(!response.data.success && response.data.err === "Owner can not make request"){
        toast("Hello "+ this.username.toUpperCase() + " you are owner of this book!", 5000, 'blue')
      }else{
        if(response.data.success){
          toast("Your request will be reviewed by book owner!", 5000, 'blue')
        }else if(response.data.err === "You have already requested"){
          toast("You have already requested for this book!", 5000, 'blue');
        }
      }
    })
  }

}
