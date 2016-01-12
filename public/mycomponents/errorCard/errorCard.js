/*global Polymer */
(function errorCardWrapper() {
    'use strict';

    Polymer({
        is: 'pi-error-card',

        /**
         * Custom constructor.
         * @param {String} message Error message.
         * @param {String} status Error status.
         * @param {String} date Date when error message was created.
         */
        factoryImpl: function factoryImpl(message, status, date) {
            this.message = message;
            this.status = status;
            this.date = date;
        },

        properties: {
            // Error status.
            status: String,
            // Error message.
            message: String,
            // Date when error message was created.
            // (tempolary type String)
            date: String
        },
        created: function onCreated() {
            console.log('pi-error-card created');
        },
        attached: function onAttached() {
            if (this.status === 'error') {
                this.$$('.card-header').classList.add('error');
            } else if (this.status === 'log') {
                this.$$('.card-header').classList.add('log');
            }

            this.date = new Date();
            function parseDate(date) {
                var newDate = '';

                /**
                 * Adds zero if value is less than 10.
                 */
                function addZero(value) {
                    value = value >= 10 ? value : '0' + value;

                    return value;
                }

                newDate += addZero(date.getHours()) + ':';
                newDate += addZero(date.getMinutes()) + ':';
                newDate += addZero(date.getSeconds()) + ' ';
                newDate += addZero(date.getDate()) + '.';
                newDate += addZero(date.getMonth()) + '.';
                newDate += date.getFullYear();

                return newDate;
            }

            this.date = parseDate(this.date);
        }
    });
})();
