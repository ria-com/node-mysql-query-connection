
var queryConnection = require('../lib/mysql-query-connection'),
    threadId;

describe("Simple test", function () {
    "use strict";

    beforeEach(function (done) {
        queryConnection(null, function(err, connection){
            console.log('connected as id ' + connection.threadId);
            threadId = connection.threadId;
            done();
        });
    });

    it("Check availability", function (done) {
        expect(threadId).toBeGreaterThan(1);
        done();
    });

});