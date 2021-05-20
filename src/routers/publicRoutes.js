const express = require('express');
const { index, apply } = require('../controller/publicRoutes');
const { contact } = require('../controller/privateRoutes')

const router = express.Router();

router.get('/', index);

router.get('/apply', apply)

router.post('/contact', contact)

module.exports = router