const express = require('express');
const { saveAsset, getSavedAssets } = require('../controller/assetController');
const { getSavedConditions } = require('../controller/conditionController');
const { getSavedSeverities } = require('../controller/severityController');
const { getSavedAreas } = require('../controller/areaController');
const authController = require('../controller/authController');

const Router = express.Router();

Router.route('/')
  .get(authController.protect, getSavedAssets)
  .post(authController.protect, saveAsset);
Router.route('/condition').get(authController.protect, getSavedConditions);
Router.route('/severity').get(authController.protect, getSavedSeverities);
Router.route('/areas').get(authController.protect, getSavedAreas);

module.exports = Router;
