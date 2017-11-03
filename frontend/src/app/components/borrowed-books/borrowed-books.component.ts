import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-borrowed-books',
  templateUrl: './borrowed-books.component.html',
  styleUrls: ['./borrowed-books.component.css']
})
export class BorrowedBooksComponent implements OnInit {
  username: string;
  borrowedBooks: any;
  constructor(
    private userService: UserService
  ) {
    this.username = this.userService.getUserData().username;
    this.getBorrowedBooks();
  }

  ngOnInit() {

  }

  getBorrowedBooks(){
    this.userService.getBorrowedBooks(this.username, response => {
      // console.log(response);
      if(response.data.res === "No books borrowed"){
      }else if(response.data.res.length === 0){
        this.borrowedBooks = undefined;
      }else{
        let res = [];
        for(let i = 0; i < response.data.res.length; i++){
          let tempCoverUrl = "";
          let tempDescription = "";
          let tempAuthor = "";
          for(let j = 0; j < response.data.docs.length; j++){
            if(response.data.res[i].requestedBook === response.data.docs[j].value.title){
              tempCoverUrl = response.data.docs[j].value.coverUrl;
              tempDescription = response.data.docs[j].value.description;
              tempAuthor = response.data.docs[j].value.author;
            }
            if(j >= response.data.docs.length - 1){

              let tempData = {
                borrowedBook: response.data.res[i].requestedBook,
                borrowedBookCoverUrl: tempCoverUrl,
                borrowedBookDescription: tempDescription,
                borrowedBookAuthor: tempAuthor,
                borrowedFrom: response.data.res[i].requestedTo,
                borrowedOn: new Date(response.data.res[i].updatedAt).toString()
              }

              res.push(tempData);

              if(i >= response.data.res.length - 1){
                this.borrowedBooks = res;
              }

            }
          }
        }
      };
    })
  }

}
