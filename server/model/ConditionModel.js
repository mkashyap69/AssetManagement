const mongoose = require('mongoose');

const conditionSchema = mongoose.Schema(
  {
    conditionName: {
      type: String,
      required: [true, 'Condition is required'],
    },
    severity: {
      type: String,
    },
    asset: {
      type: mongoose.Schema.ObjectId,
      ref: 'Asset',
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    source: String,
    parameters: String,
    triggerCondition: Boolean,
    conditionExpression: String,
  },
  { timestamps: true }
);

const Condition = mongoose.model('Condition', conditionSchema);

module.exports= Condition;
