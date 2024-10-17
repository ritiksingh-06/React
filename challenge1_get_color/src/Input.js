import React from 'react'

const Input = ({colorValue, setColorValue}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Color Value</label>
        <input
            autoFocus
            required
            type='text'
            value={colorValue}
            onChange={(e) => setColorValue(e.target.value)}
            placeholder='Enter color name'
        />
    </form>
  )
}

export default Input