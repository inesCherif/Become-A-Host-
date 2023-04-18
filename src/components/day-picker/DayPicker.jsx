import React, { useState } from 'react';
import './DayPicker.css';

const DayPicker = () => {
  const [selectedDays, setSelectedDays] = useState([]);

  const handleDayClick = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  // Set Sunday (last day) as selected by default
  React.useEffect(() => {
    setSelectedDays([6]); // Sunday is at index 6 (0-based index)
  }, []);

  return (
    <div className="day-picker-container">
      <ul className="day-picker-list">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <li
            key={index}
            className={`day-picker-item ${selectedDays.includes(index) ? 'selected' : ''}`}
            onClick={() => handleDayClick(index)}
          >
            {day}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DayPicker;
