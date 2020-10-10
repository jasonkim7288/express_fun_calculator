let CalcHistory = require('../models/calc_history');

module.exports = {
  addCalcHistory: (req) => {
    return new CalcHistory({
      expression: req.query.calc,
      result: req.query.result
    });
  },
  getAllCalcHistory: (req) => {
    return CalcHistory.find().sort({createdDate: -1});
  },
  deleteCalc: (id) => {
    return CalcHistory.findByIdAndDelete(id);
  }
}