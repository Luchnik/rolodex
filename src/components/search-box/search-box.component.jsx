import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ onSearchBoxChange, placeholder}) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={onSearchBoxChange}
    />
  );
};
