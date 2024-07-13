import React from 'react';

type CellProps = {
  value: number;
  onInputChange: (newValue: number) => void;
}

const Cell = (props:CellProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value) || 0;

    if(isNaN(newValue) || newValue > 9 || newValue < 1) props.onInputChange(0)
    else props.onInputChange(newValue)
  };

  return (
    <input
      type="text"
      value={props.value === 0 ? '' : props.value}
      onChange={handleChange}
      className="w-12 h-12 text-center border border-gray-300 hover:bg-blue-700 focus:bg-blue-700 focus:text-white"
    />
  );
};

export default Cell;
