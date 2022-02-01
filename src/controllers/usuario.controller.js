// const Sequelize     = require('sequelize');
const usuario = require('../models').usuario;

const controller = {};

controller.create = (req, res) => {
  return usuario
    .create({
      username: req.params.username,
      status: req.params.status
    })
    .then(usuario => res.status(200).send(usuario))
    .catch(error => res.status(400).send(error));
};

controller.list = (_, res) => {
  return usuario
    .findAll({})
    .then(usuario => res.status(200).send(usuario))
    .catch(error => res.status(400).send(error));
};

controller.find = (req, res) => {
  return usuario
    .findAll({
      where: {
        username: req.params.username
      }
    })
    .then(usuario => res.status(200).send(usuario))
    .catch(error => res.status(400).send(error));
};

module.exports = controller;
