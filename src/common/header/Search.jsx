import React, { useEffect, useState } from "react";
import logo from "../../components/assets/images/logo1.jpg";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Search = ({ CartItem }) => {
  // fixed Header

  const [login,setLogin]=useState(false)
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });
  useEffect(()=>{
    const status=localStorage.getItem('login');
    if(status=="true"){
      setLogin(true)
    }
  })

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <img src={logo} alt="" />
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>
{}
          <div className="icon f_flex width">
            {!login &&
              <div className="loginChip">
              <Link to="/login" className="linkEdit">
              <Button variant="outlined">Login</Button>
                {/* <i className="fa fa-user icon-circle"></i> */}
              </Link>
             
            </div>
            }
            {login &&
               <div className="loginChip">
               <Link to="/login" className="linkEdit">
               <Button variant="outlined">Logout</Button>
                 {/* <i className="fa fa-user icon-circle"></i> */}
               </Link>
              
             </div>
            }

            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
