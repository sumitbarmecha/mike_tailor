import React,{useEffect,useState} from "react";
import img1 from "./assets/images/products/1.png";
import { Link } from "react-router-dom";
import "./css/cartpage.css";
const CartPage = () => {
  const [orders, setorders] = useState([]);
  const storedJwt = sessionStorage.getItem("authToken");
  const [id, setId] = useState('')
  const URL = "http://localhost:4000";
  const users_orders = async (e) => {
    // e.preventDefault();
    // const storedJwt = sessionStorage.getItem("authToken");
    if (storedJwt === null) {
    
    } else {
      try {
        const res = await fetch(`${URL}/order/user`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authToken: `Bearer ${storedJwt}`,
          },
        });

        const data = await res.json();
        console.log(data.product)
        setorders(data);
      
   
      } catch (err) {
        console.log(err);
      }
    }
  };
  // const product = async (e) => {
  //   // e.preventDefault();
  //   // const storedJwt = sessionStorage.getItem("authToken");
  //   if (storedJwt === null) {
      
  //   } else {
  //     try {
  //       const res = await fetch(`${URL}/product/single/${id}`, {
  //         method: "GET",
  //         headers: {
  //           "content-type": "application/json",
  //           authToken: `Bearer ${storedJwt}`,
  //         },
  //       });

  //       const data = await res.json();
  //       setorders(data);
   
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // };
  useEffect(() => {

    window.scrollTo(0, 0);
    users_orders();
  }, []);
  const style = {
    boxShadow: "-1px -1px 0 0.25rem #2a6cc900",
  };
  console.log(orders)
  return (
    <div className="CartPage">
      {" "}
      <div className="container  ">
        <h3 className="my_cart">My Cart</h3>
        <div className="cart-container">
          <div className="cart_products margin-bottom-cart">
          {orders.map((e) => {
            return (
              <div key={e.code}>
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
              <div className="cart-product--id text-dark font-15"><strong>{e.code}</strong> </div>
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

            <div className="product-price font-15 text-dark fw-bolder p-20">{e.price}</div>

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
           
            </div>
            );
          })}
          </div>
          <div className="col-md-4 cart_checkout border rounded">
            <div className="cart-total d-flex row  justify-content-center  ">
              <div className="cart-header d-flex align-middle">
                <div className="cart-title title-secondary ">
                  Cart Total
                </div>
              </div>

              <div className="cart-body d-flex row justify-content-center">
              <hr/>
                {/* <!-- Cart Subtotal --> */}
                <div className="subtotal justify-content-between p-20 font-15 text-light  d-flex">
                  <div className="subtotal-title text-light">Subtotal</div>
                  <div className="subtotal-amount text-light">$300</div>
                </div>

                <hr/>

                {/* <!-- Cart Discount --> */}
                <div className="discount justify-content-between p-20 font-15 text-light  d-flex">
                  <div className="discount-title text-light">Discount</div>
                  <div className="discount-amount text-light">$30</div>
                </div>

                <hr />

                {/* <!-- Cart Total --> */}
                <div className="total justify-content-between p-20 font-15 text-light d-flex">
                  <div className="total-title text-black">Total</div>
                  <div className="total-amount text-black">$270</div>
                </div>
              </div>

              <div className="cart-footer d-flex justify-content-center row">
                <hr/>

                <div className="info-text p-20 font-10 text-start ">
                  *Minimum Cart Value must be US$150 to checkout
                </div>

                <Link to={'/checkout'} className="font-15 bg-brown text-white checkout-btn btn btn-fill">Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
