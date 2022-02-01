const route = require('express').Router();

const { list, create, find } = require('../controllers/usuario.controller');

route.get('/', list);
route.post('/', create);
route.get('/:username', find);

module.exports = route;
