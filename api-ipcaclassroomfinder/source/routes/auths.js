const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const ValidationError = require('../errors/validationError');
// const config = require('../../config');

// const secret = config.authToken;

module.exports = (app) => {
  const router = express.Router();

  router.post('/signin', (req, res, next) => {
   

    app.services.utilizador.getAll({ email: req.body.email })
      .then((user) => {
        if (!user) throw new ValidationError('Autenticação inválida! #2');


            if(req.body.password===user.password) {
                  var token = jwt.sign({ email: req.body.email }, 'receba');    
                  
                  res.status(200).json({ token: token });

            } else throw new ValidationError('Autenticação inválida!');


       
      }).catch((err) => next(err));
  });

  router.post('/signup', async (req, res, next) => {
    try {
      const result = await app.services.utilizador.create(req.body);
      return res.status(201).json(result[0]);
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
