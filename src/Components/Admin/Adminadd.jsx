import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Adminadd() {
    let [productData,setProductData]=useState({})
    let navigate=useNavigate()
    let sendData=function(e){
        e.preventDefault()
        
            fetch('http://localhost:8000/blogs',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(productData)
            })
            .then((res)=> navigate('/'))
        
    }
  return (
    <div className='p-3'>
        <h1 className='display-5 fw-semibold mb-3 text-decoration-underline'>Add New Product:</h1>
        <form action="" onSubmit={(e)=> sendData(e)}>
     <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Product Title:</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" onChange={(e)=>{setProductData({...productData,title:e.target.value})}}/>
</div>
     <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Product Price:</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Price" onChange={(e)=>{setProductData({...productData,price:e.target.value})}}/>
</div>
     <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Product Image:</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Product Image URL" onChange={(e)=>{setProductData({...productData,image:e.target.value})}}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Product Description:</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder='Write product description' onChange={(e)=>{setProductData({...productData,description:e.target.value})}}></textarea>
</div>
<button className='btn btn-success rounded-0'>Add Product</button>
</form>

    </div>
  )
}
