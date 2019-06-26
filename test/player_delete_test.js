const players = require('../resources/tennis_players');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var should = chai.should();

chai.use(chaiHttp);

describe('index players Test', function () {
    it('should delete player by id', function (done) {
        chai.request(server)
            .get('/players')
            .end(function(err, res){
                chai.request(server)
                    .delete('/players/95')
                    .end(function(error, response){
                        response.should.have.status(200);
                        done();
                    });
            });
    });
});
