const mysql = require("mysql");
require('dotenv').config();

let connection;

const pass = process.env.DB_PASSWORD;



// console.log(process.env.JAWSDB_URL);

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection( 
        process.env.JAWSDB_URL

        );
} else {
    connection = mysql.createConnection({
        // host: "localhost",
        // port: 3306,
        // user: "root",
        // password: pass,
        // database: "burgers_db"
        //below is information needed to run in node.js locally, 
        //since database isn't local, above doesn't work
        host: process.env.JAWS_URL,
        user: "l40rt1p1ws28dm8k",
        password: process.env.JAWS_PASSWORD,
        database: "hrpccl0fpfsj2iol"
    });

    connection.connect(function (err) {
        if (err) {
            console.error("error connecting" + err.stack);
            return;
        }
        console.log("connected as id" + connection.threadId);
    });
}

module.exports = connection;