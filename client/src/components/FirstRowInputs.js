import React, { useState } from 'react';

const FirstRowInputs = () => {
  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [area, setArea] = useState('');
  return (
    <div className="first-row-inputs">
      <label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="manufacturer">
        Manufacturer
        <input
          type="text"
          name="manufacturer"
          required
          onChange={(e) => setManufacturer(e.target.value)}
        />
      </label>
      <label htmlFor="model">
        Model
        <input
          type="text"
          name="model"
          onChange={(e) => setModel(e.target.value)}
        />
      </label>
      <label htmlFor="areaName">
        Area
        <select
          name="areaName"
          id="areaName"
          required
          onChange={(e) => setArea(e.target.value)}
        >
          <option value="Pune">Pune</option>
          <option value="Chennai">Chennai</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Noida">Noida</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Banglore">Banglore</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>
      </label>
    </div>
  );
};

export default FirstRowInputs;
