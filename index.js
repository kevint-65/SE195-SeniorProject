const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000

  var app = express()

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')

  app.get('/', function (req, res) {
    res.render('pages/index')
  })

  app.get('/signup', function (req, res) {
    res.render('pages/signup')
  })

  app.post('/signup', function(req, res) {
    console.log(req.body);
    var user = {
     first_name: req.body.first_name,
     last_name: req.body.last_name,
     email: req.body.email,
     password: req.body.password,
     confirm_password: req.body.confirm_password
   };
   console.log(user.password)
   console.log(user.confirm_password)
    if(user.password != user.confirm_password) {
      console.log("Passwords do not match")
      res.redirect('/signup')
    }
    else {
      console.log("Passwords match")
      res.redirect('/')
    }

  });

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
