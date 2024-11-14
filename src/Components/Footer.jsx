import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='container-fluid bg-news py-5'>
        <div className="container d-flex flex-column align-items-center justify-content-center">
            <h1 className='text-light text-center'>Newsletter:</h1>
           <div>
           <input type="text" className='my-2 p-2 w-input' placeholder='Subscribe To Our Newsletter' />
           <button className='btn btn-success rounded-0 h-auto p-2' style={{paddingTop:'12px'}}>
           <i class="fa-regular fa-paper-plane"></i>
           </button>
           </div>
        </div>
      
    </div>
<footer className='container-fluid bg-success py-5 text-light'>
<div className="container py-3"></div>
</footer>
    </>

  )
}
