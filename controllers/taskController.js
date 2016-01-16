/*global require, module */
(function taskControllerWrapper() {
    'use strict';

    var taskMock = require('./../mocks/taskMock'),
        DBController = require('./DBControler'),
        dataServerController = require('./dataServerController'),

        /**
         * Task controller uses task mock object.
         * @type {Object}
         */
        taskController = {
            getTask: DBController.getTask,
            getTaskList: DBController.getTaskList,

            /**
             * Adds new task.
             * @param {String} command Command that will be invoked by other task.
             * @param {Function} callback
             */
            addTask: function addTask(command, callback) {
                function onTaskAdded(newTask) {
                    DBController.insertTask(command, callback);
                }
                dataServerController.addTask(command, onTaskAdded);
                console.log('Need second server: addTask');
                // dataServerController.addTask(command, onTaskAdded);
            },

            /**
             * Updates task.
             * @param {Number} taskId
             * @param {String} status New status.
             * @param {Function} callback
             */
            updateTaskStatus: function updateTaskStatus(taskId, status, callback) {
                function onTaskUpdated(updatedTask) {
                    DBController.updateTaskStatus(updatedTask, callback);
                }
                console.log('Need second server: updateTask');
                // dataServerController.updateTaskStatus(taskId, status, onTaskUpdated);
            },
            ////////// Methods considered ////////
            getDetailsLite: taskMock.getDetailsLite,
            getLogs: taskMock.getLogs,
            getHistory: taskMock.getHistory
            //////////////////////////////////////
        };

    module.exports = taskController;

})();
