var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var flash = require('connect-flash');
var session = require('express-session');
var sys = require('util');
var routes = require('./routes/index');

// Init App
var app = express();

// View Engine
app.set('views', 'views');
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static('public'));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});



app.use('/', routes);

//MAILER
var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');
var mailer = nodemailer.createTransport({
  /*
  host: "smtp-mail.outlook.com",
  port: 587,
  secureConnection: false,
  */
  service: 'outlook',
  auth: {
    user: 'admin@designbydev.com',
    pass: 'lolcakes@01'
  },
  tls: {
        ciphers:'SSLv3'
    }
});

mailer.use('compile', hbs({
  viewPath: 'views/email',
  extName: '.hbs'
}));

app.post('/about', function(req, res, next) {
    mailer.sendMail({
      from: 'admin@designbydev.com',
      to: 'wevindood@gmail.com',
      subject: 'You\'re awesome!',
      template: 'welcome',
      context: {}
    });
  });



// Set Port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});
