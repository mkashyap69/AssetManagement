const mongoose = require('mongoose');

const conditionSchema = mongoose.Schema(
  {
    conditionName: {
      type: String,
      required: [true, 'Condition is required'],
    },
    conditionDesc: {
      type: String,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    source: String,
    parameters: String,
    triggerCondition: String,
    conditionExpression: String,
    asset: { type: mongoose.Schema.ObjectId, ref: 'Condition' },
  },
  { timestamps: true }
);

const Condition = mongoose.model('Condition', conditionSchema);

module.exports = Condition;
