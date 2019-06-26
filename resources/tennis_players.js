let db = require('./db.json');

class Players {
    constructor() {}

    static index(){
     return this.sortById(db.players);
    }

     static sortById(players){
        let sort_players = [];
        players.sort(function(a, b) {
            return a.id - b.id ;
        });
        return  players
    }


}

module.exports = Players;
