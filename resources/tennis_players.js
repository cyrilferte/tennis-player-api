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
    static getPlayer(id){
        let selected_player;
        for (const player of db.players) {
            if (player.id === Number(id)) {
                selected_player = player;
            }
        }

        if (selected_player){
            return selected_player;
        } else {
            return {"player": 'not found' }
        }
    }


}

module.exports = Players;
