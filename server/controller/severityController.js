const Severity = require('../model/SeverityModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');

const getSavedSeverities = catchAsync(async (req, res, next) => {
  const user = req.user;
  const severities = await Severity.find().populate('asset condition');

  if (severities.length === 0) {
    return new AppError(404, 'No saved severity found');
  }

  res.status(200).json({ status: 'Success', data: severities });
});

module.exports = { getSavedSeverities };
