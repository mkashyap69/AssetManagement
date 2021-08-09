import { combineReducers } from 'redux';
import { userReducer } from '../reducers/userReducer';
import { getSavedAreas } from './areaReducer';
import { getSavedAssets, addAsset } from './assetReducers';
import { getSavedConditions } from './conditionReducer';
import { getSavedSeverities } from './severityReducer';

const rootReducer = combineReducers({
  user: userReducer,
  savedAssets: getSavedAssets,
  addAsset,
  savedConditions: getSavedConditions,
  savedSeverities: getSavedSeverities,
  savedAreas: getSavedAreas,
});

export default rootReducer;
