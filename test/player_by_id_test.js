const players = require('../resources/tennis_players');
const player_result = require('./player_by_id_result');


describe('index players Test', function () {
    it('should return player number 17', function (done) {
        const id = 17;
        console.log(players.getPlayer(id).id === id)
       if( players.getPlayer(id).id === id){
           done()
       } else {
           done('error')
       }
    });
});
