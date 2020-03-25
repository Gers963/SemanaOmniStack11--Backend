const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


routes.post('/ong/create', OngController.create);
routes.get('/ongs/list', OngController.index);

routes.post('/auth', SessionController.create)

routes.get('/ong/incidents/list', ProfileController.index);

routes.post('/incidents/create', IncidentController.create);
routes.get('/incidents/list',   IncidentController.list);
routes.delete('/incidents/delete/:id', IncidentController.delet)

module.exports = routes;