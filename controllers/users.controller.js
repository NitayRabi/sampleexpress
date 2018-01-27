const usersController = class UsersController {
    getUser(req, res) {
        /*
        Use services here for queries, parsing and etc...
         */
        const id = req.params.id;
        return res.status(200).json({
            success: true,
            message: 'Got user no' + id
        })
    };

    deleteUser(req, res) {
        /*
        Use services here for queries, parsing and etc...
         */
        const id = req.params.id;
        return res.status(200).json({
            success: true,
            message: 'deleted user no' + id
        })
    };

    addUser(req, res) {
        /*
        Use services here for queries, parsing and etc...
         */
        const id = req.params.id;
        return res.status(200).json({
            success: true,
            message: 'Added user no' + id
        })
    };

    updateUser(req, res) {
        /*
        Use services here for queries, parsing and etc...
         */
        const id = req.params.id;
        return res.status(200).json({
            success: true,
            message: 'Updated user no' + id
        })
    };
};

module.exports = usersController;