
var mysql = require('mysql'),
    config = require('config'),
    database = config.database,
    poolCluster = mysql.createPoolCluster();

for(var connection_name in database){
    poolCluster.add(connection_name, database[connection_name]);
}

module.exports = function() {
    poolCluster.getConnection(arguments[0] || 'master', arguments[arguments.length-1]);
};