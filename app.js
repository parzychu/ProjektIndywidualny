/*global require, module*/
(function appWrapper() {
    'use strict';

    var express = require('express'),
        path = require('path'),
        favicon = require('serve-favicon'),
        logger = require('morgan'),
        cookieParser = require('cookie-parser'),
        bodyParser = require('body-parser'),
        io = null,

        app = express(),
        server = null,
        port = null,
        DBController = require('./controllers/DBControler'),
        socketController = require('./controllers/socketController'),
        routes = require('./routes/index'),
        tasks = require('./routes/tasks'),
        AppConfig = require('./config/appConfig');


    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/api', tasks);
    app.use('/', routes);

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handlers

    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });

    server = app.listen(AppConfig.PORT, function() {
        var host = server.address().address;
        port = server.address().port;

        DBController.connect();
        io = require('socket.io')(server);
        socketController.init(io);
        console.log('Example app listening at http://%s:%s', host, port);
    });

    module.exports = app;
})();
