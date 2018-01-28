const bookshelf = require('./db-connection');

const User = bookshelf.Model.extend({
    tableName: 'users'
});

module.exports = User;
