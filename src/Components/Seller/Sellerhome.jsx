
import { Link, Outlet } from 'react-router-dom';
export default function Sellerhome() {
document.title='Seller - Dashboard'
  return (
    <div style={{height:'1000px'}}>
     <div className="d-flex">
      <div className="w-25">
      <ul class="list-group rounded-0">
  <Link class="list-group-item" to={'editproduct'}>Edit Product</Link>
  <Link class="list-group-item" to={'addproduct'}>Add Product</Link>

</ul>
      </div>
      <div className="w-75">
        <Outlet/>
      </div>
     </div>
    </div>
  )
}
