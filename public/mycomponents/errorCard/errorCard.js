Polymer({
    is: 'pi-error-card',

    /**
     * Custom constructor.
     * @param {String} message Error message.
     * @param {String} status Error status.
     * @param {String} date Date when error message was created.
     */
    factoryImpl: function(message, status, date, headerColor) {
        this.message = message;
        this.status = status;
        this.date = date;
        this.headerColor = headerColor;
    },

    properties: {
        // Error status.
        status: String,
        // Error message.
        message: String,
        // Date when error message was created.
        // (tempolary type String)
        date: String,
        headercolor: String
    },
    created: function onCreated() {
        console.log('pi-error-card created');
    },
    attached: function() {
        console.log(this.properties);
        //this.customStyle['--pi-toolbar-color'] = this.headerColor;
        console.log(this.headerColor);
        this.updateStyles();
    }
});