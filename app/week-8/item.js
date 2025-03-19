export default function ItemList({ items }) {
  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  };

  const itemStyle = {
    backgroundColor: '#f8f9fa',
    border: '1px solid #ddd',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '5px',
    fontSize: '16px',
  };

  const itemNameStyle = {
    fontWeight: 'bold', 
  };

  
return (
    <ul style={listStyle}>
      {items
        
        .map((item) => (
          <li key={item.id} style={itemStyle}>
            <span style={itemNameStyle}>{item.name}</span> - {item.quantity} ({item.category})
          </li>
        ))}
    </ul>
  );
}
