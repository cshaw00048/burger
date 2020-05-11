var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback){
        orm.selectAll(function(res){
            callback(res);
        });
    },

    insertONe: function(burger_name, callback){
        orm.updateOne(burger_id, function(res){
            callback(res);
        });
    }
};

module.exports = burger;