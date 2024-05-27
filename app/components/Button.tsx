'use client'
import React from 'react'

const Button = () => {
  return (
    <button onClick={()=>{
        throw Error('test error')
      }}>click me</button>
  )
}

export default Button