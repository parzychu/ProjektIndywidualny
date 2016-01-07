(function taskWrapper() {

    var express = require('express');
    var router = express.Router();
    var taskController = require('../controllers/taskController');

    /**
     * Returns task details.
     */
    router.get('/details', function(req, res, next) {
        var response = {};

        response.data = taskController.getDetails();
        response.msg = 'Task details';
        res.send(response);
    });

    /**
     * Returns task list.
     */
     router.get('/list', function(req, res, next) {
         var response = {};
console.log('tasks router');
         response.data = taskController.getTaskList();
         response.msg = 'Task details';
         res.send(response);
     });

    /**
     * Returns task logs.
     */
    router.get('/logs', function(req, res, next) {
        var response = {};

        response.data = taskController.getLogs();
        response.msg = 'Task logs';
        res.send(response);
    });

    module.exports = router;
})();
