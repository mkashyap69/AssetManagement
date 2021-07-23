const mongoose = require('mongoose');

const assetSchema = mongoose.Schema(
  {
    assetName: {
      type: String,
      required: true,
    },
    assetType: {
      type: String,
    },
    manufacturer: {
      type: String,
    },
    user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

const Asset = mongoose.model('Asset', assetSchema);

module.exports= Asset;
