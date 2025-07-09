import React from 'react';
import PropTypes from 'prop-types';

const List = ({ items = [], renderItem }) => {
  if (items.length === 0) {
    return <p>No items to display.</p>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={item.id ?? index}>
          {renderItem ? renderItem(item) : JSON.stringify(item)}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array,
  renderItem: PropTypes.func,
};

export default List;
