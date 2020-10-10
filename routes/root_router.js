const express = require('express');
const router = express.Router();
const { getResult} = require('../controllers/root_controller');

router.get('/', getResult);


module.exports = router;