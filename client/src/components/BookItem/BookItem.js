import { React } from 'react'
import {Link, useNavigate } from "react-router-dom";
import "./bookitem.css"
const BookItem = (props) => {

  const navigate = useNavigate();
  
  const handleDelete = async () => {
    const goodToGo = window.confirm("Do you want to delete a book ")
    console.log(goodToGo);
    if (!goodToGo) {
      navigate("/")
      window.location.reload();
    }
    else {
      const res = await fetch(`/${props.name}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status);
      if (res.status === 422) {
        console.log("book not deleted");
      }
      else {
        window.alert(" book deleted");
       // navigate("/")
        window.location.reload();
      }
    }
  }

  return (
    <>
      <div className="bookCardcontainer">
        <div className="bookCard">
          <img src={props.imageUrl} alt="book example img" />
          <p>{props.name}</p>
          <h4>{props.author}</h4>
          <p>{props.description}</p>
          <h4>{props.price}</h4>
          <div className="itemCardLinks">
            <Link to={`/updateBook/${props.name}`}>UPDATE</Link>
            <Link onClick={handleDelete} to={`/${props.name}`}>DELETE</Link>

          </div>
        </div>
      </div>

    </>
  )
}

export default BookItem