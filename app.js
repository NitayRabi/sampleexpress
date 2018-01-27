const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
//
const UsersRoutes = require('./routes/users.routes');

const app = class App {

    constructor(port) {
        this.express = express();
        this.express.set('port', port);
        this.routes = {
            users: new UsersRoutes()
        };
        this.middleware();
        this.initRoutes();
    }

    middleware() {
        /*
         App Level middlewares
         */
        this.express.use(compression());
        this.express.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
        next();
        });
        this.express.use(bodyParser.json({ limit: '50mb' }));
        this.express.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    }

    initRoutes() {
        /*
        Init all routers
         */
        this.express.use('', this.routes.users.router);
    }

};

module.exports = app;