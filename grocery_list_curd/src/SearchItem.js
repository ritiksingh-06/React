import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <form className='addForm'>
        <label>Search Item</label>
        <input
                id='addItem'
                type='text'
                placeholder='Search Item'
                required
                value={search}
                onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem