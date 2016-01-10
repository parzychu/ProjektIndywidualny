(function socketHelperWrapper() {
    'use strict';

    var socket = io.connect('/'),
        socketHelper = {};

    socket.on('connected', function (msg) {
        console.log(msg);
    });

    socketHelper = {
        /**
         * Sets listener on concrete socket message.
         * @param {String} msg
         * @param {Function} callback
         */
        setListener: function setListener(msg, callback) {
            socket.on(msg, function(data) {
                callback(data);
            });
        },

        /**
         * Wrapper for socket.emit
         * @param  {String} msg
         * @param  {Object} data
         */
        emit: function emit(msg, data) {
            socket.emit(msg, data);
        }
    };

    window.socketHelper = socketHelper;
})();
