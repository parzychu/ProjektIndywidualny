/*global module */
(function socketIoWrapper() {
    'use strict';

    var socketController = {};

    socketController = {
        io: null,
        socket: null,
        sockets: [],
        socketMock: null,

        /**
         * Emits message.
         * @param  {[type]} msg
         * @param  {[type]} data
         */
        sendMessage: function sendMessage(msg, data) {
            var self = socketController;

            self.socket.emit(msg, data);
        },

        onConnection: function onConnection(socket) {
            var self = socketController;

            self.socket = socket;

            self.socket.emit('connected', 'connected to: ' + 'localhost ' + new Date());

            var progress = 10;
            if (self.socketMock === null) {
                self.socketMock = setInterval(function() {
                    progress = (progress + 1) % 100;
                    self.sendMessage('updateProgress', {
                        id: 1,
                        progress: progress
                    });
                }, 2000);
            }
        },

        /**
         * On new task connection callback.
         * @param  {Number} taskId
         * @param  {Objcet} socket
         */
        onNewTaskConnection: function onNewTaskConnection(taskId, socket) {
            taskRooms.push({
                id: taskId
            });

            socket.emit('connected', 'task: ' + taskId + ' connected');
        },

        /**
         * Sets new connection.
         * @param {String} taskId
         */
        setNewTaskConnection: function setNewTaskConnection(taskId) {
            var newRoom = socket.of('/' + taskId);

            newSocket.on('connection', onNewTaskConnection.bind(null, taskId));
        },

        /**
         * Inits module
         * @param  {Object} io Socket.io instance.
         */
        init: function init(io) {
            this.io = io;

            io.on('connection', this.onConnection);
        }
    };

    module.exports = socketController;
})();
