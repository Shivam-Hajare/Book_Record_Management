import React, { useEffect, useState } from 'react'
import BookItem from '../BookItem/BookItem'

import { useParams } from "react-router-dom";
const SeachBook = () => {
  var data = ""
  const params = useParams();
  const [bookitemState, setBookitemState] = useState({})
  const callShowBookPage = async () => {
    try {
      const res = await fetch(`/searchBook/${params.nm}`);
      data = await res.json();
      console.log(data.data);
      setBookitemState(data.data);
      console.log(bookitemState);
      if (!res.status === 200) {
        const err = new Error(res.err)
        throw err;
      }
    } catch (err) {
      console.log("aloo");
    }
  }
  useEffect(() => {
    // 
    callShowBookPage();
  }, [])
  return (
    <div className="showAllBooks">
       <BookItem
        name={bookitemState.name}
        author={bookitemState.author}
        description={bookitemState.description}
        price={bookitemState.price}
        imageUrl={bookitemState.imageUrl}
      />
    </div>
  )
}

export default SeachBook