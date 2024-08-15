/*
Create a new folder and name it "reja"
open "reja" folder on terminal and type "code ."
Open new termina--> [node init] and 
  {
  "name": "reja",
  "version": "1.0.0",
  "description": "BU bizning loyihamiz",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jony",
  "license": "ISC"
}

Make a new file "server.js"--> console.log("Web serverni boshlemiz")
Terminal --> [npm start]

Install Express --> [npm install express --save] = [npm i express]
server.js --> 
*/

console.log("Web Server ni boshlash");
const express = require("express");
const app = express();
const http = require('http');
const fs = require('fs');

let user;
fs.readFile('database/user.json', "utf8", (err, data) => {
  if(err) {
    console.log("Error:", err);
  } else {
    user = JSON.parse(data);
  }
});



// 1 Kirish codes
app.use(express.static('public')); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

// 2: Session ga bogliq narsalar yoziladi

// 3 Views codes - Backend da front yasemiz (traditional)
// install i ejs
app.set("views", "views");
app.set("view engine", "ejs"); // ejs orqali frontend ni yasemiz backend ichida

// 4

app.get("/", function(req, res) {
  res.render("harid");
});

app.get("/author", function(req, res) { // author page uchun
  res.render("author", {user: user});
});

app.post('/create-item', function(req, res) {
  console.log(req.body);
  res.json({test: "Success"});
  
});

// Routing codes - serverni hosil qilish
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is runnning successfully on port:${PORT}`);

});

