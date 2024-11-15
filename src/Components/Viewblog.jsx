import React, { useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Viewblog() {
    const[blog,setBlog]=useState("");
    let nav=useNavigate()
    const {productId}=useParams()
   
useEffect(()=>{
fetch(`http://localhost:8000/blogs/${productId}`)
.then((res)=> {
 return res.json()
}
)
.then((data)=>{
  console.log(data)
  setBlog(data)})
  .catch((error)=>console.log(error))

},[])

let AddtoCart=function(e){
  fetch('http://localhost:8000/cart',{
    method:'POST',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({
     title: e.title,
     image:e.image,
     description:e.description,
     price:e.price
    }
    )
  })
  nav('/cart')
}

  return (
    <div  className='py-5'>

      <div className="card container p-5">
        <div className="row">
          <div className="col-lg-4">
      <img src={blog.image} alt="" width={'100%'} />
          </div>
<div className="col-lg-8 pt-5">
       <h1 className='fw-bold pb-2'>{blog.title}</h1>
      <p style={{textAlign:'justify',lineHeight:'30px'}}>{blog.description}</p>
      <button className='btn btn-success float-end rounded-0' onClick={()=>{AddtoCart(blog)}}>Add to Cart</button>
</div>


        </div>
      {console.log(blog)}
      </div>
    </div>
  )
}
