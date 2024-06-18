import React from 'react'
import { useState,useEffect } from 'react'

function UseEffect() {
    const [form,setform]=useState([ ])
    useEffect (()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((get)=>get.json())
        .then((json)=>{
            setform(json)
        })
    },[]);
  return (
    <div>
        {
            form.map((item)=><li>{item.title}</li>)

        }

    </div>
  )
}

export default UseEffect