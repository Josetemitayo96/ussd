const express = require('express');
const router = express.Router();
const ussdControl = require('../controller/controller')
const mongoose = require('../config/config')

router.get('/', ussdControl.ussdWel);
router.post('/ussd', ussdControl.ussdDetails);

module.exports = router;