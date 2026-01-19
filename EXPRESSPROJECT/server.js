const express = require("express")

const app = express();

app.get("/",(req,res) => {
  res.send("yo!")
})
app.get("/user" , (req,res) => {
  res.send("user route")
})
app.get("/user1" , (req,res) => {
  res.send("user route1")
})
app.get("/user2" , (req,res) => {
  res.send("user route2")
})
app.get("/user3" , (req,res) => {
  res.send("user route3")
})
app.get("/user4" , (req,res) => {
  res.send("user route4")
})
app.get("/user5" , (req,res) => {
  res.send("user route5")
})
app.get("/user6" , (req,res) => {
  res.send("user route6")
})
app.get("/user7" , (req,res) => {
  res.send("user route7")
})

app.get("/user-route" , (req,res) => {
  
  res.json({
    name : "Nisant",
    email: "qwert@123",
  });

  res.status(400).json(user);
  
})
const port = 3003;
app.listen(port,() => {
  console.log(`Server running on address http://localhost:${port}`);

})