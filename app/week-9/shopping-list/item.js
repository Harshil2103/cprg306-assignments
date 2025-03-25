
import React from 'react';

export default function Item({ item, onSelect }) {
  const itemStyle = {
    backgroundColor: '#f8f9fa',
    border: '1px solid #ddd',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer', 
  };

  const itemNameStyle = {
    fontWeight: 'bold',
  };

  
  const handleClick = () => {
    onSelect(item.name); 
  };

  return (
    <li style={itemStyle} onClick={handleClick}>
      <span style={itemNameStyle}>{item.name}</span> - {item.quantity} ({item.category})
    </li>
  );
}
