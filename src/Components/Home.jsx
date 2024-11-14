import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import { Link } from 'react-router-dom';
export default function Home() {
    let api="http://localhost:8000/blogs";
    const[products,setProducts]=useState("")
    useEffect(()=>{
fetch(api)
.then(res=> res.json())
.then(data=>setProducts(data))

},[])
let AddtoCart=(product)=>{
  let cartData={
    title:product.title,
    description:product.description,
    image:product.image,
    price:product.price
  }

  fetch('http://localhost:8000/cart',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(cartData)
  })
  
}

return (
  <>
  <Banner/>
    <div className="d-flex flex-column justify-content-center align-items-center my-3">
      <h1 className='display-5 text-center fw-bold'>All Products</h1>
      <div className="divider bg-success"></div>
      </div>  
    <div className="container my-5">
    <div className="row flex-wrap">
        {products && products.map((product)=>(
          
          <div class="col-lg-4 my-2" >
          <div class="card" style={{width:'100%'}} >
  <img src={product.image} class="card-img-top" style={{height:'300px',objectFit:'cover',objectPosition:'top'}}/>
  <div class="card-body">
    <h5 class="card-title">{product.title}</h5>
    <p class="card-text" style={{height:'100px',overflow:'hidden'}}>{product.description}</p>
    <Link to={`/viewblog/${product.id}`} class="btn btn-success w-100 rounded-0" >View Product</Link>
    <button onClick={()=>{AddtoCart(product)}} class="btn btn-primary w-100 rounded-0 my-2">Add to Cart</button>
  </div>
</div>
</div>
        ))
        }
        
    </div>
    </div>
    </>
  )
}
