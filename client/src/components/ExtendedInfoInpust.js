import React, { useState } from 'react';

const ExtendedInfoInpust = () => {
  const [description, setDescription] = useState('');
  const [version, setVersion] = useState('');
  const [type, setType] = useState('');
  const [serialNumber, setSerialNumber] = useState('');

  return (
    <div className="extendedInfo-inputs">
      <h2 className="extendedInfo-heading">Extended Information</h2>
      <label htmlFor="description">
        Description
        <textarea
          type="text"
          name="description"
          rows="4"
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <div className="asset-info">
        <h3 className="asset-info-heading">Asset Information</h3>
        <label htmlFor="version">
          Version
          <input
            type="text"
            name="version"
            onChange={(e) => setVersion(e.target.value)}
          />
        </label>
        <label htmlFor="type">
          Type
          <input
            type="text"
            name="type"
            placeholder="e.g Drive"
            onChange={(e) => setType(e.target.value)}
          />
        </label>
        <label htmlFor="serialNumber">
          Serial Number
          <input
            type="text"
            name="serialNumber"
            required
            onChange={(e) => setSerialNumber(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default ExtendedInfoInpust;
