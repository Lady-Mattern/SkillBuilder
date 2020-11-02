// define express and declare variables
const express = require('express');
const port = process.env.PORT || 3000;
const indexRouter = require('./routes/index');
const skillsRouter = require('./routes/skills');

// require the database
const skillsdb = require('./data/db');

// require the body parser morgan
// const morgan = require('morgan');

// require method override
const methodOverride = require('method-override');

// create the express app
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// mount the middleware
// static middleware for serving frontend files from the public folder
// app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// mount the routes
// define another call to app.use mounting a router for the homepage
app.use('/', indexRouter);
app.use('/skills', skillsRouter);

// listen
app.listen(port, () => {
    console.log(`I'm listening on ... ${port}`);
});