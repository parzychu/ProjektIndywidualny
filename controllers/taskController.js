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
                    DBController.insertTask(newTask, callback);
                }
                console.log('Need second server: addTask');
                // dataServerController.addTask(command, onTaskAdded);
                //
                // under is just a mock
                var newTask = taskMock.getDetails();
                newTask.id = newTask.id + Math.floor((Math.random() * 100));
                newTask.status = 'submitted';
                DBController.insertTask(newTask, callback);
            },

            /**
             * Updates task.
             * @param {Number} taskId
             * @param {String} status New status.
             * @param {Function} callback
             */
            updateTaskStatus: function updateTaskStatus(params, callback) {
                function onTaskUpdated(updatedTask) {
                    DBController.updateTaskStatus(updatedTask, callback);
                }
                console.log('Need second server: updateTask');
                // dataServerController.updateTaskStatus(taskId, status, onTaskUpdated);
                //
                // under is just a mock
                DBController.updateTaskStatus({id: params.id, status: params.status}, callback);
            },
            ////////// Methods considered ////////
            getDetailsLite: taskMock.getDetailsLite,
            getLogs: taskMock.getLogs,
            getHistory: taskMock.getHistory
            //////////////////////////////////////
        };

    module.exports = taskController;

})();
