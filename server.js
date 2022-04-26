let express = require("express");
let app = express();
let bodyParser = require('body-parser');
const users = require('./db');

app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({extended:true})) ;
// const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
 return res.send({message : "Hello! Node.js"});
});


app.get('/users', (req, res) => {
  //const myObj = JSON.parse(users);
  let text = "";
for (const x in users) {
  text += users[x].username + ", ";
}
  res.json(text )
})

app.listen(3000, () => {
  console.log("Starting node.js at port " + 3000);
});

module.exports = app ;


