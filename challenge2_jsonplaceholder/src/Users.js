import React from 'react'

const Users = ({setQuarry, setIsLoadind, isClicked, setIsClicked}) => {
  return (
    <main 
        style={{backgroundColor: isClicked === 0  ? 'lightgray' : 'papayawhip'}}
        className='sizeofbutton'
        onClick={() => {setQuarry("users"); setIsLoadind(true); setIsClicked(0)}}
    >Users</main>
  )
}

export default Users