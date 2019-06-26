const express = require('express');
const players = require('./resources/tennis_players');

const app = express();


app.get('/players', (req, res) => {
    res.json(players.index());
});

app.get('/players/:id', (req, res) => {
    const player = players.getPlayer(req.params.id);
    if (player){
        res.json(players.getPlayer(req.params.id));
    }else {
        res.sendStatus(404)
    }

});

app.delete('/players/:id', (req, res) => {
    const player = players.getPlayer(req.params.id);
    if (player){
        res.json(players.deletePlayer(req.params.id));
    } else {
        res.sendStatus(404)
    }

});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
module.exports = app;
