
import React, { useEffect, useState } from 'react'
import BookItem from '../BookItem/BookItem'
import "./showBooks.css"
const ShowBooks = props => {
  const [bookitemState,setBookitemState]=useState([])
    const callShowBookPage = async () => {
        try {
            const res = await fetch("/books");
            const data = await res.json();
            // console.log(data.data);
             setBookitemState(data.data);
            if (!res.status === 200) {
                const err = new Error(res.err)
                throw err;
            }
        } catch (err) {
            console.log("aloo");
        }
   }
    useEffect(()=>{
        // 
        callShowBookPage();
    },[])
  return (
    <>
    <div className="showAllBooks">
    {bookitemState.map((eachBook,index)=>{
                    return <BookItem
                    key={index}
                    id={eachBook._id}
                    name={eachBook.name}
                    author={eachBook.author}
                    description={eachBook.description}
                    price={eachBook.price}
                    imageUrl={eachBook.imageUrl}
                     />
                })}
    </div>
    </>
  )
}

ShowBooks.propTypes = {}

export default ShowBooks