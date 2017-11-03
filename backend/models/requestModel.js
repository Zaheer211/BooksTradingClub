
const mongoose = require('mongoose');

const RequestSchema = mongoose.Schema({

  requestBy : {
    type: 'string',
    required: true
  },

  requestedTo : {
    type: 'string',
    required: true
  },

  requestedBook : {
    type: 'string',
    required: true
  },

  requestStatus: {
    type: 'string',
    required: true
  }

}, {timestamps: true});

let Request = module.exports = mongoose.model('Request', RequestSchema);

Request.addNewRequest = function (request, callback) {
  Request.create(request, callback);
};

Request.deleteRequest = function (requestId, callback) {
  Request.remove({_id: requestId}, callback);
};

Request.getAllRequestsByAUser = function (username, callback) {
  Request.find({requestBy: username}, callback);
};

Request.getAllOffersToAUser = function (username, callback) {
  Request.find({requestedTo: username, requestStatus: "Submitted"}, callback);
};

Request.updateRequestStatus = function (bookTitle, requestBy, requestedTo, status, callback) {
  Request.findOne({requestBy: requestBy, requestedTo: requestedTo, requestedBook: bookTitle}, (err, request) => {
    if(err){
      callback(err);
    }else{
      Request.updateOne({_id: request._id}, {$set: {requestStatus: status}}, (err, data) => {
        if(err){
          callback(err);
        }else{
          callback(null, data);
        }
      });
    }
  });
};

Request.getBooksProvidedByOwner = function (book, callback) {
  Request.find({$and: [{requestedTo: book.owner}, {requestStatus: "Accepted"}]}, callback);
};

Request.getBorrowedBooks = function (borrower, callback) {
  Request.find({$and: [{requestBy: borrower},{requestStatus: "Accepted"}]}, callback)
};
