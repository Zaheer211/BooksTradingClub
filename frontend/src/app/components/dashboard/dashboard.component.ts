import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { UserService } from '../../services/user.service';
import { toast } from 'angular2-materialize';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username: string;
  booksByUser: any;
  requestedBooksByUser: Array<object>;
  bookOffers: any;

  constructor(
    private userService: UserService,
    private bookService: BookService,
    private router: Router

  ) {
    this.username = this.userService.getUserData().username;
    this.getBooksByUser();
    this.getUserRequestedBooks();
    this.getUserOffers();
  }

  ngOnInit() {

  }



  addNewBookUI(){
    document.getElementById('addBook').style.display = "block";
    document.getElementById('addBook').classList.add('fadeIn');
    document.getElementById('addBook').classList.remove('fadeOut');
  }

  hideNewBookUI(){
    document.getElementById('addBook').classList.remove('fadeIn');
    document.getElementById('addBook').classList.add('fadeOut');
    setTimeout(function(){
      document.getElementById('addBook').style.display = "none";
    }, 500)
  }

  addBook(form: NgForm){

    this.bookService.validateBook(form.value, response =>{
      if(response === "URL Invalid!"){
        toast("Please provide valid URL for Book Cover Image!", 5000, 'red');
      }
      if(response === "Missing Data"){
        toast("Please provide book Title and cover image URL", 5000, 'red');
      }
      if(response === "Valid"){
        let book = {
          title: form.value.bookTitle,
          author: form.value.author,
          coverUrl: form.value.coverURL,
          description: form.value.description,
          owner: this.username
        }
        this.bookService.addBook(book, response => {
          if(response.data.msg === "Book Successfully added!"){
            toast(book.title + "successfully added", 5000, 'green');
            this.hideNewBookUI();
          }
        })
      }
    })
  }

  getBooksByUser(){
    this.bookService.getBooksByUser(this.username, response => {
      // console.log(response);
      this.booksByUser = response.data.books;
    })
  }

  getUserRequestedBooks(){
    this.userService.getUserRequestedBooks(this.username, response => {
      // console.log(response);
      // this.requestedBooksByUser = response.data.response;
      let res = [];
      for(let i = 0; i < response.data.docs.length; i++){
        let tempData = {
          title: response.data.docs[i].value.title,
          coverUrl: response.data.docs[i].value.coverUrl,
          requestTime: new Date(response.data.response[i].createdAt).toString(),
          requestStatus: response.data.response[i].requestStatus,
          requestId: response.data.response[i]._id
        }
        res.push(tempData);
        if(i >= response.data.docs.length - 1){
          this.requestedBooksByUser = res;
          // console.log(this.requestedBooksByUser);
        }
      }
    })
  }

  getUserOffers(){
    this.userService.getUserOffers(this.username, response => {
      // console.log(response);
      if(response.data.res === "No Offers!"){
      }else if(response.data.res.length === 0){
        this.bookOffers = undefined;
      }else{
        let res = [];
        for(let i = 0; i < response.data.res.length; i++){
          let tempCoverUrl = "";
          for(let j = 0; j < response.data.docs.length; j++){
            if(response.data.res[i].requestedBook === response.data.docs[j].value.title){
              tempCoverUrl = response.data.docs[j].value.coverUrl;
            }
            if(j >= response.data.docs.length - 1){

              let tempData = {
                offerBook: response.data.res[i].requestedBook,
                offerBookCoverUrl: tempCoverUrl,
                offerBy: response.data.res[i].requestBy,
                offerTime: new Date(response.data.res[i].createdAt).toString()
              }

              res.push(tempData);

              if(i >= response.data.res.length - 1){
                this.bookOffers = res;
              }

            }
          }
        }
      };


    })
  }

  acceptOffer(event){
    let offer = {
      Title: null,
      status: "Accepted",
      offerBy: null,
      username: this.username
    };

    let self = this;

    let text = event.srcElement.parentNode.innerText;
    let a = text.split(/\r?\n/);
    // console.log(a);
    for(let i = 0; i < a.length; i++){
      let temp = a[i].split(":");
      if(temp[0] === "Title"){
        offer.Title = temp[1].trim();
      }
      if(temp[0] === "Offered By"){
        offer.offerBy = temp[1].trim();
      }
      if(i >= a.length -1){
        // console.log(offer);
        this.userService.updateRequestStatus(offer, response => {
          // console.log(response);
          if(response.data.success){

            event.srcElement.parentNode.classList.add("removing");
            setTimeout(function(){
              event.srcElement.parentNode.parentNode.innerHTML = "";
              self.getUserOffers();
            }, 1000);
          }
        })
      };
    }
  }

  rejectOffer(event){

    let self = this;

    let offer = {
      Title: null,
      status: "Rejected",
      offerBy: null,
      username: this.username
    };

    let text = event.srcElement.parentNode.innerText;
    let a = text.split(/\r?\n/);

    for(let i = 0; i < a.length; i++){
      let temp = a[i].split(":");
      if(temp[0] === "Title"){
        offer.Title = temp[1].trim();
      }
      if(temp[0] === "Offered By"){
        offer.offerBy = temp[1].trim();
      }
      if(i >= a.length -1){
        this.userService.updateRequestStatus(offer, response => {
          // console.log(response);
          if(response.data.success){

            event.srcElement.parentNode.classList.add("removing");
            setTimeout(function(){
              event.srcElement.parentNode.parentNode.innerHTML = "";
              self.getUserOffers();
            }, 1000)
          }
        })
      };
    }
  }

  deleteBook(data){
    let book = {
      title: data.title,
      owner: data.owner
    }



    let sure = confirm("Are you sure to delete this book!")
    if(sure){
      this.bookService.deleteBook(book, response => {
        if(response.data.success){
          alert("You successfully deleted" + book.title);
          this.getBooksByUser();
        };
        if(response.data.res === "You can not delete this book"){
          alert("You have given this book to some other User");
        };
      })
    }
  }

  deleteRequest(book){
    let requestId = book.requestId;
    let sure = confirm("Are you sure to delete this request!");
    if(sure){
      this.userService.deleteRequest(requestId, response => {
        if(response.data.success){
          this.getUserRequestedBooks();
        }
      })
    }
  }

}
