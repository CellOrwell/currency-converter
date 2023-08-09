const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const countries_url = "https://countryapi.io/api/name/austria";


app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/convert');
})

app.get('/convert', (req, res) => {
    const amount = req.query.amount;
    const from = req.query.from;
    const to = req.query.to;

    const options = JSON.parse(process.env.CURRENCY_OPTIONS);

    console.log(options);
    res.send("Sent!");
});


app.listen(port, () => {
    console.log('Server Running on Port ', port);
});