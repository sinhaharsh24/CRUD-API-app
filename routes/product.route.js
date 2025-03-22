const express = require('express');
const Product = require('../models/product.model.js');
const router = express.Router();
const {getProducts} = require('../controller/product.controller.js');
const {getProduct} = require('../controller/product.controller.js');
const {postProducts} = require('../controller/product.controller.js');
const {updateProduct} = require('../controller/product.controller.js');
const {deleteProduct} = require('../controller/product.controller.js');




router.get('/', getProducts );

router.get(":/id", getProduct);

router.post('/', postProducts);

//update a product
router.put(":/id",updateProduct);

router.delete(":/id",deleteProduct);


module.exports = router;