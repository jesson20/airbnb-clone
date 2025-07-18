import React, { useState } from 'react';
import './Search.css';
import 'react-date-range/dist/styles.css';        // ✅ Correct CSS
import 'react-date-range/dist/theme/default.css'; // ✅ Theme CSS
import { DateRangePicker } from 'react-date-range';
import Button from '@mui/material/Button';
import PeopleIcon from '@mui/icons-material/People';

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className="search">
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
      <h2>
        Number of guests
        <PeopleIcon />
      </h2>
      <input min={0}
      defaultValue={2} 
      type="number" />
      <Button>Search Airbnb</Button>
    </div>
  );
}

export default Search;
