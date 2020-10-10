const express = require('express');
const router = express.Router();

const { getCalcHistory, removeCalc } = require('../controllers/calc_history_controller');

router.get('/', getCalcHistory)

router.delete('/:id', removeCalc);

module.exports = router;