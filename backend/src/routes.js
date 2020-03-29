const express = require('express')
const {celebrate, Joi,Segments} = require('celebrate')

const OngCtrl = require('./controllers/OngController')
const ProfileCtrl = require('./controllers/ProfileController')
const IncidentsCtrl = require('./controllers/IncidentsController')
const SessionCtrl = require('./controllers/SessionController')

const routes = express.Router()

routes.get('/ongs', OngCtrl.index) 
routes.post('/ongs'
, celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}) 
,OngCtrl.create)

routes.get('/profile',
  celebrate({
      [Segments.HEADERS] : Joi.object({
          authorization: Joi.string().required()
      }).unknown()
  }),
 ProfileCtrl.index)

routes.post('/session',
  celebrate({
      [Segments.BODY] : Joi.object().keys({
          id: Joi.string().required()
      })
  }),
 SessionCtrl.session)

routes.get('/incidents', 
 celebrate({
     [Segments.QUERY] : Joi.object().keys({
         page: Joi.number()
     })
 }),
IncidentsCtrl.index)
routes.post('/incidents', 
 celebrate({
     [Segments.BODY] : Joi.object().keys({
        title:Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
     }) ,
     [Segments.HEADERS] : Joi.object({
        authorization: Joi.string().required()
     }).unknown()
 }),
IncidentsCtrl.create)
routes.delete('/incidents/:id',
  celebrate({
      [Segments.PARAMS]: Joi.object().keys({
          id: Joi.number().required()
      }),
      [Segments.HEADERS] : Joi.object({
        authorization: Joi.string().required()
      }).unknown()
  }) ,
IncidentsCtrl.delete)

module.exports = routes

