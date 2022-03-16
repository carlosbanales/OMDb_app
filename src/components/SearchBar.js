import React, { useState } from 'react'
import { StyledInput } from './StyledComponents';
import { Button } from './StyledComponents';

function SearchBar(props) {
  const { searchResults } = props;
  const [searchInput, setSearchInput] = useState('');

  const handleInput = (e) => {
    const input = e.target.value;
    console.log(input);
    setSearchInput(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchResults(searchInput);  
  };

  return (
    <div>
      <form>
        <StyledInput
          type="text"
          className="input"
          placeholder='Search movies here...'
          value={searchInput}
          onChange={handleInput}/>
        <Button onClick={handleSubmit}> Enter </Button>
      </form>
    </div>
  )
};

export default SearchBar;