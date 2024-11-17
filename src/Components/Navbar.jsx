
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  
  return (
   <>
   <nav>
    <marquee behavior="" direction="left" className="bg-success text-light py-1 " >Let's explore latest brands accessories</marquee>
   </nav>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand font-pacifico text-success fs-3" href="#" >MyCart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item mx-3">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link active" aria-current="page" to="admin">Admin</Link>
        </li>
        <li className="nav-item mx-3">
          <Link className="nav-link active" aria-current="page" to="seller">Seller</Link>
        </li>
      </ul>

<Link class="btn btn-warning rounded-0 position-relative" to={'cart'}>
<i class="fa-solid fa-cart-shopping fs-4 text-light"></i>
<span class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span class="text-light">{props.count}</span></span>
</Link>
        
       
    </div>
  </div>
</nav>

   </>
  )
}
