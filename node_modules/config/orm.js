var connection = require("../config/connection.js");

var orm = {
    //SelectAll
    selectAll: function(callback){
        connection.query("SELECT * burgers", function(err, result){
            if(err) throw err;
            callback(result);
        });
    },

    //InsertOne
    insertOne: function(burger_name, callback){
        connection.query("INSERT INTO burgers SET ?", 
        {burger_name: burger_name,
         devoured: false,
        },
        function(err, result){
            if(err) throw err;
            callback(result);
        });
    },

    //updateOne
    updateOne: function(burgerID, callback){
        connection.query("UPDATE burgers SET ? Where ?", [{devoured: true}, {id: burgerID}], function(err,result){
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;