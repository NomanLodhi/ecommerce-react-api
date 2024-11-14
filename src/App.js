import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Sellerhome from './Components/Seller/Sellerhome';
import Adminhome from './Components/Admin/Adminhome';
import Viewblog from './Components/Viewblog'
import { Route, Routes } from 'react-router-dom';
import Adminedit from './Components/Admin/Adminedit';
import Pagenotfound from './Components/Pagenotfound';
import Edit from './Components/Edit';
import Adminadd from './Components/Admin/Adminadd';
import Cart from './Components/Cart';
import Selleredit from './Components/Seller/Selleredit';
import Selleradd from './Components/Seller/Selleradd';


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='admin' element={<Adminhome/>}>
      <Route path='admin/editproduct' element={<Adminedit/>}/>
      <Route path='admin/addproduct' element={<Adminadd/>}/>
      </Route>
      <Route path='edit/:productId' element={<Edit/>}/>
      <Route path='seller' element={<Sellerhome/>}>
      <Route path='seller/editproduct' element={<Selleredit/>}/>
      <Route path='seller/addproduct' element={<Selleradd/>}/>
      </Route>
      <Route path='viewblog/:productId' element={<Viewblog/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='*' element={<Pagenotfound/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
