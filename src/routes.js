const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);
routes.post("/products", ProductController.store);
routes.get("/products/:id", ProductController.show);
routes.get("/products", ProductController.index);

module.exports = routes;