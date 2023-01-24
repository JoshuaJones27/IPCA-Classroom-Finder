const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const ValidationError = require('../errors/validationError');

module.exports = (app) => {
  const router = express.Router();

  router.post('/signin', (req, res, next) => {
    app.services.utilizador.findOne({ email: req.body.email})
    .then((user) => {
        if (!user[0]) res.status(403).json({"Error":"User Nao encontrado 1"});
            if(req.body.password === user[0].palavraPasse) {
                  var token = jwt.sign({ email: req.body.email }, 'receba');    
                  res.status(200).json({ token: token , "user": user[0]});
            } else res.status(403).json({"Error":"User Nao encontrado"});
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

  router.put('/forgetPassword', (req, res, next) => {
    app.services.utilizador.forgotPassword(req.body)
      .then(() => res.status(204).send())
      .catch((err) => next(err));
  });

  return router;
};
