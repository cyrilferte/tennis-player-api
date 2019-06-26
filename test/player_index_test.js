var chai = require("chai"), expect = chai.expect;

chai.use(require("chai-sorted"));

var players = require('../resources/tennis_players');

describe('index players Test', function () {
    it('should return number of players is 5', function () {
        players.index();
    });
});
    describe('index players Test', function () {
        it('should return sorted players by id', function () {
            expect(players.index()).to.be.sortedBy("id")
        });
});
