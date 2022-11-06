const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/publics"));

app.get('/index', (req, res) => {
     request.get({
          url: 'http://localhost:8080/SOA/api/user/1',
          //body: {"username": req.body.username, "password": req.body.password},
          headers: {
               'User-Agent': 'Request-Promise'
          },
     }, function (error, response, body) {
          if (!error && response) {
               if (body !== null) {
                    
                    let obj_body = JSON.stringify(body);
                    console.log(obj_body)
                    return res.render("SOA/index", { obj_body });
                    
               }
               return res.write("<h1>Khong tim thay user nay</h1>");
          }
          else {
               return res.write("<h1>Loi server</h1>");
          }
     });

     //return res.render("SOA/index");
})

app.get('/login', (req, res) => {
     return res.render('login');
})

app.post('/login', (req, res) => {
     request.post({
          url: 'http://localhost:8080/SOA/api/user/login',
          body: {"username": req.body.username, "password": req.body.password},
          headers: {
               'User-Agent': 'Request-Promise'
          },
          json: true
     }, function (error, response, body) {
          if (!error && response) {
               if (body.id !== undefined) {
                    return res.redirect("/index");
               }
               return res.write("<h1>Sai username password</h1>");
          }
          else {
               return res.write("<h1>Loi server</h1>");
          }
     });

})

const port = 9090;
app.listen(port, () => console.log(`http://localhost:${port}`));