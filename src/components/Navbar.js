import React, { useEffect, useState } from "react";
import "./css/navbar.css";
import { Link } from "react-router-dom";

import modal_background from "./assets/images/backgrounds/modal-image.png";
import svg_450 from "./assets/images/backgrounds/modal-image.png";
import view from "./assets/images/view.png";
// import hide from "./assets/images/hide.png";
import user from "./assets/images/user.svg";
import email from "./assets/images/mail.svg";
import phone from "./assets/images/phone.svg";

const URL = "http://localhost:4000";

const Navbar = () => {
  const isloggedin = () => {
    if (storedJwt ===undefined) {
      window.location.reload();
      alert("is not logged in")
    } 
  };
  // const storedJwt = localStorage.getItem('token');
  const storedJwt = sessionStorage.getItem("authToken");
  // const [jwt, setJwt] = useState(storedJwt || null);
  const [showPassword, setShowPassword] = useState("password");
  const [icon, setIcon] = useState("view");
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleInputs_signup = (e) => {
    const { name, value } = e.target;

    setSignupData({
      ...signupData,
      [name]: value,
    });
  };
  const show = () => {
    if (showPassword === "password") {
      setShowPassword("text");
      setIcon("hide");
    } else {
      setShowPassword("password");
      setIcon("view");
    }
  };
  
  const handleInputs_login = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const signup = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, password } = signupData;
    try {
      const res = await fetch(`${URL}/auth/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          password,
        }),
      });

      const data = await res.json();
      const token = data.authToken;
      console.log(token);
      sessionStorage.setItem("authToken", token);
      //  setJwt(data)
      if (data === "") {
        console.log("signup not successfull");
      } else {
        alert("signup sucessful");
        // setSignupData({
        //   ...signupData,
        //   firstName: "",
        //   lastName: "",
        //   email: "",
        //   phone: "",
        //   password: "",
        // });
      }
      setSignupData({
        ...signupData,
        firstName: signupData.firstName,
        lastName: signupData.lastName,
        email: signupData.email,
        phone: signupData.phone,
        password: signupData.password,
      });
    } catch (err) {
      console.log(err);
      alert("error while request");
    }
  };
  const login = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    try {
      const res = await fetch(`${URL}/auth/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();
      const token = data.authToken;
      console.log(token);
      sessionStorage.setItem("authToken", token);

      // setJwt(data)
      if (data === "err") {
        console.log("login not successfull");
      } else {
        alert("login sucessful");
        // setSignupData({
        //   ...signupData,
        //   firstName: "",
        //   lastName: "",
        //   email: "",
        //   phone: "",
        //   password: "",
        // });
      }
      setLoginData({
        ...loginData,
        email: loginData.email,
        password: loginData.password,
      });
    } catch (err) {
      console.log(err);
      alert("error while request");
    }
  };
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#fefefe") : setnavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const style = {
    boxShadow: "-1px -1px 0 0.25rem #2a6cc900",
  };
  return (
    <div>
      <nav
        style={{
          backgroundColor: navColor,
          transition: "all 1s",
        }}
        className="Header navbar top navbar-expand-lg    "
      >
        <div className="container-fluid">
          <div style={style} className="collapse-button">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="text-dark">Menu</span>
            </button>
          </div>

          <ul className="right_side_list navbar-nav mb-2 mb-lg-0">
            <li className=" navbar-block search">
              <Link
                className="font-15 nav-link active"
                aria-current="page"
                to="/"
              >
                <div className="img"></div>
                <div className="  search_text ">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11V11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                      fill="#323232"
                    />
                  </svg>
                  <p className="m-1 nav-item">Search</p>
                </div>
              </Link>
            </li>
            <li className=" navbar-block profile_dropdown d-flex row justify-content-center dropdown">
              <Link
                className="profile font-15 nav-link active   "
                to="/my-account"
                onClick={isloggedin}
              >
                <div className="img">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1.9C9.16 1.9 10.1 2.84 10.1 4C10.1 5.16 9.16 6.1 8 6.1C6.84 6.1 5.9 5.16 5.9 4C5.9 2.84 6.84 1.9 8 1.9ZM8 10.9C10.97 10.9 14.1 12.36 14.1 13V14.1H1.9V13C1.9 12.36 5.03 10.9 8 10.9ZM8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0ZM8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9Z"
                      fill="#323232"
                    />
                  </svg>
                </div>
                <p className="m-1 nav-item">Profile</p>
              </Link>
              <ul
                className="profile_dropdown_menu    show shadow-lg  rounded"
                aria-labelledby="navbarDropdown show"
              >
                <li>
                  <Link className="  dropdown-item  dropdown_title" to="/">
                    <button
                      type="button"
                      className="btn-profile "
                      data-bs-toggle="modal"
                      data-bs-target="#loginModal"
                      data-backdrop="static"
                      data-keyboard="false"
                    >
                      Login
                    </button>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item  dropdown_title" to="/">
                    <button
                      type="button"
                      className="btn-profile "
                      data-bs-toggle="modal"
                      data-bs-target="#signupModal"
                      data-backdrop="static"
                      data-keyboard="false"
                    >
                      Signup
                    </button>
                  </Link>
                </li>
              </ul>
            </li>
            <li className=" navbar-block cart">
              <Link
                className="font-15 nav-link active "
                aria-current="page"
                to="/cart"
                onClick={isloggedin}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2783 11.0084C14.9669 11.0084 15.573 10.5981 15.8852 9.97774L19.1724 3.48365C19.5122 2.82324 19.0714 2.00272 18.3736 2.00272H4.78373L3.92059 0.00146484H0.917969V2.00272H2.75444L6.06007 9.5975L4.82046 12.039C4.15015 13.3799 5.03165 15.0109 6.42737 15.0109H17.4462V13.0096H6.42737L7.43742 11.0084H14.2783ZM5.65605 4.00398H16.8126L14.2783 9.00713H7.83226L5.65605 4.00398ZM6.42737 16.0115C5.41731 16.0115 4.60008 16.9121 4.60008 18.0128C4.60008 19.1135 5.41731 20.014 6.42737 20.014C7.43742 20.014 8.26383 19.1135 8.26383 18.0128C8.26383 16.9121 7.43742 16.0115 6.42737 16.0115ZM15.6097 16.0115C14.5996 16.0115 13.7824 16.9121 13.7824 18.0128C13.7824 19.1135 14.5996 20.014 15.6097 20.014C16.6198 20.014 17.4462 19.1135 17.4462 18.0128C17.4462 16.9121 16.6198 16.0115 15.6097 16.0115Z"
                    fill="#323232"
                  />
                </svg>
                <p className="m-05 nav-item">Cart</p>
              </Link>
            </li>
          </ul>
          <ul className="mike_tailor_logo navbar-nav ">
            <Link to="/">
              <svg
                // width="310"
                // height="42"
                viewBox="0 0 310 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M208.982 27.8075L206.764 32.2722H200.274L212.78 7.6665L225.319 32.2722H218.795L216.567 27.8075H208.982ZM215.433 23.5412H210.142L212.78 17.6212L215.433 23.5412Z"
                  fill="#393939"
                />
                <path
                  d="M183.08 14.1156H189.605V32.2722H195.348V14.1156H201.907V9.12168H183.08V14.1156Z"
                  fill="#393939"
                />
                <path
                  d="M229.511 9.12168V32.2722H235.357V9.12168H229.511Z"
                  fill="#393939"
                />
                <path
                  d="M242.096 32.2722V9.12168H247.839V27.4768H257.389V32.2722H242.096Z"
                  fill="#393939"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M259.361 20.697C259.361 22.4829 259.667 24.1255 260.279 25.6247C260.913 27.124 261.797 28.4248 262.929 29.5273C264.085 30.6297 265.444 31.4895 267.007 32.1069C268.571 32.7022 270.293 32.9998 272.173 32.9998C274.031 32.9998 275.741 32.7022 277.304 32.1069C278.868 31.4895 280.216 30.6297 281.349 29.5273C282.504 28.4248 283.388 27.124 283.999 25.6247C284.634 24.1255 284.951 22.4829 284.951 20.697C284.951 18.9111 284.634 17.2795 283.999 15.8023C283.365 14.325 282.47 13.0463 281.315 11.9659C280.159 10.8855 278.8 10.0587 277.236 9.48548C275.696 8.89018 274.008 8.59253 272.173 8.59253C270.361 8.59253 268.673 8.89018 267.109 9.48548C265.546 10.0587 264.187 10.8855 263.031 11.9659C261.876 13.0463 260.97 14.325 260.313 15.8023C259.678 17.2795 259.361 18.9111 259.361 20.697ZM265.444 20.697C265.444 19.33 265.716 18.1284 266.26 17.0921C266.826 16.0338 267.608 15.207 268.605 14.6117C269.624 14.0164 270.814 13.7187 272.173 13.7187C273.555 13.7187 274.744 14.0164 275.741 14.6117C276.738 15.207 277.508 16.0338 278.052 17.0921C278.596 18.1284 278.868 19.33 278.868 20.697C278.868 22.064 278.585 23.2766 278.018 24.3349C277.474 25.3712 276.693 26.187 275.673 26.7823C274.676 27.3776 273.51 27.6752 272.173 27.6752C270.814 27.6752 269.624 27.3776 268.605 26.7823C267.608 26.187 266.826 25.3712 266.26 24.3349C265.716 23.2766 265.444 22.064 265.444 20.697Z"
                  fill="#393939"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M297.832 24.2357L302.938 32.2722H309.667L303.467 23.5395C303.683 23.4589 303.892 23.3712 304.093 23.2766C305.453 22.6372 306.483 21.7553 307.186 20.6308C307.888 19.4843 308.239 18.1724 308.239 16.6952C308.239 15.1959 307.888 13.8841 307.186 12.7596C306.483 11.6131 305.453 10.7202 304.093 10.0808C302.734 9.44138 301.035 9.12168 298.996 9.12168H290.33V32.2722H296.073V24.2357H297.832ZM296.073 13.851V19.9032H298.588C299.358 19.9032 300.015 19.793 300.559 19.5725C301.125 19.33 301.556 18.9882 301.85 18.5473C302.145 18.0843 302.292 17.5331 302.292 16.8937C302.292 16.2543 302.145 15.7141 301.85 15.2731C301.556 14.8101 301.125 14.4573 300.559 14.2148C300.015 13.9723 299.358 13.851 298.588 13.851H296.073Z"
                  fill="#393939"
                />
                <path
                  d="M126.254 8.32873L121.634 0L107.672 25.1662L107.67 25.1626L103 33.5813L107.67 42L112.291 33.6713L112.293 33.6748L121.634 16.8374L121.636 16.8338L126.256 25.1626L126.258 25.1589L130.878 33.4878L130.88 33.4841L135.501 41.8129L140.121 33.4842L140.123 33.4878L144.743 25.159L144.745 25.1626L149.366 16.8339L149.368 16.8374L154.038 8.41871L149.368 0L144.747 8.32882L144.745 8.32517L140.125 16.654L140.123 16.6503L135.503 24.9792L135.501 24.9755L135.499 24.9791L130.878 16.6503L130.876 16.6539L126.256 8.32517L126.254 8.32873Z"
                  fill="#8D1C1C"
                />
                <path
                  d="M168 33.4879L158.708 16.744L156.418 12.6282L151.678 20.8598L151.668 20.8735L151.669 20.876L147.058 29.1886L147.056 29.185L142.386 37.6037L144.721 41.813L149.342 33.4842L149.344 33.4879L154 25.0937L158.707 33.5814L158.709 33.5778L163.33 41.9066L168 33.4879Z"
                  fill="#8D1C1C"
                />
                <path
                  d="M14.3002 31.1584L7.80938 21.5013L6.38208 33.3081H0.333008L4.17315 9L14.3002 23.1218L24.4613 9L28.3015 33.3081H22.2524L20.8251 21.5013L14.3002 31.1584Z"
                  fill="#393939"
                />
                <path
                  d="M33.6581 33.3081V10.1575H39.5033V33.3081H33.6581Z"
                  fill="#393939"
                />
                <path
                  d="M46.2426 10.1575V33.3081H52.1898V23.1866L60.5497 33.3081H67.5163L57.3552 21.0052L67.0066 10.1575H60.2778L52.1898 19.2903V10.1575H46.2426Z"
                  fill="#393939"
                />
                <path
                  d="M87.5061 33.3081H71.7037V10.1575H87.5061V14.7546H77.2091V18.8886H86.8264V23.3864H77.2091V28.7111H87.5061V33.3081Z"
                  fill="#393939"
                />
              </svg>
            </Link>
          </ul>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav left_side_list ">
              <li className="nav-item dropdown">
                <Link className="font-15 nav-link active dropdown_anchor" to="">
                  SHOP
                </Link>

                <ul
                  className="shop_dropdown_menu dropdown-menu  show shadow-lg p-3 mb-5 bg-body rounded"
                  aria-labelledby="navbarDropdown show"
                >
                  <li className="dropdown-title">
                    <div className="shirts">
                      <ul className="navbar-nav">
                        <li>
                          <p className="dropdown-item dropdown_title">SHIRTS</p>
                          <Link
                            className="dropdown-item"
                            to='/shop'
                            state="shirts" 
                          onClick={isloggedin}
                          >
                            shirts
                          </Link>
                          <Link className="dropdown-item" to='/'>
                            Egyptian
                          </Link>
                          <a className="dropdown-item" href="/">
                            Wrinkle Free
                          </a>
                          <a className="dropdown-item" href="/">
                            Smart Casual
                          </a>
                          <a className="dropdown-item" href="/">
                            Seer Sucker
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="dropdown-title">
                    <div className="shirts">
                      <ul className="navbar-nav">
                        <li>
                          <p className="dropdown-item dropdown_title">
                            JACKETS
                          </p>
                          <Link
                            className="dropdown-item"
                            to="/shop"
                            state="jackets"
                          >
                            Ultra Light Weight
                          </Link>
                          <a className="dropdown-item" href="/">
                            Luxury Light Weight
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="dropdown-title">
                    <div className="shirts">
                      <ul className="navbar-nav">
                        <li>
                          <p className="dropdown-item dropdown_title">
                            TROUSERS
                          </p>
                          <Link
                            className="dropdown-item"
                            to="/shop"
                            state="trousers"
                          >
                            Pure Cotton
                          </Link>
                          <a className="dropdown-item" href="/">
                            Pure Cotton With Stretch
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="dropdown-title">
                    <div className="shirts">
                      <ul className="navbar-nav">
                        <li>
                          <p className="dropdown-item dropdown_title">
                            TUXEDO SUITS
                          </p>
                          <a className="dropdown-item" href="/">
                            Pure Cotton
                          </a>
                            <a className="dropdown-item" href="/">
                            Pure Cotton With Stretch
                          </a>
                          <a className="dropdown-item" href="/">
                            Pure Cotton With Stretch
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="dropdown-title">
                    <div className="shirts">
                      <ul className="navbar-nav">
                        <li>
                          <p className="dropdown-item dropdown_title">
                            TUXEDO SHIRTS
                          </p>
                          <a className="dropdown-item" href="/">
                            Pure Cotton
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="font-15 nav-link active  dropdown_anchor"
                  aria-current="page"
                  to="/contact"
                  onClick={isloggedin}
                >
                  CONTACT US
                </Link>

                <div className="line"></div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="pwdModal" className="modal fade" tabIndex="-1" role="dialog" aria-hidden="true">
  <div className="modal-dialog">
  
  </div>
</div>
      <div className="modal_news_letter ">
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="signupModal"
          aria-labelledby="signupModalLabel"
          aria-hidden="true"
          tabIndex="-1"
        >
          <div className="m-auto  rounded-0 modal-dialog modal-dialog-centered ">
            <div className="signup-popup">
              <div className="popup-container">
                <div className="popup-main">
                  <div className="popup-section">
                    <div className="col-img">
                      <div className="full-image">
                        <img src={modal_background} alt="" />
                      </div>
                    </div>

                    <div className="col-content ">
                      <span
                        className="close"
                        type="button"
                        data-bs-dismiss="modal"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="2"
                            y="1.00001"
                            width="30"
                            height="1"
                            rx="1"
                            transform="rotate(45 2 1.00001)"
                            fill="#6A1818"
                          />
                          <rect
                            x="1"
                            y="22"
                            width="30"
                            height="1"
                            rx="1"
                            transform="rotate(-45 1 22)"
                            fill="#6A1818"
                          />
                        </svg>
                      </span>
                      <div className="popup-title title-primary">
                        Create your Account
                      </div>

                      <div className="user-form signup-form">
                        <form action="" onSubmit={signup}>
                          <div className="form-input">
                            <div>
                              <div className="name_div border-0">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                  // placeholder="Avian Rizky Prasetya"
                                  type="text"
                                  name="firstName"
                                  value={signupData.firstName}
                                  onChange={handleInputs_signup}
                                  required
                                />
                              </div>
                              <div className="name_div border-0">
                                <label htmlFor="lastName">last Name</label>

                                <input
                                  // placeholder="Avian Rizky Prasetya"
                                  type="text"
                                  value={signupData.lastName}
                                  name="lastName"
                                  onChange={handleInputs_signup}
                                  required
                                />
                              </div>
                              <span>
                                <img src={user} alt="" />
                              </span>
                            </div>
                          </div>
                          <div className="form-input">
                            <label htmlFor="emailOrPhone">Email</label>
                            <div>
                              <input
                                type="email"
                                value={signupData.email}
                                // placeholder="avianrizkyprasetya@mail.com"
                                name="email"
                                onChange={handleInputs_signup}
                                required
                              />
                              <span>
                                <img src={email} alt="" />
                              </span>
                            </div>
                          </div>
                          <div className="form-input">
                            <label htmlFor="contactNumber">
                              Contact Number
                            </label>
                            <div>
                              <input
                                type="tel"
                                // placeholder="00000 00000"
                                pattern="[0-9]+"
                                value={signupData.phone}
                                name="phone"
                                onChange={handleInputs_signup}
                                required
                              />
                              <span>
                                <img src={phone} alt="" />
                              </span>
                            </div>
                          </div>
                          <div className="form-input">
                            <label htmlFor="password">Password</label>
                            <div>
                              <input
                                placeholder="more than 8 character require"
                                type={`${showPassword}`}
                                value={signupData.password}
                                name="password"
                                onChange={handleInputs_signup}
                                pattern=".{8,}"
                                autoComplete="on"
                                required
                              />

                              <span className="password-eye" onClick={show}>
                                <img src={view} alt="error" />
                              </span>
                            </div>
                          </div>

                          <div className="form-input">
                            <input
                              type="submit"
                              value="Create an Account"
                              className="border-0 m-2 p-1  rounded bg-brown text-white"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="loginModal"
          aria-labelledby="loginModalLabel"
          aria-hidden="true"
          tabIndex="-1"
        >
          <div
            className="m-auto  rounded-0
          modal-dialog modal-dialog-centered "
          >
            <div className="login-popup ">
              <div className="popup-container">
                <div className="popup-main">
                  <div className="popup-section">
                    <div className="col-img">
                      <div className="full-image">
                        <img src={svg_450} alt="e" />
                      </div>
                    </div>
                    <div className="col-content">
                      {/* <!-- Close Popup --> */}
                      <span
                        className="close"
                        type="button"
                        data-bs-dismiss="modal"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="2"
                            y="1.00001"
                            width="30"
                            height="1"
                            rx="1"
                            transform="rotate(45 2 1.00001)"
                            fill="#6A1818"
                          />
                          <rect
                            x="1"
                            y="22"
                            width="30"
                            height="1"
                            rx="1"
                            transform="rotate(-45 1 22)"
                            fill="#6A1818"
                          />
                        </svg>
                      </span>

                      <div className="popup-title ">Login</div>

                      {/* <!-- Login Form --> */}
                      <div className="user-form login-form">
                        <form onSubmit={login} className="m-1">
                          <div className="form-input">
                            <label className="mx-3" htmlFor="emailOrPhone">
                              Email Address
                            </label>{" "}
                            <div>
                              <input
                                type="email"
                                value={loginData.email}
                                // placeholder="avianrizkyprasetya@mail.com"
                                name="email"
                                onChange={handleInputs_login}
                                required
                              />
                              <span>
                                <img src={email} alt="" />
                              </span>
                            </div>
                          </div>
                          <label className="mx-3" htmlFor="password">
                            Password
                          </label>
                          <div className="form-input">
                            {" "}
                            <div>
                              <input
                                type={`${showPassword}`}
                                value={loginData.password}
                                name="password"
                                onChange={handleInputs_login}
                                autoComplete="on"
                                required
                              />
                              <span className="password-eye" onClick={show}>
                                <img src={view} alt="" />
                              </span>
                            </div>
                          </div>
                          <div className="form-footer mx-4   d-flex justify-content-between">
                            <div className="form-checkbox ">
                              <input
                                type="checkbox"
                                className="checkbox_remember_me  m-1"
                                name="rememberMe"
                              />
                              <label htmlFor="rememberMe">Remember Me</label>
                            </div>
                            <div className="forgot-password" data-bs-dismiss="modal">
                              <Link className="forgot-password-tag"  to="/forgetpassword">
                                Forgot Password
                              </Link>
                            </div>
                          </div>

                          <div className="form-input">
                            <input
                              type="submit"
                              value="Login"
                              className="btn btn-fill bg-brown text-white "
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
