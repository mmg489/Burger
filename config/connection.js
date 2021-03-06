var mysql = require("mysql");


//integration to HEROKU (JAWS DB)
var connection;
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)}
    else {
    connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
})
};

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected id: " + connection.threadId);
});

module.exports = connection;