import React, { useState } from 'react'

import { Outlet, Link, redirect } from "react-router-dom";
import "./navbar.css"
const Navbar = () => {
const [seachBook,setseachBook]=useState("");
let value;
const handleSeachBookChange=(e)=>{
    value=e.target.value;
    setseachBook(value)
}
const handleChange=()=>{
    setseachBook("")
}
    return (
        <>
            <nav className='navbar'>
                <div className="nav_container">
                    <Link className="logo" to="/">BOOKSHOP</Link>
                    <div className="nav_right_Side">
                        <ul className='nav_list'>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addProducts">ADD BOOK</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Books">BOOKS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutUs">ABOUT US</Link>
                            </li>
                        </ul>
                        <form className="nav_form" >
                            <input onChange={handleSeachBookChange} name='searchedBook' value={seachBook} className="nav_search" type="text" placeholder="Search" aria-label="Search" />
                            <Link onClick={handleChange} to={`/searchBook/${seachBook}`} className="nav_search_btn" type="submit">Search</Link>
                        </form>
                    </div>


                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default Navbar