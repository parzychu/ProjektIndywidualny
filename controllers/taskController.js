(function taskControllerWrapper() {
    var taskMock = require('./../mocks/taskMock');

    /**
     * Task controller uses task mock object.
     * @type {Object}
     */
    taskController = {
        getDetails: taskMock.getDetails,
        getDetailsLite: taskMock.getDetailsLite,
        getLogs: taskMock.getLogs,
        getTaskList: taskMock.getTaskList
    };

    module.exports = taskController;

})();
