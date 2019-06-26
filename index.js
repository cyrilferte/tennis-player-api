const express = require('express');
const players = require('./resources/players');

const app = express();


app.get('/players', (req, res) => {
    res.json();
});



app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
