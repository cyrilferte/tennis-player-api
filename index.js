const express = require('express');
const players = require('./resources/tennis_players');

const app = express();


app.get('/players', (req, res) => {
    res.json(players.index());
});

app.get('/players/:id', (req, res) => {
    console.log(players.getPlayer(req.params.id))
    res.json(players.getPlayer(req.params.id));
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
