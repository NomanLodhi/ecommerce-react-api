import React from 'react'
import errimg from '../media/error404.png'
import { Link } from 'react-router-dom'

export default function Pagenotfound() {
  return (
    <div style={{height:'1000px'}} className='bg-warning d-flex flex-column align-items-center'>
      <img src={errimg} alt="" className='w-75 h-75'/>
      <Link to={'/'} className='btn btn-success rounded-0 btn-lg'>Back To Website</Link>
    </div>
  )
}
