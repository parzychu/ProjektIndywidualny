(function taskMockWrapper() {

    var AppConfig = require('./../config/appConfig');

    /**
     * Tasks mock.
     * @type {Object}
     */
    var url = AppConfig.URL + "/task.html",
        tasks = [
        {
            author: "author",
            id: "1",
            command: "python: lol1",
            progress: "10",
            status: "active",
            link: url,
            created: 'Mon Dec 28 2015 00:00:58 GMT+0100 (CET)',
            started: 'Mon Dec 28 2015 00:30:58 GMT+0100 (CET)',
            finished: 'Mon Dec 28 2015 02:30:58 GMT+0100 (CET)',
            logs: [
                {
                    status: 'error',
                    msg: 'źle'
                },
                {
                    status: 'info',
                    msg: 'no nieźle'
                }
            ]
        },
        {
            author: "author",
            id: "2",
            command: "python: lol1",
            progress: "85",
            status: "active",
            link: url,
            created: 'Mon Dec 28 2015 00:00:58 GMT+0100 (CET)',
            started: 'Mon Dec 28 2015 00:30:58 GMT+0100 (CET)',
            finished: 'Mon Dec 28 2015 02:30:58 GMT+0100 (CET)',
            logs: [
                {
                    status: 'error',
                    msg: 'źle'
                },
                {
                    status: 'info',
                    msg: 'no nieźle'
                }
            ]
        },
        {
            author: "author",
            id: "3",
            command: "python: lol1",
            progress: "100",
            status: "finished",
            link: url,
            created: 'Mon Dec 28 2015 00:00:58 GMT+0100 (CET)',
            started: 'Mon Dec 28 2015 00:30:58 GMT+0100 (CET)',
            finished: 'Mon Dec 28 2015 02:30:58 GMT+0100 (CET)',
            logs: [
                {
                    status: 'error',
                    msg: 'źle'
                },
                {
                    status: 'info',
                    msg: 'no nieźle'
                }
            ]
        },
        {
            author: "author",
            id: "4",
            command: "python: lol1",
            progress: "90",
            status: "paused",
            link: url,
            created: 'Mon Dec 28 2015 00:00:58 GMT+0100 (CET)',
            started: 'Mon Dec 28 2015 00:30:58 GMT+0100 (CET)',
            finished: 'Mon Dec 28 2015 02:30:58 GMT+0100 (CET)',
            logs: [
                {
                    status: 'error',
                    msg: 'źle'
                },
                {
                    status: 'info',
                    msg: 'no nieźle'
                }
            ]
        },
        {
            author: "author",
            id: "5",
            command: "python: lol1",
            progress: "10",
            status: "error",
            link: url,
            created: 'Mon Dec 28 2015 00:00:58 GMT+0100 (CET)',
            started: 'Mon Dec 28 2015 00:30:58 GMT+0100 (CET)',
            finished: 'Mon Dec 28 2015 02:30:58 GMT+0100 (CET)',
            logs: [
                {
                    status: 'error',
                    msg: 'źle'
                },
                {
                    status: 'info',
                    msg: 'no nieźle'
                }
            ]
        },
        {
            author: "author",
            id: "6",
            command: "python: lol1",
            progress: "10",
            status: "deleted",
            link: url,
            created: 'Mon Dec 28 2015 00:00:58 GMT+0100 (CET)',
            started: 'Mon Dec 28 2015 00:30:58 GMT+0100 (CET)',
            finished: 'Mon Dec 28 2015 02:30:58 GMT+0100 (CET)',
            logs: [
                {
                    status: 'error',
                    msg: 'źle'
                },
                {
                    status: 'info',
                    msg: 'no nieźle'
                }
            ]
        },
        {
            author: "author",
            id: "7",
            command: "python: lol1",
            progress: "10",
            status: "submitted",
            link: url,
            created: 'Mon Dec 28 2015 00:00:58 GMT+0100 (CET)',
            started: 'Mon Dec 28 2015 00:30:58 GMT+0100 (CET)',
            finished: 'Mon Dec 28 2015 02:30:58 GMT+0100 (CET)',
            logs: [
                {
                    status: 'error',
                    msg: 'źle'
                },
                {
                    status: 'info',
                    msg: 'no nieźle'
                }
            ]
        }
    ],

    task = {
        link: AppConfig.URL + '/task.html',
        id: 34344242,
        status: 'in-progress',
        progress: '67%',
        author: 'admin',
        created: 'Mon Dec 28 2015 00:00:58 GMT+0100 (CET)',
        started: 'Mon Dec 28 2015 00:30:58 GMT+0100 (CET)',
        finished: 'Mon Dec 28 2015 02:30:58 GMT+0100 (CET)',
        history: [{
            status: 'created',
            author: 'admin',
            date: 'Mon Dec 28 2015 00:30:58 GMT+0100 (CET)'
        }, {
            status: 'started',
            author: 'admin2',
            date: 'Mon Dec 28 2015 01:30:58 GMT+0100 (CET)'
        }, {
            status: 'suspended',
            author: 'admin',
            date: 'Mon Dec 28 2015 02:30:58 GMT+0100 (CET)'
        }, {
            status: 'started',
            author: 'admin2',
            date: 'Mon Dec 28 2015 05:30:58 GMT+0100 (CET)'
        }, {
            status: 'finished',
            author: 'server',
            date: 'Mon Dec 28 2015 06:30:58 GMT+0100 (CET)'
        }],
        command: 'python taskLol.py -s -m -lol',
        logs: [{
            status: 'error',
            msg: 'Controlling a generator exhaustion >>> class Bank(): # let\'s create a bank,' +
                'es. More about it in this article about how does the for loop work."'
        }, {
            status: 'info',
            msg: 'no nieźle'
        }]
    };

    /**
     * Returns task details.
     * @param  {Number} taskId
     * @return {Obcject}
     */
    function getDetails(taskId) {
        return {
            id: task.id,
            author: task.author,
            link: task.link,
            status: task.status,
            progress: task.progress,
            created: task.created,
            started: task.started,
            finished: task.finished,
            command: task.command,
            logs: task.logs,
            history: task.history
        };
    }

    /**
     * Returns task list.
     * @return {Array}
     */
    function getTaskList() {
        return tasks;
    }


//////////// Methods considered. ////////////////
    /**
     * Returns task details without history and logs.
     * @param  {Number} taskId
     * @return {Object}
     */
    function getDetailsLite(taskId) {
        return {
            id: task.id,
            author: task.author,
            status: task.status,
            progress: task.progress,
            command: task.command
        };
    }

    /**
     * Returns task logs.
     * @param  {Number} taskId
     * @return {Obcject}
     */
    function getLogs(taskId) {
        return {
            id: task.id,
            progress: task.progress,
            logs: task.logs
        };
    }

    /**
     * Returns task history.
     * @param  {Number} taskId
     * @return {Obcject}
     */
    function getHistory(taskId) {
        return {
            id: task.id,
            progress: task.progress,
            history: task.history
        };
    }
//////////////////////////////////////////////////

    taskMock = {
        getDetails: getDetails,
        getTaskList: getTaskList,
        ////////// Methods considered ////////
        getDetailsLite: getDetailsLite,
        getLogs: getLogs,
        getHistory: getHistory
        //////////////////////////////////////
    };

    module.exports = taskMock;

})();
