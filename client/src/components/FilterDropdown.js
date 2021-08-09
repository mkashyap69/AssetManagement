import React from 'react';

const FilterDropdown = ({ name, optionData }) => {
  const handleDropdownChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="filter-dropdown">
      <select name={name} id={name} onChange={handleDropdownChange}>
        {optionData?.map((o) => (
          <option value={o.name} key={o._id}>
            {o.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
