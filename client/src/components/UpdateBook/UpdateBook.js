
import React, { useState } from 'react'
import updateBook_img from "../../img/updateBook_img.jfif"
import {useNavigate, useParams} from "react-router-dom";

const UpdateBook = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const [bookData, setBookData] = useState({
    author: "", description: "", price: "", imageUrl: ""
  })

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setBookData({ ...bookData, [name]: value });
  }
  const updateBook = async (e) => {
    e.preventDefault();
    const { author, description, price, imageUrl } = bookData;

    const res = await fetch(`/updateBook/${params.nm}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        author, description, price, imageUrl
      })
    });

    console.log(res.status);
    if (res.status === 422) {
      window.alert("book not updated!! Fill all the details")
      console.log("book not updated");
    }
    else {
      window.alert(" book updated")
      console.log(" book updated");
      navigate("/")
    }

  }
  return (
    <>
      <div className="addProduct_container">
        <div className="addproduct_card">
          <img className='sideImg' src={updateBook_img} alt="" />
          <form onSubmit={updateBook} className='addProductForm'  >

            <div className="eachInput_form">
              <label htmlFor ="nameInput" className="form-label">Name</label>
              < input onChange={handleInputs} type="text" className="form-control" id="nameInput" name='name' value={params.nm} disabled />
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
              <input className='form_btn' type="submit" value="UPDATE BOOK" />
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default UpdateBook