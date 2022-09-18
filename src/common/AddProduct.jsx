import React from "react";

// import ShopCart from "./ShopCart"
import ShopCart from "../components/shops/SellerAdd";
import "../components/shops/style.css";
import ModalDialog from "./PopUp";
import "bootstrap/dist/css/bootstrap.min.css";

const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex">
                <h2>Store Items</h2>
              </div>
              <div className="heading-right row ">
                <ModalDialog />

              
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
            <div className="product-content  grid1">
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
