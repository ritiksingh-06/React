import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa';


const AddItem = ({newItem, setNewItem, handleSubmit}) => {

    const inputRef = useRef();

  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label>Add Item</label>
        <input autoFocus
                ref={inputRef}
                id='addItem'
                type='text'
                placeholder='Add Item'
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
        />
        <button className='button' 
                type='submit'
                onClick={() => inputRef.current.focus()}
            >
            <FaPlus/>
        </button>
    </form>
  )}

export default AddItem