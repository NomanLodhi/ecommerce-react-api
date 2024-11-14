import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Edit() {
    let [details,setDetails]=useState('')
    let { productId }=useParams()
    useEffect(()=>{
fetch(`http://localhost:8000/blogs/${productId}`)
.then((res)=>res.json())
.then((data)=>setDetails(data))
    },[])
  return (
    <div>
      <h1>{details.title}</h1>
    </div>
  )
}
