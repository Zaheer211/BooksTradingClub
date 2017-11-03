const express = require('express');
const router = express.Router();
const passport = require('passport');
const bookController = require('../controllers/bookController');

router.post('/addBook', passport.authenticate('jwt', {session: false}), (req, res) => {
  bookController.addBook(req, res);
});

router.post('/deleteBook', passport.authenticate('jwt', {session: false}), (req, res) => {
  bookController.deleteBook(req, res);
});

router.get('/getBookByTitle/:title', passport.authenticate('jwt', {session: false}), (req, res) => {
  bookController.getBookByTitle(req, res);
});

router.get('/getAllBooks', passport.authenticate('jwt', {session: false}), (req, res) => {
  bookController.getAllBooks(req, res);
});

router.get('/getBooksByUser/:username', passport.authenticate('jwt', {session: false}), (req, res) => {
  bookController.getBooksByUser(req, res);
});

module.exports = router;
