import { Injectable } from '@angular/core';
import axios from 'axios';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class UserService {
  token : any;
  user : {
    name: string,
    username: string,
    email: string
  };
  constructor() {

  }

  validateUserData(user, callback){
    if(user.firstName && user.username && user.email && user.password){
      if(this.validateEmail(user.email)){
        callback("Valid")
      }else{
        callback("InvalidEmail")
      }
    }else{
      callback("IncompleteData");
    }
  }

  validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }

  saveBook(bookId, username, callback){
    let data = {
      username: username,
      bookId: bookId
    }
    let config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      }
    }
    axios.post('user/saveBook', data, config)
      .then(response => {
        callback(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  saveRequestedBook(username, bookTitle, callback){
    let data = {
      username: username,
      bookTitle: bookTitle
    }
    let config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      }
    }
    axios.post('user/saveRequestForABook', data, config)
      .then(response => {
        callback(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  getUserSavedBooks(username, callback){

    let config = {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    }
    axios.get('user/getUserSavedBooks/'+ username, config)
      .then(response => {
        callback(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  getUserRequestedBooks(username, callback){

    let config = {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    }
    axios.get('user/getUserRequestedBooks/'+ username, config)
      .then(response => {
        callback(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  getBorrowedBooks(username, callback){

    let config = {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    }

    axios.get('user/getBorrowedBooks/'+ username, config)
      .then(response => {
        callback(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  getUserOffers(username, callback){

    let config = {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    }
    axios.get('user/getUserOffers/'+ username, config)
      .then(response => {
        callback(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  updateRequestStatus(offer, callback){

    let config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      }
    }

    axios.post('user/updateRequestStatus', offer, config)
      .then(response => {
        callback(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  deleteRequest(requestId, callback){
    let config = {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    }
    axios.get('user/deleteRequest/' + requestId, config)
      .then(response => {
        callback(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  createAccount(user, callback){
    axios.post('user/createAccount', user)
      .then(response => {
          callback(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  authenticateUser(user, callback){
    axios.post('user/authenticate', user)
      .then(response => {
        this.setUserdata(response.data.token, response.data.user);
        callback(response);
      })
      .catch(err => {
        console.log(err);
      })
  }

  setUserdata(token, user){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserData(){
    if(this.loggedIn()){
      return JSON.parse(localStorage.getItem('user'));
    }else{
      return {name: "", username: "", email: ""};
    }
  }

  loggedIn() {
    return tokenNotExpired('token');
  }


  logOut(){
    this.token = null;
    this.user = null;
    localStorage.clear();
  }

}
