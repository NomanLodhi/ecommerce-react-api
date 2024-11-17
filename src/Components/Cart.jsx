import React, { useEffect, useState } from 'react'

export default function Cart() {

  let [cart,setCart]=useState('')
  useEffect(()=>{
    fetch('http://localhost:8000/cart')
    .then((res)=> res.json())
    .then((data)=> setCart(data))
    
  },[])

  
  const Delproduct= function(e){
    
fetch(`http://localhost:8000/cart/${e.id}`,{
    method:'DELETE'
})
  }

  return (
    <div style={{minHeight:'100vh'}}>
      <div className="container mt-5">
        
      <ul class="list-group">
    {cart && cart.map((product)=>(
      <>
          
        
        <li class="list-group-item rounded-0 d-flex my-3">
           <img src={product.image} alt="" width={'200px'} height={'200px'}/>
           <div>
            <h6 className='px-3'>{product.title}</h6>
            <p className='px-3'>$ {product.price}</p>
           
           </div>
           <button className='btn btn-danger float-end position-absolute end-0 bottom-0 m-3' onClick={()=>Delproduct(product)}>Delete</button>
        </li>
        </>
      ))
    }
    
</ul>

      </div>
    </div>
  )
}
