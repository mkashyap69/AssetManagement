const mongoose = require('mongoose');

const areaSchema = mongoose.Schema({
  areaName: {
    type: 'string',
    required: [true, 'Area name is required'],
  },
  asset: {
    type: mongoose.Schema.ObjectId,
    ref: 'Asset',
  },
  condition: {
    type: mongoose.Schema.ObjectId,
    ref: 'Condition',
  },
});

const Area = mongoose.model('Area', areaSchema);

module.exports =Area;
