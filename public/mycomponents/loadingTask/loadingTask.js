/*global Polymer*/
(function loadingTaskWrapper() {
    'use strict';

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
        factoryImpl: function (id, status, command, progressValue, createdBy, link) {
            this.id = id;
            this.status = status;
            this.command = command;
            this.progressValue = progressValue;
            this.createdBy = createdBy;
            this.link = link;
        },

        properties: {
            // Task status.
            status: {
                type: String,
                observer: '_statusChanged'
            },
            // Task progress.
            progressValue: {
                type: Number,
                observer: '_progressValueChanged'
            },
            // Name of user who created this task.
            createdBy: String,
            // Command used to run this task on server.
            command: String,
            link: String
        },

        _progressValueChanged: function _progressValueChanged() {

            this.customStyle['--loading-progress'] = this.progressValue + '%';
            this.updateStyles();
        },

        _statusChanged: function _statusChanged() {
            this.setClass();
        },

        setClass: function setColor() {
            var progress = this.$$('#loading-task .progress'),
                secondaryProgress = this.$$('#loading-task .secondary-progress'),
                header = this.$$('#loading-task .header'),
                classes = ['active', 'paused', 'finished', 'error', 'deleted', 'submitted'],
                i = 0,
                classesLength = classes.length;

            for (i; i < classesLength; i++) {
                header.classList.remove(classes[i]);
                progress.classList.remove(classes[i]);
            }
            header.classList.add(this.status);
            header.setAttribute('title', this.status);
            switch (this.status) {
            case 'active':
            case 'paused':
            case 'error':
                progress.classList.add(this.status);
                break;
            case 'finished':
            case 'deleted':
            case 'submitted':
                progress.classList.add('hidden');
                secondaryProgress.classList.add('hidden');
                break;
            default:
                console.error('unsupported status: ' + this.status);
            }
            this.updateStyles();
        },

        created: function onCreated() {

        },

        attached: function() {
            var self = this;

            self.setClass();

            function onSocketMsg(data) {
                if (data.id == self.id && data.progress) {
                    self.progressValue = data.progress;
                }
            }

            window.socketHelper.setListener('updateProgress', onSocketMsg);
        },

        openLinkPopup: function openLinkPopup() {
            this.$$('#link-popup').open();
        },

        openDetailsPopup: function openDetailsPopup() {
            this.$$('#details-popup').open();
        },

        openConfirmationPopup: function openConfirmationPopup(msg, callback) {
            var confirmationPopup = document.querySelector('pi-confirmation-popup');

            confirmationPopup.msg = msg;
            function confirmationPopupClosed(event) {
                var confirmed = confirmationPopup.closingReason.confirmed;

                confirmationPopup.removeEventListener('popup-closed', confirmationPopupClosed);
                if (confirmed) {
                    callback();
                }
            }
            confirmationPopup.addEventListener('popup-closed', confirmationPopupClosed);
            confirmationPopup.open();
        },

        restartTask: function rerunTask(event) {
            var msg = 'Czy na pewno chcesz wznowić zadanie?',
                self = this,
                pauseBtn = self.$$('#pause-btn'),
                startBtn =  self.$$('#start-btn');

            function onStatusChanged(response) {
                pauseBtn.classList.remove('hidden');
                startBtn.classList.add('hidden');
                self.status = response.data.status;
            }

            function onPopupClosed() {
                ajaxHelper.put('api/task/'+self.id, {status: 'active'}, onStatusChanged);
            }
            self.openConfirmationPopup(msg, onPopupClosed);
        },

        pauseTask: function pauseTask(event) {
            var msg = 'Czy na pewno chcesz wstrzymać zadanie?',
                self = this,
                pauseBtn = self.$$('#pause-btn'),
                startBtn = self.$$('#start-btn');

            function onStatusChanged(response) {
                startBtn.classList.remove('hidden');
                pauseBtn.classList.add('hidden');
                self.status = response.data.status;
            }

            function onPopupClosed() {
                ajaxHelper.put('api/task/'+self.id, {status: 'paused'}, onStatusChanged);
            }
            self.openConfirmationPopup(msg, onPopupClosed);
        },

        deleteTask: function deleteTask() {
            var msg = 'Czy na pewno chcesz usunąć zadanie?';

            function onPopupClosed() {
                console.log('TODO: delete task DELETE {status: \'deleted\'}');
            }
            this.openConfirmationPopup(msg, onPopupClosed);
        },

        goToLink: function goToLink() {
           location.replace("http://localhost:3000/task.html?"+this.id);
        }

    });
    window.LoadingTask = LoadingTask;
})();
