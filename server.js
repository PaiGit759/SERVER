const express = require("express");
const bodyParser = require("body-parser");

//import express from 'express';
//import bodyParser from 'body-parser';

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("Hello Pai");
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
