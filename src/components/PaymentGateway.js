import React from "react";
import "./css/paymentgateway.css";
import card from "./assets/images/card.svg";
import crypto from "./assets/images/cryptocurrency.svg";
import paypal from "./assets/images/paypal.svg";
import internet_banking from "./assets/images/internet_banking.svg";
import payment from "./assets/images/payment.png";
import { Link } from "react-router-dom";
const PaymentGateway = () => {
  return (
    <div className="Paymentgateway container">
      <section className="payment-section">
        <div className="payment-wrapper">
          
            <div className="col-md-8">
              <div className="payment-options">
                <div className="d-flex align-items-start">
                  <div
                    className="nav flex-column nav-pills me-3"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className="nav-link active"
                      id="v-pills-card-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-card"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-card"
                      aria-selected="true"
                    >
                      <img className="payment-img" src={card} alt="" />
                      Credit/Debit Card
                    </button>
                    <div className="separator"></div>
                    <button
                      className="nav-link"
                      id="v-pills-crypto-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-crypto"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-crypto"
                      aria-selected="false"
                    >
                      <img className="payment-img" src={crypto} alt="" />
                      Crypto Wallet
                    </button>
                    <div className="separator"></div>
                    <button
                      className="nav-link"
                      id="v-pills-paypal-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-paypal"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-paypal"
                      aria-selected="false"
                    >
                      <img className="payment-img" src={paypal} alt="" />
                      Paypal
                    </button>
                    <div className="separator"></div>
                    <button
                      className="nav-link"
                      id="v-pills-net-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-net"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-net"
                      aria-selected="false"
                    >
                      <img className="payment-img" src={internet_banking} alt="" />
                      Net Banking
                    </button>
                  </div>
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-card"
                      role="tabpanel"
                      aria-labelledby="v-pills-card-tab"
                    >
                      {/* <!-- Credit Card Details Form -->/ */}
                      <form action="">
                        <div className="card-payment-form ">
                          <div className="payment-header">
                            <div className="payment-title text-black">
                              Pay with Credit Card
                            </div>
                            <img
                              src={payment}
                              alt=""
                              className="payment-logos"
                            />
                          </div>
                          <div className="payment-body">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-input">
                                  <label htmlfor="cardNumber">Card Number</label>
                                  <input type="text" name="cardNumber" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-input">
                                  <label htmlfor="expiryDate">Expiry Date</label>
                                  <input type="text" name="expiryDate" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-input">
                                  <label htmlfor="cardName">Name on the Card</label>
                                  <input type="text" name="cardName" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-input">
                                  <label
                                    htmlfor="cvv"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Tooltip on right"
                                  >
                                    CVV
                                  </label>
                                  <input type="password" name="cvv" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-input form-submit">
                        <Link to='/after-payment'>

                          <input
                            type="submit"
                            value="Pay Now"
                            className="btn bg-brown text-white btn-fill"
                          />
                        </Link>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-crypto"
                      role="tabpanel"
                      aria-labelledby="v-pills-crypto-tab"
                    >
                      ...
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-paypal"
                      role="tabpanel"
                      aria-labelledby="v-pills-paypal-tab"
                    >
                      ...
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-net"
                      role="tabpanel"
                      aria-labelledby="v-pills-net-tab"
                    >
                      ...
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" cart_checkout  rounded">
            <div className="cart-total d-flex row justify-content-start  ">
              <div className="cart-header ">
                
                  Cart Total
               
              </div>
              <div className="cart-body  row  py-3">
              <div className="separator border"></div>
                {/* <!-- Cart Subtotal --> */}
                <div className="subtotal py-3 justify-content-between py-20 font-15 text-light  d-flex">
                  <div className="subtotal-title text-light">Subtotal</div>
                  <div className="subtotal-amount weight-900 text-light">$300</div>
                </div>

                <div className="separator border"></div>

                {/* <!-- Cart Discount --> */}
                <div className="discount py-3 justify-content-between py-20 font-15 text-light  d-flex">
                  <div className="discount-title text-light">Discount</div>
                  <div className="discount-amount weight-900 text-light">$30</div>
                </div>

                <div className="separator border  "></div>

                {/* <!-- Cart Total --> */}
                <div className="total py-3 justify-content-between py-20 font-15 text-light d-flex">
                  <div className="total-title text-black">Total</div>
                  <div className="total-amount weight-900 text-black">$270</div>
                </div>
              </div>

              
            </div>
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentGateway;
