import React from 'react'

const Comments = ({setQuarry, setIsLoadind, isClicked, setIsClicked}) => {
  return (
    <main 
        style={{backgroundColor: isClicked === 2  ? 'lightgray' : 'papayawhip'}}
        className='sizeofbutton'
        onClick={() => {setQuarry("comments"); setIsLoadind(true); setIsClicked(2)}}
    >Comments</main>
  )
}

export default Comments