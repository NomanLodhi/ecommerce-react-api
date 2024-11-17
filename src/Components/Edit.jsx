import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edit() {
  let { productId }=useParams()
  let [details,setDetails]=useState({})
  let nav=useNavigate()
  useEffect(()=>{
    fetch(`http://localhost:8000/blogs/${productId}`)
    .then((res)=>res.json())
    .then((data)=>setDetails(data))
  },[])
  let EditProduct=function(){
    // e.preventDefault()
    fetch(`http://localhost:8000/blogs/${productId}`,{
    method:'PATCH',
    headers:{'content-type':'application/json'},
    body:JSON.stringify(details)
  })
  nav(`/viewblog/${productId}`)
}
document.title=`Edit - ${details.title}`
  return (
    <div>
     <div className='p-3'>
        <h1 className='display-5 fw-semibold mb-3 text-decoration-underline'>Edit Product:</h1>
        <form action="" onSubmit={()=>{EditProduct()}}>
     <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Edit Product Title:</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" value={details.title} onChange={(e)=>{setDetails({...details,title:e.target.value})}}/>
</div>
     <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Edit Product Price:</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Price" value={details.price} onChange={(e)=>{setDetails({...details,price:e.target.value})}}/>
</div>
     <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Edit Product Image:</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Product Image URL" value={details.image} onChange={(e)=>{setDetails({...details,image:e.target.value})}}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Edit Product Description:</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder='Write product description' value={details.description} onChange={(e)=>{setDetails({...details,description:e.target.value})}}></textarea>
</div>
<button className='btn btn-success rounded-0'>Edit Product</button>
</form>

    </div>
    </div>
  )
}
