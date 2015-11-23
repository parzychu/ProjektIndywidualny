Polymer({
    is: 'pi-loading-task',

    /**
     * Custom constructor.
     * @param {number} id Task id.
     * @param {String} status Task status.
     * @param {String} command Command used to run this task.
     * @param {number} progressValue Task progress.
     * @param {String} createdBy Name of user who created this task.
     */
    factoryImpl: function(id, status, command, progressValue, createdBy) {
        this.id = id;
        this.status = status;
        this.command = command;
        this.progressValue = progressValue;
        this.createdBy = createdBy;
    },

    properties: {
        // Task id.
        //id: Number,
        // Task status.
        status: {
            type: String,
            observer: '_statusChanged'
        },
        // Task progress.
        progressValue: {
            type: Number,
            observer: '_progressChanged'
        },
        // Name of user who created this task.
        createdBy: String,
        // Command used to run this task on server.
        command: String,
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
         console.log(this.$);
    },
    created: function onCreated() {

    },
    attached: function() {
        console.log(this);
        this.setColor();
        console.log(this.progressValue);
        this.customStyle['--loading-progress'] = this.progressValue + '%';
        this.updateStyles();
    },
    openLinkPopup: function openLinkPopup() {
        console.log(this.$.linkPopup);
        this.$.linkPopup.open();
    }

});
