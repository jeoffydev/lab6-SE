const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();

app.use(express.json());

const allowedOrigins = ['http://127.0.0.1:5500', '*'];
app.use(cors({
    origin: function(origin, callback){
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
}));

const router = require("./router/router");
app.use("/", router);

app.get("/test", (req, res) => {
    res.json({ message: "Test my application." });
});


var PORT = 3000;

 
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
});