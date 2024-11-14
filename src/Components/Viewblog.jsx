import React, { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';

export default function Viewblog() {
    const[blog,setBlog]=useState("");
    
    const {productId}=useParams()
   
useEffect(()=>{
fetch(`http://localhost:8000/blogs/${productId}`)
.then((res)=> {
 return res.json()
}
)
.then((data)=>{
  console.log(data)
  setBlog(data)})
  .catch((error)=>console.log(error))

},[])

  return (
    <div>
      
      <img src={blog.image} alt="" />
      <p>{blog.description}</p>
      {console.log(blog)}
    </div>
  )
}
