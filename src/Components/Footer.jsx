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
<footer className='container-fluid bg-success pt-5 text-light'>
<div className="container py-3">
  <h1 className="text-center text-warning font-pacifico">MyCart</h1>
  <div className="d-flex align-items-center my-5 justify-content-center ">
    <a href="" className='d-flex mx-3 align-items-center text-decoration-none justify-content-center bg-light text-success rounded-circle  fs-3' style={{width:'50px',height:'50px'}}><i class="fa-brands fa-facebook"></i></a>
    <a href="" className='d-flex mx-3 align-items-center text-decoration-none justify-content-center bg-light text-success rounded-circle  fs-3' style={{width:'50px',height:'50px'}}><i class="fa-brands fa-instagram"></i></a>
    <a href="" className='d-flex mx-3 align-items-center text-decoration-none justify-content-center bg-light text-success rounded-circle  fs-3' style={{width:'50px',height:'50px'}}><i class="fa-brands fa-twitter"></i></a>
  </div>
</div>
<p className='text-center m-0 py-2' style={{fontSize:'15px'}}>All Copyright Reserved &copy; By <span className='font-pacifico text-warning'>MyCart</span></p>
</footer>
    </>

  )
}
