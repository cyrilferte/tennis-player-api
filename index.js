const express = require('express');


const app = express();


app.get('/players', (req, res) => {
    res.json({"message": "list players"});
});



app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
