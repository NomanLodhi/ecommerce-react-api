import './App.css';
import { useEffect, useState } from 'react';
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
  const [cart,setCart]=useState('')
  useEffect(()=>{
    fetch('http://localhost:8000/cart')
    .then((res)=> res.json())
    .then((data)=> setCart(data))
  },[])
    
return (
    <>
    <Navbar count={cart.length}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='admin' element={<Adminhome/>}>
      <Route path='editproduct' element={<Adminedit/>}/>
      <Route path='editproduct/:productId' element={<Edit/>}/>
     
      <Route path='addproduct' element={<Adminadd/>}/>
      </Route>

      <Route path='seller' element={<Sellerhome/>}>
      <Route path='editproduct' element={<Selleredit/>}/>
      <Route path='editproduct/:productId' element={<Edit/>}/>
      <Route path='addproduct' element={<Selleradd/>}/>
    
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
