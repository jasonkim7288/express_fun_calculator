const express = require('express');
const { getCount } = require('../controllers/usage_count_controller')
const router = express.Router();

router.get('/', getCount);

module.exports = router;