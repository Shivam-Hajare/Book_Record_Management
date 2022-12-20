
import { Routes, Route } from "react-router-dom";
import './App.css';
import Addproduct from "./components/Add_product/Add_product";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import UpdateBook from "./components/UpdateBook/UpdateBook";
import ShowBooks from "./components/ShowBooks/ShowBooks";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import SearchBook from "./components/SearchBook/SearchBook";
function App() {
  return (

    <>
      <Routes>
        {/* <Route path="/" element={<Navbar />} />
      <Route path="/addProducts" element={<Addproduct />} /> */}
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/:nm" element={<Home />} />
          <Route path="/addProducts" element={<Addproduct />} />
          <Route path='/updateBook/:nm' element={<UpdateBook />} />
          <Route path='/searchBook/:nm' element={<SearchBook />} />
          <Route path="/Books" element={<ShowBooks />} />
          <Route path="/aboutUs" element={<UpdateBook />} />
        </Route>
        <Route>
          <Route path='*' element={<ErrorPage />} />
        </Route>

      </Routes>
    </>
  )
}

export default App;
