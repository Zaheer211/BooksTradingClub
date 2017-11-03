const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const path = require('path');

const app = express();

// Passport Middleware //

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport.js')(passport);

let port = process.env.PORT || 8080;

// const port = 3000;
let user = require('./routes/user');
let book = require('./routes/book');

// Database Connection //

mongoose.connect('mongodb://zaheeruddin:zaheeruddin@ds149373.mlab.com:49373/books_club_db');

// dbUrl = 'mongodb://localhost:27017/books_club_db';
// mongoose.connect(dbUrl);
mongoose.connection.on('connected', () => {
  console.log("Successfully connected to DB");
});
mongoose.connection.on('error', (error) => {
  console.log({err: error});
});

// Static Path //

app.use(express.static(path.join(__dirname, 'public')));

// BodyParser Middleware //

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Cros Origin Requests //

app.use(cors());

// Routes //

app.use('/user', user);
app.use('/book', book);

app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Server Start //

app.listen(port, () => {
  console.log("Server started at port" + port);
});
