module.exports = {
    database: {
        master: {
            host: "10.1.18.111",
            user: "master",
            password: "gtnhjdbx",
            port: "3306",
            database: "auto3",
            connectionLimit: 3
        },
        slave: {
            host: "localhost",
            user: "root",
            password: "",
            port: "3306",
            database: "test",
            connectionLimit: 3
        }
    }
};