
const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({

  title: {
    type: 'string',
    required: true
  },

  author: {
    type: 'string'
  },

  coverUrl: {
    type: 'string',
    required: true
  },

  owner: {
    type: 'string',
    required: true
  },

  description: {
    type: 'string'
  }

});

let Book = module.exports = mongoose.model('Book', BookSchema);

Book.addNewBook = function(book, callback) {
  Book.create(book, callback);
};

Book.deleteBook = function (book, callback) {
  Book.remove({title: book.title, owner: book.owner}, callback);
};

Book.getBookByTitle = function (bookTitle, callback) {
  Book.findOne({title: bookTitle}, callback);
};

Book.getBooksByIds = function (bookIdsArr, callback) {
  Book.find({_id: {$in: bookIdsArr}}, callback);
};

Book.getBooksByTitlesWithOrder = function (bookTitles, callback) {

  let ask = {}
  ask.map = function () {
    var order = inputs.indexOf(this.title);
    if(order > -1){
      emit( order, { doc: this } );
    }
  };

  ask.out = {"inline": 1};
  ask.query = { "title": {"$in": bookTitles}};
  ask.scope = {"inputs": bookTitles};
  ask.finalize = function (key, value) {
    return value.doc;
  }
  Book.mapReduce(ask, callback);
};

Book.getAllBooks = function(callback) {
  Book.find(callback);
};

Book.getBooksByUser = function(username, callback) {
  Book.find({owner: username}, callback);
};
