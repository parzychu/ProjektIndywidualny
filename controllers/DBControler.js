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
         * Updates task number.
         * @param  {Object} updatedTask
         * @param  {Function} callback
         */
        updateTaskStatus: function updateTaskStatus(updatedTask, callback) {
            var self = DBController;

            function onTaskUpdated(task) {
                callback(task);
            }

            db.collection('restaurants').updateOne({
                'id': updatedTask.taskId
            }, {
                $set: {
                    "status": updatedTask.status
                }
            }, onTaskUpdated);
        },

        /**
         * Obtains task list and passes it to callback.
         * @param  {Function} callback
         */
        getTaskList: function getTaskList(callback) {
            var self = DBController;

            self.db.collection('tasks').find().toArray(function(notImportant, data) {
                callback(data);
            });
        },

        /**
         * Obrains task with given id from DB.
         * @param {Number} id
         * @param {Function} callback
         */
        getTask: function getTask(taskId, callback) {
            var self = DBController;

            self.db.collection('tasks').find({
                'id': taskId
            }).toArray(function(notImportant, data) {
                callback(data);
            });
        },

        /**
         * Disconnects mongodb.
         */
        disconnect: function disconnect() {
            var self = DBController;

            self.db.close();
        }
    };


    module.exports = DBController;
})();
