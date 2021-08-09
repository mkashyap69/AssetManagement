const Asset = require('../model/AssetModel');
const Condition = require('../model/ConditionModel');
const Area = require('../model/AreaModel');
const Severity = require('../model/SeverityModel.js');
const catchAsync = require('../utils/catchAsync');

const saveAsset = catchAsync(async (req, res, next) => {
  const {
    name,
    type,
    manufacturer,
    model,
    description,
    version,
    serialNumber,
    areaName,
    conditionName,
    source,
    parameters,
    triggerCondition,
    conditionExpression,
    conditionDesc,
    severityType,
  } = req.body;
  const user = req.user;
  console.log(severityType);
  const severity = await Severity.create({
    severityType,
  });

  const asset = await Asset.create({
    name,
    type,
    manufacturer,
    model,
    description,
    version,
    serialNumber,
    user: user._id,
    severity: severity._id,
  });

  const condition = await Condition.create({
    conditionName,
    conditionDesc,
    source,
    parameters,
    triggerCondition,
    conditionExpression,
    user: user._id,
    asset: asset._id,
  });

  const area = await Area.create({
    areaName,
    asset: asset._id,
    condition: condition._id,
  });

  res.status(200).json({ status: 'Success', asset, condition, area, severity });
});

const getSavedAssets = catchAsync(async (req, res, next) => {
  const user = req.user;

  const assets = await Asset.find({ user: user._id }).populate('severity');

  if (assets.length === 0) {
    return new AppError(404, 'No saved assets');
  }

  res.status(201).json({ status: 'Success', data: assets });
});

module.exports = { saveAsset, getSavedAssets };
