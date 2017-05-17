//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();
chai.use(chaiHttp);

describe('/POST validatePayment', function() {
    it('it should validate payment request', function(done) {
      var data = {
          sender: "John",
          receiver: "Mike",
          amount: 100
      }
      chai.request("http://payment-validation-service.mybluemix.net")
          .post('/validatePayment')
          .send(data)
          .end(function(err, res) {
              res.should.have.status(200);
              //res.body.should.be.a('object');
        	  console.log(res.body);
              res.body.should.have.property('msg');
            done();
          });
    });

});