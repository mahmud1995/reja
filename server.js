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



// 1 Kirish codes
app.use(express.static("public")); // CSS files
app.use(express.json()); // json format ==> object holatiga 
app.use(express.urlencoded({extends: true})); // html post qilingan narsalarni qabul qiladi

// 2: Session ga bogliq narsalar yoziladi

// 3 Views codes - Backend da front yasemiz (traditional)
// install i ejs
app.set("views", "views");
app.set("view engine", "ejs"); // ejs orqali frontend ni yasemiz backend ichida

// 4
// app.get("/hello", function(req, res){
//     res.end('<h1 style="background:red;">Hello WOrld</h1>');
// });
// app.get("/gift", function(req, res){
//     res.end('<h1>Siz sovgalar bulimidasiz</h1>');
// });

app.get("/", function(req, res) {
  res.render("harid");
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
 

/*
terminal --> install [npm i nodemon] to update automatically 
package.json -->  "scripts": {
    "start": "node server.js",
    "dev": "nodemon serve.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
terminal --> [npm run dev] 
  */