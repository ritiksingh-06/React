import React from 'react'

const Square = ({colorValue}) => {
  return (
    <main>
        <div className='colorSection' style={{color: colorValue.trim().toLowerCase() === "black" ? 'white' : 'black', backgroundColor: colorValue}}>
            {colorValue ? colorValue : "Empty Value"}
        </div>
    </main>
  )
}

export default Square