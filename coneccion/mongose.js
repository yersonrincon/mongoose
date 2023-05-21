
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

const username = "yerson";
const password = "8nYiORCGLqLVwg0S";
const cluster = "cluster0.unc8kf1";
const dbname = "proyectonode";

const dbConecction = async() => {

mongoose.connect( `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}`, 
  {

  }
);



const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
}

module.exports=dbConecction;
