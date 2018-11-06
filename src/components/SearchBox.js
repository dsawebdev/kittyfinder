import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return(
    <div className='pa2'>
      <input 
      className='pa3 ba b--green bg-washed-blue tc'
      type='search' 
      placeholder='search for kitties' 
      onChange={ searchChange }
      />
    </div>
  )
}

export default SearchBox;