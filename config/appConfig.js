(function appConfigWrapper() {

    /**
     * App configuration.
     * @type {Object}
     */
    var port = 3000,
        appConfig = {
        PORT: port,
        URL: 'http://localhost:' + port
    };

    module.exports = appConfig;

})();
