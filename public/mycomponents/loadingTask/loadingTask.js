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

        setClass: function setColor() {
            var progress = this.$$('#loading-task .progress'),
                secondaryProgress = this.$$('#loading-task .secondary-progress'),
                header = this.$$('#loading-task .header'),
                classes = ['active', 'paused', 'finished', 'error', 'deleted', 'submitted'];

            header.classList.remove(classes);
            header.classList.add(this.status);
            header.setAttribute('title', this.status);
            progress.classList.remove(classes);
            switch (this.status) {
                case 'active':
                case 'paused':
                case 'error': {
                    progress.classList.add(this.status);
                    break;
                }
                case 'finished':
                case 'deleted':
                case 'submitted':
                    progress.classList.add('hidden');
                    secondaryProgress.classList.add('hidden');
                    break;
                default:
                    console.error('unsupported status: ' + this.status);
            }
        },

        created: function onCreated() {

        },

        attached: function() {
            this.setClass();
            this.customStyle['--loading-progress'] = this.progressValue + '%';
            this.updateStyles();
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
                pauseBtn = this.$$('#pause-btn'),
                startBtn =  this.$$('#start-btn');

            function onPopupClosed() {
                pauseBtn.classList.remove('hidden');
                // sometimes adding class doesn't work I guess it's polymer bug.
                startBtn.classList.add('hidden');
                console.log('TODO: restart task PUT {status: \'submitted\'}');
            }
            this.openConfirmationPopup(msg, onPopupClosed);
        },

        pauseTask: function pauseTask(event) {
            var msg = 'Czy na pewno chcesz wstrzymać zadanie?',
                pauseBtn = this.$$('#pause-btn'),
                startBtn = this.$$('#start-btn');

            function onPopupClosed() {
                startBtn.classList.remove('hidden');
                pauseBtn.classList.add('hidden');
                console.log('TODO: restart task PUT {status: \'paused\'}');
            }
            this.openConfirmationPopup(msg, onPopupClosed);
        },

        deleteTask: function deleteTask() {
            var msg = 'Czy na pewno chcesz usunąć zadanie?';

            function onPopupClosed() {
                console.log('TODO: delete task DELETE {status: \'deleted\'}');
            }
            this.openConfirmationPopup(msg, onPopupClosed);
        }

    });
    window.LoadingTask = LoadingTask;
})();
