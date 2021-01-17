require('dotenv').config()

const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
const $ = require('jquery')(window);
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=>{
	res.render("landing");
})

app.get("/trending",(req,res)=>{
	res.render("trending");
})

app.get("/search",(req,res)=>{
	res.render("search");
});

app.get("*",(req,res)=>{
	res.render("error");
});

const port = process.env.PORT || 3000;
app.listen(port, () =>{
	console.log('GiphyCon App Started!!');
});