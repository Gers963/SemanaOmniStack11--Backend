const connection = require('../database/connection')

module.exports = {
    async create(req, res){
        const { id } = req.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('nome')
            .first();

        if(!ong){
            return res.status(400).json({ error: 'ong não existe'});
        }
        return res.json(ong);
    }
}