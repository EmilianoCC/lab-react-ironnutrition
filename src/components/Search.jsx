import { Input } from 'antd';
import React from 'react';

export const Search = ({ search }) => {
  const handleChange = (e) => {
    search(e.target.value);
  };
  return (
    <div>
      <label>Search</label>
      <Input
        placeholder="Search Food"
        type="text"
        id="name"
        onChange={handleChange}
      />
    </div>
  );
};
