import React, { useEffect, useState } from "react";
import logo from "../../components/assets/images/logo1.jpg";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Search = ({ CartItem }) => {
  const navigate=useNavigate();
  // fixed Header
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
      userId: localStorage.getItem("id"),
    },
  };

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
const logout=()=>{
  axios
      .post(
        "http://localhost:8000/users/logout",
        {
          
        },
        config
      )
      .then((response) => {
        setLogin(false)
        localStorage.setItem('login',false)
        navigate('/')
        
      });

}
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
               <Button variant="outlined" onClick={logout}>Logout</Button>
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
