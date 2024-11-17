import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Adminhome() {
    document.title='Admin - Dashboard'


  return (
    <div style={{height:'1000px',overflow:'hidden'}}>
     <div className="d-flex">
      <div className="w-25">
      <ul class="list-group">
  <Link to={'editproduct'} class="list-group-item rounded-0">Edit Products</Link>
  <Link to={'addproduct'} class="list-group-item rounded-0">Add Product</Link>
  
</ul>
      </div>
      <div className="w-75">
        <Outlet/>
      </div>
     </div>
    </div>
  )
}
