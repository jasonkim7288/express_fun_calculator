const e = require('express');
const { getAllCalcHistory, deleteCalc } = require('../utils/calc_history_utilities');

module.exports = {
  getCalcHistory: (req, res) => {
    getAllCalcHistory(req).exec((err, calcHistory) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(200).json(calcHistory);
      }
    });
  },
  removeCalc: (req, res) => {
    deleteCalc(req.params.id).exec((err) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.sendStatus(204);
      }
    });
  }
}