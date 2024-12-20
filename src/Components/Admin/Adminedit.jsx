import React, { useEffect, useState } from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'

export default function Adminedit() {
  let nav=useNavigate()
  let {productId}=useParams()
    const[products,setProducts]=useState('')
    const [recall,Setrecall]=useState(true) 
    useEffect(()=>{
fetch(`http://localhost:8000/blogs`)
.then((res)=>res.json())
.then((data)=>setProducts(data))
},[recall])
 
let Del=function(e){
  fetch(`http://localhost:8000/blogs/${e.id}`,{
    method:'DELETE'
  }).then(()=>{
if(recall){
  Setrecall(false)
}
else{
  Setrecall(true)
}
  })
}

  return (
    <div style={{height:'1000px',overflow:'scroll'}}  >
      <div className="row p-2 px-3">
            <>
            
              <table className='container-fluid'>
                {/* <thead>
                <th>
                  <td>Product Image:</td>
                  <td>Product Title:</td>
                  <td>Product Price:</td>
                  <td>Edit Product:</td>
                  <td>Delete Product:</td>
                </th>
                </thead> */}
                <tbody>
              {products && products.map((product)=>(
                <tr>
                  <td>
                    <img src={product.image} alt="" width={"50px"} height={"50px"} />
                  </td>
                <td>
                {product.title}                
                </td>
                <td>
               $ {product.price}                
                </td>
                <td>
                <Link to={`${product.id}`} className='btn btn-success rounded-0'>Edit</Link>
                
                </td>
                <td>
                <button className='btn btn-danger rounded-0 mx-2' onClick={()=>{Del(product)}}>Delete</button>              
                </td>
                </tr>
            ))}
            </tbody>
              </table>
            
            
           
            </>
      </div>

    </div>
  )
}
