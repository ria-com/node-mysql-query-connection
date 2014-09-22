
var mysql = require('mysql'),
    config = require('config'),
    database = config.database,
    poolCluster = mysql.createPoolCluster();

for(var connection_name in database){
    poolCluster.add(connection_name, database[connection_name]);
}

module.exports = function() {
    var args = [].slice.call(arguments);
    poolCluster.getConnection(args.length > 1 ? args[0] : 'master', args.pop());
};