/*global require, module*/
(function taskRouterWrapper() {
    'use strict';

    var express = require('express'),
        router = express.Router(),
        taskController = require('../controllers/taskController');

    /**
     * Returns task details.
     */
    router.get('/task/:id', function (req, res) {
        var response = {},
            taskId = req.params.id;

        function onGetDetails(data) {
            response.data = data;
            response.msg = 'Task details';
            res.send(response);
        }
        taskController.getDetails(taskId, onGetDetails);
    });

    /**
     * Returns task list.
     */
    router.get('/tasks/list', function (req, res) {
        var response = {};

        function onGetTaskList(tasks) {
            response.msg = 'Task details';
            response.data = tasks;
            res.send(response);
        }
        taskController.getTaskList(onGetTaskList);
    });

    /**
     * Adds new task request.
     * @param {String} command
     */
    router.post('/task', function (req, res) {
        var response = {};

        function onTaskAdded(task) {
            response.msg = 'New task created';
            response.data = task;
            res.send(response);
        }
        taskController.addTask(req.params.command, onTaskAdded);
    });

    /**
     * Returns task details without history and logs.
     */
    router.get('/task/:id/lite', function (req, res) {
        var response = {};

        response.data = taskController.getDetailsLite();
        response.msg = 'Task details lite';
        res.send(response);
    });

    /**
     * Returns task logs.
     */
    router.get('task/:id/logs', function (req, res) {
        var response = {};

        response.data = taskController.getLogs();
        response.msg = 'Task logs';
        res.send(response);
    });

    /**
     * Returns task history.
     */
    router.get('task/:id/history', function (req, res) {
        var response = {};

        response.data = taskController.getHistory();
        response.msg = 'Task history';
        res.send(response);
    });

    module.exports = router;
})();
