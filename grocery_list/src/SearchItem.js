import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchItem = ({search, setSearch, handleSearch}) => {
  return (
    <form className='addForm'>
        <label>Search Item</label>
        <input autoFocus
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