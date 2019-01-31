const mysql = require("mysql");
require('dotenv').config();

let connection;

// const pass = process.env.DB_PASSWORD;


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection( 
        process.env.JAWSDB_URL

        );
} else {
    connection = mysql.createConnection({

        host: process.env.JAWS_URL,
        user: "l40rt1p1ws28dm8k",
        password: process.env.JAWS_PASSWORD,
        database: "hrpccl0fpfsj2iol"
    });
//SQL connection
    connection.connect(function (err) {
        if (err) {
            console.error("error connecting" + err.stack);
            return;
        }
        console.log("connected as id" + connection.threadId);
    });
}

module.exports = connection;