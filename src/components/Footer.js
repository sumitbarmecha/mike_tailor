import React from 'react'
import './css/footer.css'
import "./css/home.css";  
import footer_logo from "./assets/images/footer_logo.svg";
import news_letters_img from "./assets/images/backgrounds/modal-image-2.png";
const Footer = () => {
  const style = {
    boxShadow: "-1px -1px 0 0.25rem #2a6cc900",
  };
  return (
    <div> <footer>
    <div className="footer footer_section_one">

      <div className="footer_1st_section dropdown">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About Us</li>
          <li>Contact US</li>
        </ul>
      </div>
      <div className="footer_2nd_section dropdown">
        <ul>
          <li>Shipping Information</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="footer_3nd_section ">
        <ul>
          <li>For Latest news & Exclusive</li>
          <li>Collection Offers</li>
          <li>
            <button className="rounded-3"   type="button"
                      
                        data-bs-toggle="modal"
                        data-bs-target="#MyModal"
                        data-backdrop='static' data-keyboard='false'>Subscribe Now</button>
          </li>
        </ul>
      </div>
      <div className="footer_logo">
        <img src={footer_logo} alt="" />
      </div>
    </div>
    <div className="footer_section_two">© 2022 Mike Tailor Global</div>
    </footer>
    <div
          className={`modal`}
          id="MyModal"
          tabIndex="-1"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
          data-ride="carousel"
        >
          <div className="modal_news_letter ">
        {/* <button
        
          type="button"
          className="btn "
          data-bs-toggle="modal"
          data-bs-target="#MyModal"
        >
          Launch demo modal
        </button> */}

        {/* <!-- Modal --> */}
        <div
          className={`modal`}
          id="MyModal"
          tabIndex="-1"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
          data-ride="carousel"
        >
          <div
            className="m-auto  rounded-0
          modal-dialog modal-dialog-centered "
          >
            <div className="modal-content">
              {/* <div className="modal-header"></div> */}
              <div className="modal-body">
              <div className="closebutton">
                    <button
                      type="button"
                      className="close-above-img btn-close"
                      style={style}
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                <img src={news_letters_img} alt="" />
                <div className="newsletters_content">
                  <div className="closebutton">
                    <button
                      type="button"
                      className="btn-close"
                      style={style}
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="content_for_newsletter">
                    <h4>Sign Up to Our Newsletter</h4>
                    <div className="d-flex justify-content-center">
                      <p className="mx-4">
                        Be the first to get the latest new about collections,{" "}
                        <br />
                        promotions and much more
                      </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <div className="input-group">
                        <input
                          type="text"
                          className=" border-end-0 border-dark form-control"
                          placeholder="Your Email Address"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                        <span
                          className=" bg-transparent border-start-0  border-dark fw-bolder text-brown input-group-text"
                          id="basic-addon2"
                        >
                          JOIN{" "}
                        </span>
                      </div>
                    </div>
                    <div className="justify-content-center d-flex">
                      <p className="m-1 dont_show_popup  text-brown">
                        Don't show this popup again
                      </p>
                    </div>
                  </div>
                  <div className="space_empty"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Footer