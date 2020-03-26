const express = require('express')

const OngCtrl = require('./controllers/OngController')
const ProfileCtrl = require('./controllers/ProfileController')
const IncidentsCtrl = require('./controllers/IncidentsController')
const SessionCtrl = require('./controllers/SessionController')

const routes = express.Router()

routes.get('/ongs',OngCtrl.index)
routes.post('/ongs', OngCtrl.create)

routes.get('/profile', ProfileCtrl.index)

routes.post('/session', SessionCtrl.session)

routes.get('/incidents',IncidentsCtrl.index)
routes.post('/incidents',IncidentsCtrl.create)
routes.delete('/incidents/:id',IncidentsCtrl.delete)

module.exports = routes

