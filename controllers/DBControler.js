/*global require, module*/
(function DBControllerWrapper() {
    'use strict';

    var MongoClient = require('mongodb').MongoClient,
        url = 'mongodb://localhost:27017/test',
        DBController = {};

    DBController = {
        db: null,

        /**
         * Connets MongoClient to mongodb. Inits module.
         */
        connect: function connect() {
            var self = DBController;

            MongoClient.connect(url, function(err, db) {
                console.log("Connected correctly to server.");
                self.db = db;
            });
        },

        /**
         * Inserts task to database.
         * @param  {Object} task
         * @param  {Function} callback
         */
        insertTask: function insertTask(task, callback) {
            var self = DBController;

            function insertCallback(err, result) {
                console.log('inserted: ', result);
                callback(result);
            }
            self.db.collection('tasks').insertOne(task, insertCallback);
        },

        /**
         * Obtains task list and passes it to callback.
         * @param  {Function} callback
         */
        getTasks: function getTasks(callback) {
            var self = DBController;

            self.db.collection('tasks').find().toArray(function(notImportant, data) {
                callback(data);
            });
        },


        /**
         * Disconnects mongodb.
         */
        disconnect: function disconnect() {
            this.db.close();
        }
    };


    module.exports = DBController;
})();
