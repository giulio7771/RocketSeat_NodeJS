const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.post("/products", ProductController.store);
routes.get("/products", ProductController.index);


module.exports = routes;