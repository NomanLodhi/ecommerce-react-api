import React, { useEffect, useState } from 'react'

export default function Selleredit() {
    const [products,setProducts]=useState('');
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res=>res.json())
        .then(data=>setProducts(data) )
    },[])
  return (
    <div style={{height:'1000px', overflow:'scroll'}}>
        
        <table>
            <tbody>
      {products && products.map((product)=>(
<tr>
    <td>
        <img src={product.image} alt="" width={50} height={50} />
    </td>
    <td>
    {product.title}
    </td>
    <td>
    $ {product.price}
    </td>
    <td>
   <button className='btn btn-success rounded-0'>Edit</button>
    </td>
    <td>
   <button className='btn btn-danger rounded-0'>Delete</button>
    </td>
</tr>
    ))}
            </tbody>
        </table>
    </div>
  )
}
