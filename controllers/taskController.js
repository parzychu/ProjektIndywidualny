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
            getDetails: DBController.getTask,
            getTaskList: DBController.getTasks,

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
            },
            ////////// Methods considered ////////
            getDetailsLite: taskMock.getDetailsLite,
            getLogs: taskMock.getLogs,
            getHistory: taskMock.getHistory
            //////////////////////////////////////
        };

    module.exports = taskController;

})();
