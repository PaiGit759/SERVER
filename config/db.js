//const mongoose = require('mongoose');
//const password = 'ejMI6BvVAJftCpLA';
//const URI = 'mongodb+srv://panig789:${password}.51fmw8r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

import mongoose from 'mongoose';

const URI = "mongodb+srv://panig789:aJD023jy14oK4SIi@cluster0.wrgnewp.mongodb.net/";

console.log("+++++");

mongoose
    .connect(URI)
    .then(() => {
        console.log("Successfully connect to MongoDB+++++");
    })
    .catch((e) => {
        console.error("Connection error", e);
    });