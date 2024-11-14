import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'

export default function Adminedit() {
    const[products,setProducts]=useState('')
useEffect(()=>{
fetch(`http://localhost:8000/blogs`)
.then((res)=>res.json())
.then((data)=>setProducts(data))
},[])
  return (
    <div style={{height:'1000px',overflow:'scroll'}}  >
      <div className="row p-2 px-3">
            <>
            <div className="container">
              <table>
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
                <Link to={`edit/${product.id}`} className='btn btn-success rounded-0'>Edit</Link>
                </td>
                <td>
                <button className='btn btn-danger rounded-0 mx-2'>Delete</button>              
                </td>
                </tr>
            ))}
            </tbody>
              </table>
            </div>
            {/* <div className='col-lg-6'>
            <div className="card mb-3 p-3" style={{maxWidth: "540px",minHeight:'250px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={product.image} className="rounded-start" width={'150px'} height={'150px'}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 style={{fontSize:'15px'}}>{product.title}</h5>
        <p className="card-text">$ {product.price}</p>
        
        
      </div>
    </div>
  </div>
</div>
            </div> */}
           
            </>
      </div>

    </div>
  )
}
