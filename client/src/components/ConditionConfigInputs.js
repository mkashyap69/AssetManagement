import React, { useState } from 'react';

const ConditionConfigInputs = () => {
  const [conditionName, setConditionName] = useState('');
  const [conditionDescription, setConditionDescription] = useState('');
  const [action, setAction] = useState('');
  const [severity, setSeverity] = useState('');

  return (
    <div className="conditionConfig-inputs">
      <h2 className="conditionConfig-heading">Condition Configurations</h2>
      <label htmlFor="conditionName">
        Condition Name
        <input
          type="text"
          name="conditionName"
          placeholder="e.g Temp Abnormal"
          required
          onChange={(e) => setConditionName(e.target.value)}
        />
      </label>
      <label htmlFor="conditionDesc">
        Description
        <textarea
          type="text"
          name="conditionDesc"
          placeholder="e.g Temp is out of range"
          rows="4"
          required
          onChange={(e) => setConditionDescription(e.target.value)}
        />
      </label>
      <label htmlFor="action">
        Recommended Action
        <input
          type="text"
          name="action"
          required
          placeholder="e.g Send maintenance personnel"
          onChange={(e) => setAction(e.target.value)}
        />
      </label>
      <label htmlFor="severityType">
        Severity
        <select
          name="severityType"
          id="severityType"
          required
          onChange={(e) => setSeverity(e.target.value)}
        >
          <option value="Running">Running</option>
          <option value="Scheduled Down">Scheduled Down</option>
          <option value="Maintenance Required">Maintenance Required</option>
          <option value="Failure">Failure</option>
          <option value="Idle">Idle</option>
        </select>
      </label>
    </div>
  );
};

export default ConditionConfigInputs;
