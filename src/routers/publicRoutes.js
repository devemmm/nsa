const express = require('express');
const { index, apply, page404 } = require('../controller/publicRoutes');
const { contact } = require('../controller/privateRoutes')

const router = express.Router();

router.get('/', index);

router.get('/apply', apply)

router.post('/contact', contact)

router.get('*', page404)

module.exports = router