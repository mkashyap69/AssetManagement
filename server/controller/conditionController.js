const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const Condition = require('../model/ConditionModel');

const getSavedConditions = catchAsync(async (req, res, next) => {
  const savedConditions = await Condition.find();

  if (savedConditions.length === 0) {
    return new AppError(404, 'No saved conditions');
  }

  res.status(201).json({ status: 'Success', data: savedConditions });
});

module.exports = {getSavedConditions};
