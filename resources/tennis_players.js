let db = require('./db.json');
const fs = require('fs');


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
    static getPlayer(id) {
        let selected_player;
        for (const player of db.players) {
            if (player.id === Number(id)) {
                selected_player = player;
            }
        }

        if (selected_player){
            return selected_player;
        } else {
            return null
        }
    }

    static deletePlayer(id) {
        const player = this.getPlayer(id);
        if (player){
            db.players.splice( db.players.indexOf(player), 1 );
            this.saveDatabase(db.players).then(function(res) {
                console.log('resp delet')
               return true
            });

        }
    }

    static saveDatabase(db){
        fs.writeFileSync('./resources/db.json', JSON.stringify(db));
        let promise = new Promise(function(resolve, reject) {
            resolve('Success!');
        });
        return promise
    }



}

module.exports = Players;
