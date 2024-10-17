import React, { useState } from 'react'

const Content = () => {
    const [name, setName] = useState("Rittik")
    const [count, setCount] = useState(0)

    const handleNameChange = () => {
        const name = ["Mr. Ritik", "Ritik", "Hrithik", "Ritik Singh", "Singh Ritik"];
        const int = Math.floor(Math.random() * 5);
        setName(name[int]);
    }

    const handleCount = () => {
        setCount(count + 1)
    }

    const handleOnClick3 = (e) => {
        console.log(e.target.textContent)
    }
  return (
    <main>
        <p>Hello {name}!</p>
        <p><b>{count}</b></p>
        <button onClick={handleNameChange}>Change name</button> <br></br>
        <button onClick={handleCount}>Click to add</button> <br></br>
        <button onClick={(e) => handleOnClick3(e)}>Click</button>
    </main>
  )
}


export default Content