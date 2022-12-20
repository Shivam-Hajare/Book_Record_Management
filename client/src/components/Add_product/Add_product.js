import React, { useState } from 'react'
import { Outlet,NavLink,useNavigate  } from "react-router-dom";
import "./add_product.css"
import addBook_img from "../../img/addBook_img.jfif"
const Add_product = () => {
  const navigate = useNavigate();
  const [bookData,setBookData]=useState({
    name:"", author:"", description:"",price:"", imageUrl:""})
    
    let name,value;
    const handleInputs =(e)=>{
     name=e.target.name;
     value=e.target.value;
     setBookData({...bookData,[name]:value});
    }
    const addBook =async(e)=>{
      await e.preventDefault();
      
      const { name, author, description, price, imageUrl}=bookData;
    
      const res = await fetch("/addProducts",{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          name, author, description, price, imageUrl
        })
      });
      
      const data = await res.json();
      console.log(data.message);
      if(data.status=== 422 || !data)
      {
        window.alert("book already exist")
        console.log("book already exist");
      }
      else{
        
        window.alert(" successful stored db")
        console.log(" successful stored db");
        navigate("/")
      }
    
    }
  return (
    <>
      <div className="addProduct_container">
        <div className="addproduct_card">
          <img className='sideImg' src={addBook_img} alt="" />
        <form onSubmit={addBook} className='addProductForm'  >
          <div className="eachInput_form">
            <label htmlFor ="nameInput" className="form-label">Name</label>
            < input onChange={handleInputs} type="text" className="form-control" id="nameInput" name='name' value={bookData.name} />
          </div>
          <div className="eachInput_form">
            <label htmlFor ="Author" className="form-label">Author</label>
            < input onChange={handleInputs} type="text" className="form-control" id="Author" name='author' value={bookData.author} />
          </div>
          <div className="eachInput_form">
            <label htmlFor ="Description" className="form-label">Description</label>
            < input onChange={handleInputs} type="text" className="form-control" id="Description" name='description' value={bookData.description} />
          </div>
          <div className="eachInput_form">
            <label htmlFor ="price" className="form-label">Price</label>
            < input onChange={handleInputs} type="number" className="form-control" id="price" name='price' value={bookData.price} />
          </div>
          <div className="eachInput_form">
            <label htmlFor ="Image" className="form-label">imageUrl</label>
            < input onChange={handleInputs} type="text" className="form-control" id="Image" name='imageUrl' value={bookData.imageUrl} />
          </div>
          <div className="eachInput_form ">
            <input className='form_btn' type="submit" value="ADD BOOK" />
          </div>
        </form>
        </div>
        
      </div>
    </>
  )
}

export default Add_product