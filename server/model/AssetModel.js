const mongoose = require('mongoose');

const assetSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    type: {
      type: String,
    },
    manufacturer: {
      type: String,
      required: true,
    },
    model: {
      type: String,
    },
    description: {
      type: String,
    },
    version: {
      type: String,
    },
    serialNumber: {
      type: String,
      required: true,
    },
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
    severity: {
      type: mongoose.Schema.ObjectId,
      ref: 'Severity',
    },
  },
  { timestamps: true }
);

const Asset = mongoose.model('Asset', assetSchema);

module.exports = Asset;
