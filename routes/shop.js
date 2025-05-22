const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/', (req, res, next) => {
    res.send('<h1>Web shop page</h1>');
})

router.get('/', shopController.getProducts);

module.exports = router;