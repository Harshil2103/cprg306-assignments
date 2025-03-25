// item.js
import React from 'react';

export default function Item({ item, onSelect }) {
  const itemStyle = {
    backgroundColor: '#f8f9fa',
    border: '1px solid #ddd',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer', // Makes the item appear clickable
  };

  const itemNameStyle = {
    fontWeight: 'bold',
  };

  // Handle click event
  const handleClick = () => {
    onSelect(item.name); // Pass the item name to the parent component
  };

  return (
    <li style={itemStyle} onClick={handleClick}>
      <span style={itemNameStyle}>{item.name}</span> - {item.quantity} ({item.category})
    </li>
  );
}
