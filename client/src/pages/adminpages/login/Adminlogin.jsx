import React from 'react'
import { useState } from 'react';

const Adminlogin = () => {
  const[username,setUsername]= useState("")
  const[password,setPassword]= useState("")

  const handleClick = (e) => {
    e.preventDefault()

  }

  return (
    <div className='login'>
      <input type="text" placeholder='username'
      onChange={(e) => setUsername(e.target.value)}/>
       <input type="text" placeholder='password'
      onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={handleClick} >login</button>
      
    </div>
  )
}

export default Adminlogin