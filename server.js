const express = require("express");
const router = require("./controllers");
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json('public'));
app.use(express.static(__dirname));


app.use(router);




app.listen(PORT, () => console.log("listening on PORT " + PORT));