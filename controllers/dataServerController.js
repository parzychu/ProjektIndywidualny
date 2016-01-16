/*global require, module*/
(function dataServerControllerWrapper() {
    'use strict';

    var http = require('http'),
        dataServerController = {};

    dataServerController = {
        addTask: function addTask(command, callback) {
            var req = null,
                options = {
                    path: '/api/task',
                    method: 'POST'
                };

            function onTaskAdded(response) {
                callback(response.data);
            }
            req = http.request(options, onTaskAdded);
            req.write(command);
            req.end();
        },

        updateTaskStatus: function updateTaskStatus(taskId, status) {
            var req = null,
                options = {
                    path: '/api/task/'+taskId,
                    method: 'PUT'
                };

            function onTaskUpdated(response) {
                callback(response.data);
            }
            console.log('Need second server: updateTask');
            req = http.request(options, onTaskUpdated);
            req.write(status);
            req.end();
        }
    };

    module.exports = dataServerController;
})();
