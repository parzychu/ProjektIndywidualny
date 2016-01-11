/*global require, module */
(function taskControllerWrapper() {
    'use strict';

    var taskMock = require('./../mocks/taskMock'),
        DBController = require('./DBControler'),

        /**
         * Task controller uses task mock object.
         * @type {Object}
         */
        taskController = {
            getDetails: DBController.getTask,
            getTaskList: DBController.getTasks,
            ////////// Methods considered ////////
            getDetailsLite: taskMock.getDetailsLite,
            getLogs: taskMock.getLogs,
            getHistory: taskMock.getHistory
            //////////////////////////////////////
        };

    module.exports = taskController;

})();
