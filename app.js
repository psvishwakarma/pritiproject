const express = require("express");
const port = process.env.PORT || 3001;
const path = require("path");
const fs = require("fs");
const app = express();


app.set("views", path.join("views"));
app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, "public")));



app.get('/', (req, res) => {
    res.render("index");
})


app.get('/form', (req, res) => {
    res.render("form");
})
app.get('/view',(req,res)=>{
    res.render("view");
})

app.get('/updated',(req,res)=>{
    res.render("updated");
})




app.listen(3001, () => {
    console.log("Server listening on port 3001");
});

