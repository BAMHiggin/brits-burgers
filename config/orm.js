const connection = require("../config/connection.js");
//Cats assignment referenced


//Helper function to to convert value pairs to SQL for updateOne function

function objtoSql(ob) {
    const arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}
///
const orm = {
    //sql statements -- select all from table, insert new burger, update burger to devoured
    all: function(cb) {
        let queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
  
    },
    // Connects with connection.js and provides format for SQL queries
    create: function (burgerName, devoured, callback) {
        let queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ('${burgerName.toString()}', ${devoured}); `

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        })
    },

    update: function (objColVals, condition, cb) {
        let queryString = "UPDATE burgers ";
        //updating the true/false condition of a burger to devoured/not devoured
        queryString += `SET ${objtoSql(objColVals)} WHERE ${condition}`

        // console.log(condition);
        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

};



module.exports = orm;