const Area = require('../model/AreaModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

const getSavedAreas = catchAsync(async (req, res, next) => {
  const user = req.user;
  const areas = await Area.find().populate('asset');

  if (areas.length === 0) {
    return new AppError(404, 'No saved area found');
  }
  res.status(200).json({ status: 'Success', data: areas });
});

module.exports = { getSavedAreas };
