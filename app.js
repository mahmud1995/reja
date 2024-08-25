console.log("Web Server ni boshlash");
const express = require("express");
const app = express();

const fs = require('fs');

// Connect MongoDB
const db = require("./server").db();
const mongodb = require("mongodb");

// let user;
// fs.readFile('database/user.json', "utf8", (err, data) => {
//   if(err) {
//     console.log("Error:", err);
//   } else {
//     user = JSON.parse(data);
//   }
// });

// 1 Kirish codes
app.use(express.static('public')); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

// 2: Session ga bogliq narsalar yoziladi

// 3 Views codes - Backend da front yasemiz (traditional), => install i ejs
app.set("views", "views");
app.set("view engine", "ejs"); // ejs orqali frontend ni yasemiz backend ichida

//4 Routing code
// POST
app.post('/create-item', (req, res) => {
  console.log("user entered /create-item")
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

// GET 
app.get("/", function(req, res) {
  console.log('user entered /')
  db.collection("plans")
    .find()
    .toArray((err, data)=> {
      if(err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});



app.get("/author", function(req, res) { // author page uchun
  res.render("author", {user: user});
});



module.exports = app;