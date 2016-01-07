(function loadingTaskWrapper() {
    'use strict';

    function rerunTask() {
        console.log('TODO: rerun task');
    }

    function pauseTask() {
        console.log('TODO: pause task');
    }

    function deleteTask() {
        console.log('TODO: delete task');
    }

    function openLinkPopup() {
        document.getElementById('link-popup').open();
    }

    function openDetailsPopup() {
        document.getElementById('details-popup').open();
    }

    function bindEvents() {
        var linkBtn = document.getElementById('link-btn'),
            detailsBtn = document.getElementById('details-btn'),
            startBtn = document.getElementById('start-btn'),
            pauseBtn = document.getElementById('pause-btn'),
            deleteBtn = document.getElementById('delete-btn');

        linkBtn.addEventListener('click', openLinkPopup);
        detailsBtn.addEventListener('click', openDetailsPopup);
        startBtn.addEventListener('click', rerunTask);
        pauseBtn.addEventListener('click', pauseTask);
        deleteBtn.addEventListener('click', deleteTask);
    }

    var LoadingTask = Polymer({
        is: 'pi-loading-task',

        /**
         * Custom constructor.
         * @param {number} id Task id.
         * @param {String} status Task status.
         * @param {String} command Command used to run this task.
         * @param {number} progressValue Task progress.
         * @param {String} createdBy Name of user who created this task.
         */
        factoryImpl: function(id, status, command, progressValue, createdBy, link) {
            this.id = id;
            this.status = status;
            this.command = command;
            this.progressValue = progressValue;
            this.createdBy = createdBy;
            this.link = link;
        },

        properties: {
            // Task id.
            //id: Number,
            // Task status.
            status: {
                type: String
                    // observer: '_statusChanged'
            },
            // Task progress.
            progressValue: {
                type: Number
                    // observer: '_progressChanged'
            },
            // Name of user who created this task.
            createdBy: String,
            // Command used to run this task on server.
            command: String,
            link: String,
        },
        changeColor: function changeColor(color) {
            // body...
        },
        setColor: function setColor() {
            var color = '';

            switch (status) {
                case 'active':
                    color = '#448AFF';
                    break;
                case 'suspended':
                    color = '#9E9E9E';
                    break;
                case 'done':
                    color = '#4CAF50';
                    break;
                case 'abadoned':
                    color = '#673AB7';
                    break;
                case 'error':
                    color = '#D32F2F';
                    break;
            }
        },
        created: function onCreated() {

        },
        attached: function() {
            bindEvents();
            this.setColor();
            this.customStyle['--loading-progress'] = this.progressValue + '%';
            this.updateStyles();
        },
        // openLinkPopup: function openLinkPopup() {
        //     this.$.linkPopup.open();
        // },
        // goToLink: function goToLink() {
        //     console.log('goToLink');
        // }

    });
    window.LoadingTask = LoadingTask;
})();
