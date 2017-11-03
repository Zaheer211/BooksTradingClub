const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const bookModel = require('../models/bookModel');
const requestModel = require('../models/requestModel');

module.exports = {

  createUser : function(req, res) {

    let user = {
      name: req.body.firstName + req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: null
    }

    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if(err){
        res.json({success: false, msg: "Error in generating hash!", err: err});
      }else{
        user.password = hash;
        userModel.addNewUser(user, (err, response) => {
          if(err){
            console.log(err);
            if(err.errmsg.indexOf('duplicate key') > -1){
              res.json({success: false, msg: "username already exists"});
            }else{
              res.json({success: false, msg: "Error while adding user Data", err: err.errmsg});
            }
          }else{
            res.json({success: true, msg: "User Successfully created!"});
          }
        });
      }
    })
  },

  authUser : function(req, res) {

    let username = req.body.username;
    let password = req.body.password;

    userModel.getUser({username: username}, (err, user) => {
      if(err){
        res.json({success: false, msg: "error getting user data", err: err});
      }else if(user){
        bcrypt.compare(password, user.password, (err, response) => {
          if(err){
            res.json({success: false, msg: "error comparing password", err: err})
          }else{
            if(response){
              res.json({
                success: true,
                token: "JWT " + jwt.sign(user, "my_secret", {expiresIn: 476568}),
                user : {
                  name: user.name,
                  username: user.username,
                  email: user.email
                }
              })
            }else{
              res.json({success: false, msg: "password is incorrect"});
            }
          }
        });
      }else{
        res.json({success: false, msg: "username is inncorrect"});
      }
    });

  },

  updateUserData : function (req, res) {

  },

  deleteUser : function (req, res) {
    userModel.deleteUser(req.params.id, (err, doc) => {
      if(err){
        res.json({success: false, msg: "Error deleting user", err: err});
      }else{
        res.json({success: true, msg: "User Deleted"});
      }
    })
  },

  getBorrowedBooks : function (req, res) {
    let borrower = req.params.username;
    requestModel.getBorrowedBooks(borrower, (err, response) => {
      if(err){
        res.json({success: false, err: err});
        // console.log("Error" + err);
      }else{
        // console.log("Ok" + response.length);
        if(response.length === 0){
          res.json({success: false, res: "No books borrowed"});
        }else{
          let bookTitles = [];
          for(let i = 0; i < response.length; i++){
            bookTitles.push(response[i].requestedBook);
            if(i >= response.length - 1){
              bookModel.getBooksByTitlesWithOrder(bookTitles, (err, docs, stats) => {
                if(err){
                  res.json({success: false, err: err});
                }else{
                  res.json({success: true, res: response, docs: docs});
                }
              })
            }
          }
        }

      }
    })
  },

  getUserSavedBooks : function (req, res) {
    let user = req.params.username;
    userModel.getUserSavedBooks(user, (err, response) => {
      if(err){
        res.json({success: false, err: err});
      }else{
        bookModel.getBooksByIds(response.savedBooks, (err, books) => {
          // console.log(books);
          if(err){
            res.json({success: false, err: err});
          }else{
            res.json({success: true, savedBooks: books});
          }
        })
      }
    })
  },

  saveBook : function (req, res) {
    let bookId = req.body.bookId;
    let username = req.body.username;
    userModel.saveBook(username, bookId, (err, response) =>{
      if(err){
        res.json({success: false, err: err});
      }else{
        res.json({success: true, response: response});
      }
    });
  },

  saveRequestForABook : function (req, res) {

    let bookTitle = req.body.bookTitle;
    let requestByUser = req.body.username;
    let requestedToUser = null;

    bookModel.getBookByTitle(bookTitle, (err, book) => {
      if(err){
        res.json({success: false, err: err});
      }else if(requestByUser === book.owner){
        res.json({success: false, err: "Owner can not make request"});
      }else {

        requestedToUser = book.owner;

        requestModel.getAllRequestsByAUser(requestByUser, (err, doc) => {
          if(err){
            res.json({success: false, err: err});
          }else if(doc.length === 0){

            request = {
              requestBy: requestByUser,
              requestedTo: requestedToUser,
              requestedBook: bookTitle,
              requestStatus: "Submitted"
            }

            requestModel.addNewRequest(request, (err, response) => {
              if(err){
                res.json({success: false, err: err});
              }else {
                res.json({success: true, doc: response});
              }
            })

          }else{
            let doesReqExists = [];
            for(let i = 0; i < doc.length; i++){
              if(doc[i].requestedBook === bookTitle && doc[i].requestedTo === requestedToUser){
                doesReqExists.push(true);
              }else {
                doesReqExists.push(false);
              }
              if(i >= doc.length-1){
                if(doesReqExists.indexOf(true) > -1){
                  res.json({success: false, err: "You have already requested"});
                }else{

                  request = {
                    requestBy: requestByUser,
                    requestedTo: requestedToUser,
                    requestedBook: bookTitle,
                    requestStatus: "Submitted"
                  }

                  requestModel.addNewRequest(request, (err, response) => {
                    if(err){
                      res.json({success: false, err: err});
                    }else {
                      res.json({success: true, doc: response});
                    }
                  })

                }
              }
            }
          }
        })
      }
    })
  },

  deleteRequest : function (req, res) {
    let requestId = req.params.requestId;
    requestModel.deleteRequest(requestId, (err, response) => {
      if(err){
        res.json({success: false, err: err});
      }else{
        res.json({success: true, res: response});
      }
    })
  },

  updateRequestStatus: function(req, res) {

    let requestedBook = req.body.Title;
    let requestBy = req.body.offerBy;
    let requestedTo = req.body.username;
    let status = req.body.status;

    requestModel.updateRequestStatus(requestedBook, requestBy, requestedTo, status, (err, response) => {
      if(err){
        res.json({success: false, err: err});
      }else {
        res.json({success: true, res: response});
      }
    })
  },

  getUserRequestedBooks : function (req, res) {

    let username = req.params.username;
    // console.log(username);
    requestModel.getAllRequestsByAUser(username, (err, response) => {
      if(err){
        res.json({success: false, err: err});
      }else{
        // console.log(response);
        // res.json({success: true, requests: response});
        let bookTitles = [];
        for(let i = 0; i < response.length; i++){
          bookTitles.push(response[i].requestedBook);
          if(i >= response.length - 1){
            // console.log(bookTitles);
            bookModel.getBooksByTitlesWithOrder(bookTitles, (err, docs,stats) => {
              if(err){
                // console.log(err);
                // console.log(stats);
                res.json({success: false, response: response, err: err});
              }else{
                // console.log(docs);
                // console.log(stats);
                res.json({success: true, response: response, docs: docs});
              }
            })
          }
        }

      }
    })
  },

  getAllOffersToAUser : function (req, res) {

    let username = req.params.username;

    requestModel.getAllOffersToAUser(username, (err, response) => {
      if(err){
        res.json({success: false, err: err});
        // console.log("Error" + err);
      }else{
        // console.log("Ok" + response.length);
        if(response.length === 0){
          res.json({success: false, res: "No Offers!"});
        }else{
          let bookTitles = [];
          for(let i = 0; i < response.length; i++){
            bookTitles.push(response[i].requestedBook);
            if(i >= response.length - 1){
              bookModel.getBooksByTitlesWithOrder(bookTitles, (err, docs, stats) => {
                if(err){
                  res.json({success: false, err: err});
                }else{
                  res.json({success: true, res: response, docs: docs});
                }
              })
            }
          }
        }

      }
    })
  }

}
