const express = require('express');
const { index, apply } = require('../controller/publicRoutes');

const router = express.Router();

router.get('/', index);

router.get('/apply', apply)

module.exports = router