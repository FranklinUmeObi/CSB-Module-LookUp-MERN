const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');

require("dotenv/config");

const Post = require("./models/POST");
const port = process.env.PORT || 3001



//------------------------------------------------
//MiddleWare

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../build')));

//------------------------------------------------
//ROUTES

//Get
app.get("/", (req, res) => {
  console.log("Back To Home");
  res.send("We are on home");
});


app.get("/csb/data", (req, res) => {
  Post.find((err, data) => {
    if (err) {
      res.status(500).send(err)
      console.log("Something broke when running get");
    } else {
      console.log("We used get data successfully");
      res.status(200).send(data)
    }
  })
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  console.log("Redirected");
  res.sendFile(path.join(__dirname+'/../build/index.html'));
});



//Post
app.post("/csb/data", (req, res) => {
const dbData = req.body
console.log(dbData);

Post.create(dbData, (err, data) =>
  {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })

});

//------------------------------------------------
//Connect to Database

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log("Connected to db");
});



//startserver
app.listen(port, () => {
  console.log("Currently hosting on " + port);
});






// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// require("dotenv/config");

// const Post = require("./models/POST");
// const port = process.env.PORT || 3000

// //------------------------------------------------
// //MiddlWare
// app.use(bodyParser.json());
// app.use(cors());

// //------------------------------------------------
// //ROUTES
// app.get("/", (req, res) => {
//   res.send("We are on home");
// });

// app.post("/data", (req, res) => {
//   console.log(req.body);
//   const myPost = new Post({
//     Courses: req.body.Courses,
//   });

//   myPost
//     .save()
//     .then(data => {
//       res.json(data);
//     })
//     .catch(err => {
//       res.json({message: err});
//     });
// });

// //------------------------------------------------
// //Connect to Database
// mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
//   console.log("Connected to db");
// });



// //startserver
// app.listen(port);
