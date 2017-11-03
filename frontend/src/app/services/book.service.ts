import { Injectable } from '@angular/core';
import validUrl from 'is-url';
import axios from 'axios';

@Injectable()
export class BookService {

  constructor() { }

  validateBook(book, callback){
    if(book.bookTitle && book.coverURL){
      if(this.isURLValid(book.coverURL)){
        callback("Valid");
      }else{
        callback("URL Invalid!");
      }
    }else{
      callback("Missing Data");
    }
  }

  isURLValid(str) {
    if(validUrl(str)){
      return true;
    }else{
      return false;
    }
  }

  addBook(book, callback){
    let config = {
      headers: {
        'Content-Type': "application/json",
        'Authorization': this.getAuthToken()
      }
    }
    axios.post('book/addBook', book, config)
      .then(response => {
        callback(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  deleteBook(book, callback){
    let config = {
      headers: {
        'Content-Type': "application/json",
        'Authorization': this.getAuthToken()
      }
    }
    axios.post('book/deleteBook', book, config)
      .then(response => {
        callback(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  getBookByTitle(title, callback){
    let config = {
      headers: {
        'Authorization': this.getAuthToken()
      }
    }
    axios.get('book/getBookByTitle/'+ title, config)
      .then(response => {
        callback(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  getAllBooks(callback){
    let config = {
      headers: {
        'Content-Type': "application/json",
        'Authorization': this.getAuthToken()
      }
    }

    axios.get('book/getAllBooks', config)
      .then(response => {
        callback(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  getBooksByUser(user, callback){
    let config = {
      headers: {
        'Authorization': this.getAuthToken()
      }
    }

    axios.get('book/getBooksByUser/' + user, config)
      .then(response => {
        callback(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  getAuthToken(){
    return localStorage.getItem('token');
  }

}
