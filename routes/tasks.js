(function taskRouterWrapper() {

    var express = require('express'),
        router = express.Router(),
        taskController = require('../controllers/taskController');

    /**
     * Returns task details.
     */
    router.get('/task/:id', function(req, res, next) {
        var response = {};

        response.data = taskController.getDetails();
        response.msg = 'Task details';
        res.send(response);
    });

    /**
     * Returns task list.
     */
     router.get('task/:id/list', function(req, res, next) {
         var response = {};

         response.data = taskController.getTaskList();
         response.msg = 'Task details';
         res.send(response);
     });

     /**
      * Returns task details without history and logs.
      */
     router.get('/task/:id/lite', function(req, res, next) {
         var response = {};

         response.data = taskController.getDetailsLite();
         response.msg = 'Task details lite';
         res.send(response);
     });

    /**
     * Returns task logs.
     */
    router.get('task/:id/logs', function(req, res, next) {
        var response = {};

        response.data = taskController.getLogs();
        response.msg = 'Task logs';
        res.send(response);
    });

    /**
     * Returns task history.
     */
    router.get('task/:id/history', function(req, res, next) {
        var response = {};

        response.data = taskController.getHistory();
        response.msg = 'Task history';
        res.send(response);
    });

    module.exports = router;
})();
