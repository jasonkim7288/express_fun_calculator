const { getUsageCount } = require ('../utils/usage_count_utilities');

module.exports = {
  getCount: (req, res) => {
    getUsageCount(req).exec((err, usageCount) => {
      res.status(200).json({ count: err ? 0 : usageCount.count});
    })
  }
}