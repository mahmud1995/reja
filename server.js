const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://makhmudgo95:G1BO5Kyrd2LGSypp@cluster0.pj5dy.mongodb.net/Reja";

/* connect() - ichiga 3ta narsa pass qilamiz
    string, {useNewUrlParser:true, useUnifiedTopology: true}
*/
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR On Connection MongoDB");
    else {
      console.log("MongoDB Connection is Established!!!");
      module.exports = client;

      const app = require("./app");
      // Routing codes - serverni hosil qilish
      const server = http.createServer(app);
      let PORT = process.env.PORT || 6001;
      server.listen(PORT, function () {
        console.log(
          `The server is runnning successfully on port:${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
