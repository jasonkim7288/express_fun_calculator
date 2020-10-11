let UsageCount = require('../models/usage_count');

module.exports = {
  getUsageCount: (req) => {
    return UsageCount.findOne();
  },
  increaseCount: async () => {
    currentUsage = await module.exports.getUsageCount();
    if (currentUsage.length === 0) {
      await new UsageCount({ count: 1 }).save();
    } else {
      currentUsage.count++;
      await currentUsage.save();
    }
  }
}