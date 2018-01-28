const bsCRUDController = class BsCRUDController {
    /**
     * Expects a BookShelf model.
     */
    constructor(model) {
        this.model = model;
    }

    getAll = async (req, res) => {
        try {
            const data = await this.model.fetchAll();
            return res.status(200).json({[this.model.tableName]: data.toJSON()});
        } catch (err) {
            return this.handleError(err, res);
        }
    };

    getById = async (req, res) => {
        /**
         * This always expects an id param!
         */
        try {
            const id = req.params.id;
            const item = await this.model.forge({id}).fetch();
            return res.status(200).json({[this.model.tableName]: item.toJSON()});
        } catch {
            return this.handleError(err, res);
        }
    };

    add = async (req, res) => {
        try {
            await this.model.forge().save(req.body);
            return res.send(200);
        } catch (err) {
            return this.handleError(err, res);
        }
    };

    update = async (req, res) => {
        try {
            const id = req.id;
            await this.model.forge({id}).save(req.body);
            return res.send(200);
        } catch (err) {
            return this.handleError(err, res);
        }

    };


    handleError = (err, res) => {
        return res.status(500).json({
            error: true,
            data: {
                message: err.message
            }
        });
    }
};

module.exports = bsCRUDController;
