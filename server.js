// const express = require("express");
// const bodyParser = require("body-parser");

import express from 'express';
import bodyParser from 'body-parser';
import './config/db.js';

import authRouter from './routes/authRoutes.js';
import taskRouter from './routes/taskRoutes.js';

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.use('/api', authRouter);
app.use('/api', taskRouter);

app.get("/", (req, res) => {
  return res.send("Hello Anatolii");
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
