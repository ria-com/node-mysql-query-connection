node-mysql-query-connection
===========================

Returns connection from the pool.

Introduction
------------

Example:

```javascript
    var queryConnection = require('mysql-query-connection');

    queryConnection('master', function(err, connection) {
        err
            ? console.log(err)
            : console.log(connection.threadId);
    });
```


Quick Start
-----------

**In your project directory, install and verify using npm:**

      my-project$ npm init

**Edit the default package.json file:**

(example fragment of package.json file):

```javascript
      "dependencies": {
         "mysql-query-connection": "git://github.com/ria-com/node-mysql-query-connection.git#master"
      }

      or

      "dependencies": {
         "mysql-query": "https://github.com/ria-com/node-mysql-query-connection/tarball/master"
      }
```

**Install the package:**

      my-project$ npm install mysql-query-connection

**Edit the mysql configuration file:**

      my-project$ vi config/default.js

```javascript
      module.exports = {
            database: {
                master: {
                    host: "localhost",
                    user: "root",
                    password: "",
                    port: "3306",
                    database: "test",
                    connectionLimit: 3
                }
      }
```
See [config](https://www.npmjs.org/package/config) about using 'config' module


Tests
-----

**In mysql-query module directory:**

(don't forget to edit 'config/default.js')

      mysql-query-connection-dir$ npm install -d
      mysql-query-connection-dir$ npm test