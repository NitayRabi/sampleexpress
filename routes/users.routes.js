const express = require('express');
const UsersController = require('../controllers/users.controller');

const userRoutes = class UserRoutes {

    constructor() {
        this.router = new express.Router();
        this.prefix = '/users';
        /*
        You can use several controllers if you want to seperate logic from CRUD to AUTH and etc...
         */
        this.controllers = {
            users: new UsersController()
        };
        this.initRouter();
    }

    initRouter() {
        this.router.route(this.prefix + '')
            .get(this.controllers.users.getAll)
            .put(this.controllers.users.update)
            .post(this.controllers.users.add);
        this.router.route(this.prefix + '/:id')
            .get(this.controllers.users.getById)
    }
};

module.exports = userRoutes;