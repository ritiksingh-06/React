import { useEffect } from "react"
import React from 'react'

const Content = () => {

  console.log("before useEffect")

  useEffect(() => {                   // useEffect also runs once on load..
    console.log("inside useEffect")   // It's a asynchronous function..
  },[/* Dependency */])               // useEffect runs when value of dependency got changed..

  console.log("after useEffect")
  

  return (
    <main>
        Open your Console section broo!!.
    </main>
  )
}

export default Content