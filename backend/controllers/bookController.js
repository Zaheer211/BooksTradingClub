
const bookModel = require('../models/bookModel');
const requestModel = require('../models/requestModel');

module.exports = {

  addBook : function(req, res) {

    let book = {
      title: req.body.title,
      author: req.body.author,
      coverUrl: req.body.coverUrl,
      owner: req.body.owner,
      description: req.body.description
    }

    bookModel.addNewBook(book, (err, response) => {
      if(err){
        res.json({success: false, err: err});
      }else{
        res.json({success: true, msg: "Book Successfully added!"});
      }
    })
  },

  deleteBook : function (req, res) {
    // console.log(req.body);
    title = req.body.title;
    owner = req.body.owner;

    book = {
      "title": title,
      "owner": owner
    }

    requestModel.getBooksProvidedByOwner(book, (err, response) => {
      if(err){
        res.json({success: false, err: err});
      }else if(response.length > 0){
        res.json({success: false, res: "You can not delete this book"});
      }else{
        bookModel.deleteBook(book, (err, response) => {
          if(err){
            res.json({success: false, err: err});
          }else{
            res.json({success: true, res: response});
          }
        })
      }
    })
  },

  getBookByTitle : function (req, res) {

    let title = req.params.title;
    bookModel.getBookByTitle(title, (err, response) => {
      if(err){
        res.json({success: false, err: err});
      }else{
        res.json({success: true, res: response});
      }
    })
  },

  getAllBooks : function(req, res) {
    bookModel.getAllBooks((err, response) => {
      if(err){
        res.json({success: false, err: err});
      }else{
        res.json({success: true, books: response});
      }
    })
  },

  getBooksByUser : function (req, res) {
    let username = req.params.username;
    bookModel.getBooksByUser(username, (err, response) => {
      if(err){
        res.json({success: false, err: err});
      }else{
        res.json({success: true, books: response});
      }
    })
  }

}
