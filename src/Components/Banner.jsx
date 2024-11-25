import React from 'react'

export default function banner() {
  return (
    <div className='container py-3'>
      <div className="row h-banner mb-5">
        <div className="col-lg-4">
            <div className="bg-men my-2  w-100 rounded-3 d-flex flex-column justify-content-end text-light px-3">
                <h5 className='display-6'>Men</h5>
                <p>Best Men Clothing collection</p>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="bg-electronic my-2   w-100 rounded-3 d-flex flex-column justify-content-end text-light px-3">
                <h5 className='display-6'>Electronics</h5>
                <p>Best Electronic Items collection</p>
            </div>
            <div className="bg-jewelry w-100 my-2 rounded-3 d-flex flex-column justify-content-end text-light px-3">
                <h5 className='display-6'>Jewelry</h5>
                <p>Best Jewelry collection</p>
            </div>
           
        </div>
        <div className="col-lg-4">
            <div className="bg-women w-100 rounded-3 my-2 d-flex flex-column justify-content-end text-light px-3">
                <h5 className='display-6'>Women</h5>
                <p>Best Women Clothing collection</p>
            </div>
           
        </div>
      </div>
      <div className="row my-5 py-4 border border-secondary">
        <div className="col-lg-3 col-md-6 text-secondary">
            <div className="d-flex">
            <i class="fa-solid fa-dollar-sign fs-2 mx-3"></i>
            <p className='fs-5'>Cash On Delivery</p>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 text-secondary">
            <div className="d-flex">
            <i class="fa-solid fa-arrow-rotate-left fs-2 mx-3"></i>
            <p className='fs-5'>30 Days Return</p>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 text-secondary">
            <div className="d-flex">
            <i class="fa-solid fa-truck fs-2 mx-3"></i>
            <p className='fs-5'>Free Shipping</p>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 text-secondary">
            <div className="d-flex">
            <i class="fa-solid fa-hand-point-right fs-2 mx-3"></i>
            <p className='fs-5'>100% Original</p>
            </div>
        </div>
      </div>
    </div>
  )
}
