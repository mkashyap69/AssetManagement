import React, { useState } from 'react';

const ConditionRule = () => {
  const [source, setSource] = useState('');
  const [parameter, setParameter] = useState('');
  const [triggerCondition, setTriggerCondition] = useState('');
  const [conditionalExpression, setConditionalExpression] = useState('');

  return (
    <div className="condition-rule">
      <h3>Condition Rule</h3>
      <label htmlFor="name">
        Source
        <select
          name="source"
          id="source"
          required
          onChange={(e) => setSource(e.target.value)}
        >
          <option value="Device">Device</option>
          <option value="Database">Database</option>
        </select>
      </label>
      <label htmlFor="parameters">
        Parameter
        <input
          type="text"
          name="parameters"
          required
          onChange={(e) => setParameter(e.target.value)}
        />
      </label>
      <label htmlFor="name">
        Trigger Condition
        <select
          name="triggerCondition"
          id="triggerCondition"
          required
          onChange={(e) => setTriggerCondition(e.target.value)}
        >
          <option value="Less Than">Less Than</option>
          <option value="Greater Than">Greater Than</option>
          <option value="Equal">Equal</option>
        </select>
      </label>
      <label htmlFor="name">
        Condition Expression
        <input
          type="text"
          name="conditionExpression"
          required
          onChange={(e) => setConditionalExpression(e.target.value)}
        />
      </label>
      {/* <button style={{ marginTop: '3rem' }} disabled>Add New Condition</button> */}
    </div>
  );
};

export default ConditionRule;
