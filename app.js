const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

app.get('/convert', (req, res) => {
    const amount = req.query.amount;
    const from = req.query.from;
    const to = req.query.to;
});


app.listen(port, () => {
    console.log('Server Running on Port ', port);
});