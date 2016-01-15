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
                callback(response.newTask);
            }
            console.log('Need second server');
            req = http.request(options, onTaskAdded);
            req.write(command);
            req.end();
        }
    };

    module.exports = dataServerController;
})();
