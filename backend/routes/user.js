
const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController');

router.post('/createAccount', (req, res) => {
  userController.createUser(req, res);
});

router.post('/authenticate', (req, res) => {
  userController.authUser(req, res);
});

router.get('/deleteUser/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  userController.deleteUser(req, res);
});

router.post('/updateUser', passport.authenticate('jwt', {session: false}), (req, res) => {
  userController.updateUserData(req, res);
});

router.post('/saveBook', passport.authenticate('jwt', {session: false}), (req, res) => {
  userController.saveBook(req, res);
});

router.get('/getUserSavedBooks/:username', passport.authenticate('jwt', {session: false}), (req, res) => {
  userController.getUserSavedBooks(req, res);
});

router.get('/getUserOffers/:username', passport.authenticate('jwt', {session: false}), (req, res) => {
  userController.getAllOffersToAUser(req, res);
});

router.get('/getUserRequestedBooks/:username', passport.authenticate('jwt', {session: false}), (req, res) => {
  userController.getUserRequestedBooks(req, res);
});

router.post('/saveRequestForABook', passport.authenticate('jwt', {session: false}), (req, res) => {
  userController.saveRequestForABook(req, res);
});

router.post('/updateRequestStatus', passport.authenticate('jwt', {session: false}), (req, res) => {
  userController.updateRequestStatus(req, res);
});

router.get('/deleteRequest/:requestId', passport.authenticate('jwt', {session: false}), (req, res) => {
  userController.deleteRequest(req, res);
});

router.get('/getBorrowedBooks/:username', passport.authenticate('jwt', {session: false}), (req, res) => {
  userController.getBorrowedBooks(req, res);
});

module.exports = router;
