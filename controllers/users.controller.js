const BsCRUDController = require('../abstract/bs.crud.controller');
const SCHEMA = require('../schema');

const usersController = class UsersController extends BsCRUDController {
    constructor() {
        super(SCHEMA.User);
    }
};

module.exports = usersController;
