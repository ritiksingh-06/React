import React from 'react'
import {Link} from 'react-router-dom'

const Missing = () => {
  return (
    <>
        <div style={{textAlign: 'center', marginTop: '35px'}}>Page not found!!</div>
        <Link to={'/'}><p style={{textAlign: 'center', marginTop: '15px'}}>Go to Home.</p></Link>
    </>
  )
}

export default Missing;