const conection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(req, res) {
        const data = req.body
        const id = crypto.randomBytes(8).toString('HEX');

        await conection('ongs').insert({
            id,
            ...data
        })
        console.log(data);

        return res.json({ id });
    },

    async index(req, res) {
        const ongs = await conection('ongs').select('*');

        return res.json(ongs);
    }
};