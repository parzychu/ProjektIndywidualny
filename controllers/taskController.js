/*global require, module */
(function taskControllerWrapper() {
    'use strict';

    var taskMock = require('./../mocks/taskMock'),

        /**
         * Task controller uses task mock object.
         * @type {Object}
         */
        taskController = {
            getDetails: taskMock.getDetails,
            getTaskList: taskMock.getTaskList,
            ////////// Methods considered ////////
            getDetailsLite: taskMock.getDetailsLite,
            getLogs: taskMock.getLogs,
            getHistory: taskMock.getHistory
            //////////////////////////////////////
        };

    module.exports = taskController;

})();
