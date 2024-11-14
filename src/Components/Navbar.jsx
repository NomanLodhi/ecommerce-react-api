
import { Link } from 'react-router-dom'

export default function Navbar() {
  
  return (
   <>
   <nav>
    <marquee behavior="" direction="left" className="bg-success text-light py-1 " >Let's explore latest brands accessories</marquee>
   </nav>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
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

<Link class="btn btn-warning rounded-0" to={'cart'}>
<i class="fa-solid fa-cart-shopping fs-4 text-light"></i>
</Link>
        
       
    </div>
  </div>
</nav>

   </>
  )
}
