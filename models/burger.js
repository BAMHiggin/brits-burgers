const orm = require("../config/orm.js");

let burger = {
    all: function (cb) {
        orm.all(function (result) {
            cb(result);
            // console.log(result);
        });
    },
    //calling back to orm query string to create burger column and boolean value
    create: function (cols, vals, cb) {
        orm.create(cols, vals, function (result) {
            cb(result);
        });
    },
    //calling back to orm query string to 
    update: function (objColVals, condition, cb) {
        orm.update(objColVals, condition, function (result) {
            cb(result);
            console.log(result);
        });

    }
};


module.exports = burger;