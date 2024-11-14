import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Cart() {
    let [cart,setCart]=useState('')
  useEffect(()=>{
    fetch('http://localhost:8000/cart')
    .then((res)=> res.json())
    .then((data)=> setCart(data))
  
  },[])

  let { productId }=useParams()
  const Delproduct= function(){
    // e.preventDefault()
fetch(`http://localhost:8000/cart/${productId}`,{
    method:'DELETE'
})
  }
  return (
    <div style={{minHeight:'100vh'}}>
      <div className="container mt-5">
      <ul class="list-group">
    {cart && cart.map((product)=>(

        <li class="list-group-item rounded-0 d-flex my-3">
           <img src={product.image} alt="" width={'200px'} height={'200px'}/>
           <div>
            <h6>{product.title}</h6>
            <p>$ {product.price}</p>
           </div>
           <button className='btn btn-danger float-end position-absolute end-0 m-3' onClick={()=>Delproduct()}>Delete</button>
        </li>
      ))
    }

</ul>
      </div>
    </div>
  )
}
