
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

  name: {
    type: 'string',
    required: true
  },

  username: {
    type: 'string',
    unique: true,
    required: true
  },

  email: {
    type: 'string',
    required: true
  },

  password: {
    type: 'string',
    required: true
  },

  savedBooks: {
    type: []
  },

  borrowedBooks: {
    type: []
  }

});

const User = module.exports = mongoose.model('User', UserSchema);

User.addNewUser = function(user, callback){
  User.create(user, callback);
};

User.getUser = function (query, callback) {
  User.findOne(query, callback);
};

User.deleteUser = function(userId, callback) {
  User.delete({_id: userId}, callback);
};

User.updateUserData = function(dataToBeUpdated, userId, callback) {
  User.findOne({_id:userId}, (err, user) => {
    if(err){
      callback(err);
    }else{

    }
  });
};

User.getUserSavedBooks = function(name, callback) {
  User.findOne({username: name}, {_id: 0, savedBooks: 1}, callback);
};

User.saveBook = function(username, bookId, callback) {
  User.findOne({username: username}, (err, user) => {
    if(err){
      callback(err);
    }else{
      user.savedBooks.push(bookId);
      savedBooks = user.savedBooks;
      User.update({username: username}, {$set: {"savedBooks": savedBooks}}, (err, data) => {
        if(err){
          callback(err);
        }else{
          callback(null, data);
        }
      })
    }
  })
};


// User.saveRequestedBook = function(username, bookId, callback) {
//   User.findOne({username: username}, (err, user) => {
//     if(err){
//       callback(err);
//     }else{
//       user.requestedBooks.push(bookId);
//       let requestedBooks = user.requestedBooks;
//       User.update({username: username}, {$set: {"requestedBooks": requestedBooks}}, (err, data) => {
//         if(err){
//           callback(err);
//         }else{
//           callback(null, data);
//         }
//       })
//     }
//   })
// };

// User.saveBookOffer = function(owner, offerdBy, book, callback) {
//
//     User.findOne({username: owner}, (err, user) => {
//       if(err){
//         callback(err);
//       }else{
//         let offer = {
//           offerdBy: offerdBy,
//           bookOffered: book
//         }
//         user.offers.push(offer);
//         let offers = user.offers;
//         User.update({username: owner}, {$set: {"offers": offers}}, (err, data) => {
//           if(err){
//             callback(err);
//           }else{
//             callback(null, data);
//           }
//         })
//       }
//     })
//
// };

// User.getUserRequestedBooks = function(name, callback) {
//   User.findOne({username: name}, {_id: 0, requestedBooks: 1}, callback);
// };

// User.getUserOffers = function (username, callback) {
//   User.findOne({username: username}, {_id:0, offers: 1}, callback);
// };
