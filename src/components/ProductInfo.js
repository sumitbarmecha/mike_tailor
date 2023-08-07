import React, { useEffect, useState } from "react";
import "./css/productinfo.css";
import "./css/home.css";
import { useLocation } from "react-router-dom";
// import lapel from './assets/images/products/JACKET%20LAPEL%20TYPE1-%20NOTCH-12.jpg'
import lapel from "./assets/images/products/JACKET LAPEL TYPE 2-PEAK-12.jpg";
import lapel2 from "./assets/images/products/JACKET NO OF BUTTONS- DOUBLE BREASTED 6 ON 2-12.jpg";
const ProductInfo = (props) => {
  const location = useLocation();
  const state = location.state;
  const storedJwt = sessionStorage.getItem("authToken");
  const [address, setAddress] = useState();
  const [details, setDetails] = useState();
  const user_address = async (e) => {
    // e.preventDefault();
    // const storedJwt = sessionStorage.getItem("authToken");
    if (storedJwt === null) {
      return console.log("not logged in");
    } else {
      try {
        const res = await fetch(`${URL}/address/addresses`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authToken: `Bearer ${storedJwt}`,
          },
        });

        const data = await res.json();
        setAddress(data[0]._id);

        if (data === "") {
          console.log("didnt get the address");
        } 
      } catch (err) {
        console.log(err);
      }
    }
  };
  const user_details = async (e) => {
    // e.preventDefault();
    // const storedJwt = sessionStorage.getItem("authToken");
    if (storedJwt === null) {
      return alert("not logged in");
    } else {
      try {
        const res = await fetch(`${URL}/user/getuser`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authToken: `Bearer ${storedJwt}`,
          },
        });

        const data = await res.json();
        
        const phone = data.phone;
console.log(phone)
        setDetails(phone);

        if (data === "") {
          console.log("didnt get the user details");
        } 
      } catch (err) {
        console.log(err);
      }
    }
  };

  const URL = "http://localhost:4000";
  const style = {
    boxShadow: "-1px -1px 0 0.25rem #2a6cc900",
  };
  useEffect(() => {
    window.scrollTo(0, 0);

    user_address();
    user_details();
  }, []);
  console.log(details,address)
  const [newOrder, setNewOrder] = useState({
    category: state.category,
    subCategory: "shirts",
    product: state._id,
    customizations: [],
    measurements: [],
    address:'62f15168da4ad6d824d71c44',
    phone:8805945343,
  });
  console.log(newOrder);
  const add_order = async () => {
    // e.preventDefault();
    const {
      category,
      subCategory,
      product,
      customizations,
      measurements,
      address,
      phone,
    } = newOrder;

    if (storedJwt === null) {
      return alert("not logged in");
    } else {
      try {
        const res = await fetch(`${URL}/order/create`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authToken: `Bearer ${storedJwt}`,
          },
          body: JSON.stringify({
            category,
            subCategory,
            product,
            customizations,
            measurements,
            address,
            phone,
          }),
        });

        const data = await res.json();
        console.log(data);
        setNewOrder({
          ...newOrder,
          category: newOrder.category,
          subCategory: newOrder.subCategory,
          product: newOrder.product,
          customizations: newOrder.customizations,
          measurements: newOrder.measurements,
          address: newOrder.address,
          phone: newOrder.phone,
        });
        if (data === "") {
          console.log("not added to cart");
        } else {
          alert("product added to cart");
        }
      } catch (err) {
        console.log(err);
        alert("error while request");
      }
    }
  };

  return (
    <div className="ProductInfo  container">
      <div className="box1 mx-4">
        <img className="rounded" src={state.img} alt="" />
        <div className="product_desc ">
          <div className="single-product-info">
            <div className="m-0 font-20 product_code">{state.code}</div>
            <hr />
            <div className="m-0 font-20 product_name">{state.category}</div>
            <hr />
            <div className="m-0 font-20  product_cost">${state.price}</div>
          </div>
          <div className="m-0 product_options">
            <button
              type="button"
              className=" button-1 m-1 font-15   btn bg-brown "
            >
              Customise
            </button>
            <button
              type="button"
              className="button-2 m-0 btn font-15  btn-outline border-brown text-brown"
            >
              Use My Last Style
            </button>
          </div>
          <hr />

          <div className="m-0 additional_details">
            <div className="desc">
              <h5 className=" font-20 ">Additional Details</h5>
              <ul>
                <li className="dropdown-item font-12">
                  <div className="desc_title ">description</div>
                  <div>{state.desc}</div>
                </li>
                <li className="dropdown-item font-12">
                  <div className="desc_title">Color</div>
                  <div>{state.color}</div>
                </li>
                <li className="dropdown-item font-12">
                  <div className="desc_title">Fabric</div>
                  <div>Linen</div>
                </li>
                <li className="dropdown-item font-12">
                  <div className="desc_title">GSM</div>
                  <div>120</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="box2  ">
        <div className="scrollbar custom" id="style-2">
          <hr />
          <h3 className="font-20 text-brown fw-bold m-3">Customization</h3>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  style={style}
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body d-flex col">
                  <div className=" style-option ">
                    <label htmlFor="notch">
                      <img src={lapel} className="border rounded" alt="" />
                    </label>
                    <div className="option-details">
                      <input
                        type="radio"
                        name="jacket-lapel"
                        id="notch"
                        className="input-hidden"
                      />
                      <span className="option-title">Notch</span>
                    </div>
                  </div>

                  <div className="style-option rounded">
                    <label htmlFor="peak">
                      <img src={lapel2} className="border rounded" alt="" />
                    </label>
                    <div className="option-details">
                      <input
                        type="radio"
                        name="jacket-lapel"
                        id="peak"
                        className="input-hidden"
                      />
                      <span className="option-title">Notch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  style={style}
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body d-flex col">
                  <div className=" style-option ">
                    <label htmlFor="notch">
                      <img src={lapel} className="border rounded" alt="" />
                    </label>
                    <div className="option-details">
                      <input
                        type="radio"
                        name="jacket-lapel"
                        id="notch"
                        className="input-hidden"
                      />
                      <span className="option-title">Notch</span>
                    </div>
                  </div>

                  <div className="style-option rounded">
                    <label htmlFor="peak">
                      <img src={lapel2} className="border rounded" alt="" />
                    </label>
                    <div className="option-details">
                      <input
                        type="radio"
                        name="jacket-lapel"
                        id="peak"
                        className="input-hidden"
                      />
                      <span className="option-title">Notch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  style={style}
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body d-flex col">
                  <div className=" style-option ">
                    <label htmlFor="notch">
                      <img src={lapel} className="border rounded" alt="" />
                    </label>
                    <div className="option-details">
                      <input
                        type="radio"
                        name="jacket-lapel"
                        id="notch"
                        className="input-hidden"
                      />
                      <span className="option-title">Notch</span>
                    </div>
                  </div>

                  <div className="style-option rounded">
                    <label htmlFor="peak">
                      <img src={lapel2} className="border rounded" alt="" />
                    </label>
                    <div className="option-details">
                      <input
                        type="radio"
                        name="jacket-lapel"
                        id="peak"
                        className="input-hidden"
                      />
                      <span className="option-title">Notch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-brown summary  rounded border border-top-0  border-bottom-0  ">
          <div className=" summary-body">
            <li className="rounded summary_title summary-item text-whtie bg-brown dropdown-item">
              Summary
            </li>
            <ul className="summary-list p-3 border-rounded rounded">
              <li className="summary-item dropdown-item">
                <div className="title-secondary text-light ">
                  Jacket Lapel<span>: </span>
                  <span className="title-secondary text-red">Notch</span>
                </div>
              </li>{" "}
              <hr />
              <li className="summary-item dropdown-item">
                <div className="title-secondary text-light ">
                  Lapel Button Hole<span>: </span>
                  <span className="title-secondary text-red">Real</span>
                </div>
              </li>{" "}
              <hr />
              <li className="summary-item dropdown-item">
                <div className="title-secondary text-light ">
                  Buttons<span>: </span>
                  <span className="title-secondary text-red">1 Button</span>
                </div>
              </li>{" "}
              <hr />
              <li className="summary-item dropdown-item">
                <div className="title-secondary text-light ">
                  Vent<span>: </span>
                  <span className="title-secondary text-red">Center Vent</span>
                </div>
              </li>{" "}
              <hr />
              <li className="summary-item dropdown-item">
                <div className="title-secondary text-light ">
                  Jacket Lower Packet<span>: </span> <br />
                  <span className="title-secondary text-red">
                    Straight Flap Pocket
                  </span>
                </div>
              </li>{" "}
              <hr />
              <li className="summary-item dropdown-item">
                <div className="title-secondary text-light ">
                  Jacket Stitching<span>: </span> <br />
                  <span className="title-secondary text-red">
                    No Hand-Picked Stitch
                  </span>
                </div>
              </li>{" "}
              <hr />
              <li className="summary-item dropdown-item">
                <div className="title-secondary text-light ">
                  Lining<span>: </span>
                  <span className="title-secondary text-red">-</span>
                </div>
              </li>
            </ul>
            <div className=" bg-brown rounded d-flex col justify-content-center text-white summary-footer">
              <div className="quantity d-flex col justify-content-center p-2">
                <div className="span">Qty</div>
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
              <button
                onClick={add_order}
                className="bg-white m-2 text-brown border-brown add-to-cart btn btn-outline "
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
