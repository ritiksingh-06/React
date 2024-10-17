import React from 'react'

const Posts = ({setQuarry, setIsLoadind, isClicked, setIsClicked}) => {
  return (
    <main 
        style={{backgroundColor: isClicked === 1  ? 'lightgray' : 'papayawhip'}}
        className='sizeofbutton'
        onClick={() => {setQuarry("posts"); setIsLoadind(true); setIsClicked(1)}}
    >Posts</main>
  )
}

export default Posts