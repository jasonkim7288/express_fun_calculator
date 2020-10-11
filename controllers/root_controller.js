const { strFuncToResult } = require('../utils/calc');
const { addCalcHistory, deleteCalc } = require('../utils/calc_history_utilities');
const { increaseCount } = require('../utils/usage_count_utilities');

module.exports = {
  getResult: (req, res) => {
    try {
      const retVal = strFuncToResult(req.query.calc);
      if (typeof retVal !== 'number') {
        throw 'methods are incorrect!';
      }
      req.query.result = retVal;
      addCalcHistory(req).save((err, calcHistory) => {
        if (err) {
          res.status(500).json({ error: err.message });
        } else {
          increaseCount();
          res.status(200).json(calcHistory);
        }
      })
    } catch(err) {
      res.status(404).json({ error: err.message });
    }
  }
}