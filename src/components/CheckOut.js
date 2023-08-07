import React,{useEffect} from "react";

import { Link } from "react-router-dom";
import "./css/checkout.css";
import OrderItem from "./OrderItem";
const CheckOut = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="CheckOut container">
      <h3 className="checkout_header ">Checkout</h3>
      <div className="checkout-content">
        <div className="checkout-wrapper">
          {/* <!-- Checkout Form --> */}
          <form className="w-100" action="">
            <div className="row d-flex justify-conten-between">
              <div className="col-md-8 my-2">
                {/* <!-- Checkout Form  --> */}
                <div className="checkout-form border rounded">
                  <div className="title title-secondary weight-900 p-20">
                    Billing Address
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-input d-flex row">
                        <label htmlfor="firstName" className="title">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="bg-white   checkout_input"
                          name="firstName"
                          id="firstName"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-input d-flex row">
                        <label htmlfor="lastName" className="title">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="bg-white border-0 checkout_input"
                          name="lastName"
                          id="lastName"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-input d-flex row">
                        <label htmlfor="email" className="title">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="bg-white border-0 checkout_input"
                          id="email"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-6"></div>

                    <div className="col-md-6">
                      <div className="form-input d-flex row">
                        <label htmlfor="address1" className="title">
                          Street Address Line 1
                        </label>    
                        <input
                          type="text"
                          className="bg-white border-0 checkout_input"
                          name="address1"
                          id="address1"
                        />
                      </div>
                    </div>

                    <div className="col-md-6"></div>

                    <div className="col-md-6">
                      <div className="form-input d-flex row">
                        <label htmlfor="address2" className="title">
                          Street Address Line 2
                        </label>
                        <input
                          type="text"
                          className="bg-white border-0 checkout_input"
                          name="address2"
                          id="address2"
                        />
                      </div>
                    </div>

                    <div className="col-md-6"></div>

                    <div className="col-md-6">
                      <div className="form-input d-flex row">
                        <label htmlfor="state" className="title">
                          State/Province
                        </label>
                        <input
                          type="text"
                          className="bg-white border-0 checkout_input"
                          name="state"
                          id="state"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-input d-flex row">
                        <label htmlfor="city" className="title">
                          City
                        </label>
                        <input
                          type="text"
                          className="bg-white border-0 checkout_input"
                          name="city"
                          id="city"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-input d-flex row">
                        <label htmlfor="zipcode" className="title">
                          Zip/Postal Code
                        </label>
                        <input
                          type="text"
                          className="bg-white border-0 checkout_input"
                          name="zipcode"
                          id="zipcode"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-input d-flex row">
                        <label htmlfor="phone" className="title">
                          Phone
                        </label>
                        <input
                          type="text"
                          className="bg-white border-0 checkout_input"
                          name="phone"
                          id="phone"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-input checkbox">
                        <input
                          type="checkbox"
                          name="shippingAddress"
                          id="shippingAddress"
                        />
                        <label htmlfor="shippingAddress" className="title">
                          My billing and shipping address are the same
                        </label>
                      </div>
                    </div>

                    <div className="col-md-12 ">
                      <div className="form-input  checkbox">
                        <input
                          type="checkbox"
                          name="createAccount"
                          id="createAccount"
                        />
                        <label htmlfor="createAccount" className="title">
                          Create an account for later use
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 ">
                <div className="order-review border rounded my-2 " id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                      <button
                        className="text-brown  accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#panelsStayOpen-collapseOne"
                        aria-expanded="true"
                        aria-controls="#panelsStayOpen-collapseOne"
                      >
                        <div className="button-text">
                          <div className="title-secondary text-black weight-900">
                            Order Review
                          </div>

                          {/* <!-- Cart Item Count --> */}
                          <div className="cart-count text-brown   ">
                            3 items in cart
                          </div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="panelsStayOpen-collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="panelsStayOpen-headingOne"
                    >
                      <div className="accordion-body">
                        <ul className="order-list">
                          {/* <!-- List Item 1 --> */}
                          <OrderItem/>
                          <OrderItem/>
                          <OrderItem/>

                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cart-total border d-flex row rounded my-3 ">
                  <div className="cart-header d-flex row">
                    <div className="cart-title p-20 font-20 weight-900 title-secondary text-center">
                      Cart Total
                    </div>

                    <div className="separator"></div>
                  </div>

                  <div className="cart-body">
                    {/* <!-- Cart Subtotal --> */}
                    <div className="subtotal cart-body-div p-20 font-15 d-flex justify-content-between  ">
                      <div className="subtotal-title text-light">Subtotal</div>
                      <div className="subtotal-amount text-light">$300</div>
                    </div>

                    <div className="separator"></div>

                    {/* <!-- Cart Discount --> */}
                    <div className="discount cart-body-div p-20 font-15 d-flex justify-content-between  ">
                      <div className="discount-title text-light">Discount</div>
                      <div className="discount-amount text-light">$30</div>
                    </div>

                    <div className="separator"></div>

                    {/* <!-- Cart Total --> */}
                    <div className="tota cart-body-div p-20 font-15 d-flex justify-content-between ">
                      <div className="total-title text-black">Total</div>
                      <div className="total-amount text-black">$270</div>
                    </div>
                  </div>

                  <div className="cart-footer">
                    <div className="col-md-12">
                      <div className="form-input bg-brown rounded p-1  d-flex row">
                      <Link className="proceed-to-payment-button" to={'/payment-gateway'}>

                        <input
                          type="submit"
                          name="createAccount"
                          value="Proceed to Payment"
                          className=" checkout-btn text-white font-15 btn btn-fill"
                        />
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
