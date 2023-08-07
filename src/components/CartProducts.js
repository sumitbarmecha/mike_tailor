import React,{useEffect} from "react";

import img1 from "./assets/images/products/1.png";

const CartProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const style = {
        boxShadow: "-1px -1px 0 0.25rem #2a6cc900",
      };
  return (
    <div className="CartProduct">
      <li className="cart-item rounded font-10   border d-flex justify-content-between ">
        {/* <!-- Product Details --> */}
        <div className="cart-product  d-flex justify-content-between ">
          <div className="cart-product--info d-flex justify-content-between ">
            {/* <!-- Product Image --> */}
            <div className="cart-product--image">
              <img className="rounded p-2" src={img1} alt="" />
            </div>

            <div className="cart-product--details">
              {/* <!-- Product ID --> */}
              <div className="cart-product--id text-dark font-15"><strong>188-33</strong> </div>
              {/*  */}
              {/* <!-- Prdouct Title --> */}
              <div className="cart-product--title text-light">
                Blmers Luini Linen<span> | </span>
                <span className="cart-product--variation font-10">Dark Grey</span>
              </div>

              {/* <!-- Product View Customizations | Edit Measurements --> */}
              <div className="font-10 cart-product--cta">
                <a
                  href="/"
                  id="customization-btn"
                  className="text-brown"
                >
                  View Customizations
                </a>
                <span> | </span>
                <a href="/" className="text-brown">
                  Edit Measurements
                </a>
              </div>
            </div>
          </div>

          <div className="cart-product--quantity d-flex justify-content-between ">
     
            <div className="summary-footer  rounded d-flex col justify-content-center text-dark ">
              <div className="quantity d-flex col justify-content-center p-2">
                
              <div className="qty-input">
                  <button
                    className="qty-count qty-count--minus"
                    data-action="minus"
                    type="button"
                  >
                    -
                  </button>
                  <input
                    className="product-qty"
                    type="number"
                    name="product-qty"
                    min="0"
                    max="10"
                    defaultValue="1"
                  />
                  <button
                    className="qty-count qty-count--add"
                    data-action="add"
                    type="button"
                  >
                    +
                  </button>
                </div>
              </div>
              
            </div>

            <div className="product-price font-15 text-dark fw-bolder p-20">$552</div>

            <div className="closebutton">
                    <button
                      type="button"
                      className="btn-close"
                      style={style}
                      data-bs-dismiss="CartProduct"
                      aria-label="Close"
                    ></button>
                  </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CartProducts;
