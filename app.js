const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const countries_url = "https://countryapi.io/api/name/";
const currency_url = "https://api.currencyapi.com/v3/latest";

const testCountryUrl = "https://jsonplaceholder.typicode.com/posts/1";
const testCurrencyUrl = "https://jsonplaceholder.typicode.com/photos/1";


app.use(express.json());

app.get('/', (req, res) => {
    console.log("Redirecting to /convert. Status Code: ", 301);
    res.redirect(301, '/convert');
})

app.get('/convert', (req, res) => {
    const amount = 1;
    const from = "GBP";
    const to = "USD";
    let curResponse = "";
    let countryResponse = "";
    let convPrice = 0;

    const curOptions = JSON.parse(process.env.CURRENCY_OPTIONS);
    const countryOptions = JSON.parse(process.env.COUNTRY_OPTIONS);
    const useUrl = currency_url + `?base_currency=${from}&currencies=${to}`;
    
    axios.get(useUrl, curOptions).then((response) => {
        const convRate = response.data.data[to].value;
        convPrice = convRate * amount;
        res.send({result: convPrice});
    }).catch((error) => {
        console.error("Error Fetching Exchange Rates. Error Code: ", error);
    });
});

// app.get('/getImages', (req, res) => {
//     axios.get(testCountryUrl, countryOptions).then((response) => {
//         countryResponse = response.data;
//     }).catch((error) => {
//         console.error("Error Fetching Country Info. Error Code: ", error);
//     });

//     res.send
// })

app.listen(port, () => {
    console.log('Server Running on Port ', port);
});