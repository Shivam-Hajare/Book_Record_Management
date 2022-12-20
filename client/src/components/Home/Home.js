
import React, { useEffect, useState } from 'react'
import BookItem from '../BookItem/BookItem'
import ShowBooks from '../ShowBooks/ShowBooks'
import axios from 'axios'
import "./home.css"
const Home = () => {

    const axiosGetCall = async () => {
        try {
          const { data } = await axios.get('/')
// enter you logic when the fetch is successful
        //   console.log(`data: `, data)
       
        } catch (error) {
// enter your logic for when there is an error (ex. error toast)
          console.log(`error: `, error)
        }
      }


    useEffect(()=>{
        // const temp = async()=>{
        //     const res= await fetch('/');
        //     // const data=res.json()
        //     const d=JSON.stringify(res)
        //     console.log(JSON.parse(d));
            
        // }
        // temp();
        axiosGetCall()

    },[])
    return (
        <>
            <div className="home_banner">
                <h1 className='h1_home'>"A book is a gift you can open again and again."</h1>
            </div>
            <div className="bookites">
                <ShowBooks/>
            </div>
        </>
    )
}

export default Home