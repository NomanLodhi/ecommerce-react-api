import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Selleredit() {
    const [products,setProducts]=useState('');
    const [recall,setRecall]=useState(true)
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res=>res.json())
        .then(data=>setProducts(data) )
    },[recall])

    const Del=function(e){
     fetch(`http://localhost:8000/blogs/${e.id}`,{
        method:'DELETE'
     }).then(()=>{
        if(recall){
            setRecall(false)
        }
        else{
            setRecall(true)
        }
     })
    }
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
   <Link to={`${product.id}`} className='btn btn-success rounded-0'>Edit</Link>
    </td>
    <td>
   <button className='btn btn-danger rounded-0' onClick={()=>{Del(product)}}>Delete</button>
    </td>
</tr>
    ))}
            </tbody>
        </table>
    </div>
  )
}
