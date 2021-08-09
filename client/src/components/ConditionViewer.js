import React from 'react';

const ConditionViewer = ({ savedConditions }) => {
  return (
    <div className="condition-viewer">
      <h3> Saved Condition Viewer</h3>
      <ul>
        {savedConditions?.map((c) => (
          <li key={c._id}>{c.conditionName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConditionViewer;
