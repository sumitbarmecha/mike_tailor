import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom'
import "./css/my-account.css";
import product_1 from "./assets/images/products/1.png";
const Order = () => {
  const URL = "http://localhost:4000";
  const [orders, setorders] = useState([]);
  const [address, setAddress] = useState([]);
  const [profileData, setProfileData] = useState([]); 
  const storedJwt = sessionStorage.getItem("authToken");

  const [newAddress, setnewAddress] = useState({
    country: "",
    state: "",
    city: "",
    street: "",
    zipCode: "",
  });
  const handleInputs_profile = (e) => {
    const { name, value } = e.target;

    setProfileData({
      ...profileData,
      [name]: value,
    });
  };
  const handleInputs_address = (e) => {
    const { name, value } = e.target;

    setnewAddress({
      ...newAddress,
      [name]: value,
    });
  };
  const new_address = async (e) => {
    e.preventDefault();
    const { country, state, city, street, zipCode } = newAddress;
    // const storedJwt = sessionStorage.getItem("authToken");

    try {
      const res = await fetch(`${URL}/address/create`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authToken: `Bearer ${storedJwt}`,
        },
        body: JSON.stringify({
          country,
          state,
          city,
          street,
          zipCode,
        }),
      });

      const data = await res.json();
// console.log(data)
      setnewAddress({
        ...newAddress,
        country: newAddress.country,
        state: newAddress.state,
        city: newAddress.city,
        street: newAddress.street,
        zipCode: newAddress.zipCode,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async (e) => {
    window.location.reload();
    sessionStorage.removeItem("authToken");
  };
// let novalue= {
//   _id: "62f20cbae831563b691da9c4",
//   user: "62e6d4d06cc6e4bfd4188f2a",
//   country: "india",
//   state: "maharashtra",
//   city: "ahmednagar",
//   street: "flat no.402 , vinayakvihar , vinayak nagar",
//   zipCode: "414001",
//   createdAt: "2022-08-09T07:28:58.089Z",
//   updatedAt: "2022-08-09T07:28:58.089Z",
//   "__v": 0
// }

 
  useEffect(() => {
    const user_address = async (e) => {
      // e.preventDefault();
      // const storedJwt = sessionStorage.getItem("authToken");
      if (storedJwt === null) {
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

          setAddress(data);
// console.log(data)
          if (data.error === "not found") {
            setAddress([{  _id: "null",
            user: "null",
            country: "",
            state: "",
            city: "",
            street: "",
            zipCode: "",
            createdAt: "2022-08-09T07:28:58.089Z",
            updatedAt: "2022-08-09T07:28:58.089Z",
            "__v": 0}])
          }
        } catch (err) {
          console.log(err);
        }
      }
    };
    const user_detail = async (e) => {
      // e.preventDefault();
      // const storedJwt = sessionStorage.getItem("authToken");
      if (storedJwt === null) {
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
          
          setProfileData(data);
          
        } catch (err) {
          console.log(err);
        }
      }
    };
    const orders = async (e) => {
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
          // console.log(data)
          setorders(data);
        } catch (err) {
          console.log(err);
        }
      }
    };

    window.scrollTo(0, 0);
    user_detail();
    user_address();
    orders();
  }, []);
  let totalorders = orders.length;
  // if (storedJwt == null) {
    //   return <div className="page-title">please loggin first</div>;
    // } else
    // console.log(profileData)
    return (
    <div>
      {" "}
      <main>
        <section className="page-header">
          <div className="header-wrapper wrapper">
            <div className="wrapper">
              <div className="page-title">My Account</div>
            </div>
          </div>
        </section>

        <section className="account-section">
          <div className="account-wrapper">
            <div className="account-options">
              <div className="d-flex align-items-start">
                <div
                  className="nav flex-column nav-pills me-3"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-orders"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-orders"
                  >
                    Orders
                    {/* <!-- product count --> */}
                    <span className="order-count">{totalorders}</span>
                  </button>
                  <div className="separator"></div>
                  <button
                    className="nav-link"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                  >
                    Profile
                  </button>
                  <div className="separator"></div>
                  <button
                    className="nav-link"
                    id="v-pills-addresses-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-addresses"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-addresses"
                  >
                    Addresses
                  </button>
                  <div className="separator"></div>
                  <button
                    className="nav-link"
                    id="v-pills-logout-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-logout"
                    type="button"
                    role="tab"
                    onClick={logout}
                    aria-controls="v-pills-logout"
                  >
                    <a href="/">Logout</a>
                  </button>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    role="tabpanel"
                    aria-labelledby="v-pills-orders-tab"
                  >
                    <div className="orders-panel">
                      {/* <!-- 	Time Frame Select	 --> */}
                      <div className="select-control">
                        <span className="select-control__title">Last </span>
                        <select className="select">
                          <option className="select__item" value="1">
                            3 Months
                          </option>
                          <option
                            className="select__item"
                            value="2"
                            defaultValue
                          >
                            6 Months
                          </option>
                          <option className="select__item" value="3">
                            1 Year
                          </option>
                        </select>
                      </div>

                        {orders.map((e) => {
                          return (
                      <ul key={e.code} className="orders-list">
                        {/* <!-- List Item 1 -->/ */}
                            <li  className="order-item">
                              <div className="order-details">
                                {/* <!-- Product Image --> */}
                                <div className="order-details--image">
                                  <img src={product_1} alt="" />
                                </div>
                                <div className="order-details--info">
                                  {/* <!-- Product ID --> */}
                                  <div className="order-id">
                                    Order ID: <span>{e.code}</span>
                                  </div>

                                  {/* <!-- Order Status --> */}
                                  <div className="order-status">In Transit</div>
                                </div>
                              </div>

                              <div className="order-cta">
                                <a href="/">View Order</a> <span> | </span>{" "}
                                <a href="/">Track Order</a>
                              </div>
                            </li>
                      </ul>
                          );
                        })}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    {/* <!-- Profile Edit Form --> */}
                    
                      <form>
                      <div className="profile-panel">
                        <div className="title-secondary">Profile</div>

                        <div className="profile-form">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-input">
                                <label htmlFor="firstName" className="title">
                                  First Name
                                </label>
                                <input
                                  type="text"
                                  placeholder={`${profileData.firstName}`}
                                  name="firstName"
                                  onChange={handleInputs_profile}
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-input">
                                <label htmlFor="lastName" className="title">
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  placeholder={`${profileData.lastName}`}
                                  name="lastName"
                                  onChange={handleInputs_profile}
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-input">
                                <label htmlFor="email" className="title">
                                  Your Email
                                </label>
                                <input
                                  type="email"
                                  placeholder={`${profileData.email}`}
                                  name="email"
                                  onChange={handleInputs_profile}
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-input">
                                <label htmlFor="currentPassword">
                                  Current Password
                                </label>
                                <input
                                  type="password"
                                  pattern=".{8,}"
                                  autoComplete="on"
                                  onChange={handleInputs_profile}
                                  name="currentPassword"
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-input">
                                <label htmlFor="newPassword">
                                  New Password
                                </label>
                                <input
                                  type="password"
                                  autoComplete="on"
                                  placeholder="set a strong password"
                                  name="newPassword"
                                  pattern=".{8,}"
                                  onChange={handleInputs_profile}
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-input">
                                <label htmlFor="confirmPassword">
                                  Repeat New Password
                                </label>
                                <input
                                  type="password"
                                  pattern=".{8,}"
                                  autoComplete="on"
                                  onChange={handleInputs_profile}
                                  name="confirmPassword"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-input">
                        <input
                          type="submit"
                          value="Update"
                          className="btn btn-fill bg-brown text-white"
                        />
                      </div>
                    </form>

                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-addresses"
                    role="tabpanel"
                    aria-labelledby="v-pills-addresses-tab"
                  >
                    {/* <!-- Profile Edit Form --> */}
                    {address.map((e) => {
                      return (
                        <div key={e.code}>
                          <form onSubmit={new_address}>
                            <div className="address-panel">
                              <div className="title-secondary">Addresses</div>

                              <div className="address-form">
                                <div className="row">
                                  {/* <div className="col-md-6">
                              <div className="form-input">
                                <label htmlFor="firstName" className="title">
                                  First Name
                                </label>
                                <input
                                  type="text"
                                  placeholder={`${profileData.firstName}`}
                                  name="firstName"
                                  id="firstName"
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-input">
                                <label htmlFor="lastName" className="title">
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  placeholder={`${profileData.lastName}`}
                                  name="lastName"
                                  id="lastName"
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-input">
                                <label htmlFor="email" className="title">
                                  Your Email
                                </label>
                                <input
                                  type="email"
                                  placeholder={`${profileData.email}`}
                                  name="email"
                                  required
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-input">
                                <label htmlFor="phone" className="title">
                                  Phone
                                </label>
                                <input
                                  type="text"
                                  placeholder={`${profileData.phone}`}
                                  pattern="[0-9]{10}"
                                  name="phone"
                                  id="phone"
                                />
                              </div>
                            </div> */}

                                  <div className="col-md-6">
                                    <div className="form-input">
                                      <label
                                        htmlFor="address1"
                                        className="title"
                                      >
                                        Street Address Line
                                      </label>
                                      <input
                                        type="text"
                                        placeholder={`${e.street}`}
                                        value={newAddress.street}
                                        onChange={handleInputs_address}
                                        name="street"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-input">
                                      <label htmlFor="state" className="title">
                                        State/Province
                                      </label>
                                      <input
                                        type="text"
                                        name="state"
                                        placeholder={`${e.state}`}
                                        value={newAddress.state}
                                        onChange={handleInputs_address}
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-input">
                                      <label htmlFor="city" className="title">
                                        City
                                      </label>
                                      <input
                                        type="text"
                                        name="city"
                                        placeholder={`${e.city}`}
                                        value={newAddress.city}
                                        onChange={handleInputs_address}
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div className="form-input">
                                      <label
                                        htmlFor="zipCode"
                                        className="title"
                                      >
                                        Zip/Postal Code
                                      </label>
                                      <input
                                        type="text"
                                        name="zipCode"
                                        placeholder={`${e.zipCode}`}
                                        value={newAddress.zipCode}
                                        onChange={handleInputs_address}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-input">
                                      <label
                                        htmlFor="zipCode"
                                        className="title"
                                      >
                                        Country
                                      </label>
                                      <input
                                        type="text"
                                        name="country"
                                        placeholder={`${e.country}`}
                                        value={newAddress.country}
                                        onChange={handleInputs_address}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="form-input">
                              <input
                                type="submit"
                                value="Update"
                                className="btn btn-fill bg-brown text-white"
                              />
                            </div>
                          </form>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Order;
