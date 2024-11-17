import React, { useState } from 'react'

export default function Selleradd() {
document.title='Seller - Add product'
    const [data,setData]=useState({})
    const Add=function(e){
      e.preventDefault()
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(data)
        })
    }

  return (
    <div className='py-1 px-2'>
        <h1 className="display-2 fw-bold text-decoration-underline my-3">Add Product:</h1>
      <form onSubmit={(e)=>{Add(e)}}>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Product Title:</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="title" onChange={(e)=>{setData({...data,title:e.target.value})}}/>
</div>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Product Image:</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Image URL" onChange={(e)=>{setData({...data,image:e.target.value})}}/>
</div>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Product Price:</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="price"onChange={(e)=>{setData({...data,price:e.target.value})}}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Product Description:</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Description' rows="10" onChange={(e)=>{setData({...data,description:e.target.value})}}></textarea>
</div>
<button className="btn btn-success rounded-0">Add product</button>
      </form>
    </div>
  )
}
