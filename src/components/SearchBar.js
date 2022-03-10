import React, { useState } from 'react'

function SearchBar(props) {
  const { getResults } = props;
  const [searchInput, setSearchInput] = useState('');

  const handleInput = (e) => {
    const input = e.target.value;
    setSearchInput(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getResults(searchInput);  
  };

  return (
    <div>
      <form>
        <input
          type="text"
          className="input"
          placeholder='Search movies here...'
          value={searchInput}
          onChange={handleInput}/>
        <button onClick={handleSubmit}> Enter </button>
      </form>
    </div>
  )
};

export default SearchBar;