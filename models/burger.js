const orm = require("../config/orm.js");

let burger = {
    all : function(cb) {
        orm.all(function(result) {
            cb(result);
            // console.log(result);
        });
    }
};

module.exports = burger;