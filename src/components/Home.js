import React, { useState, useEffect } from "react";
import "./css/home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import banner_1 from "./assets/images/Slider/banner-1.jpg";
import banner_2 from "./assets/images/Slider/banner-2.jpg";
import banner_3 from "./assets/images/Slider/banner-3.jpg";
import carousel_img_1 from "./assets/images/Categories/suits.jpg";
import carousel_img_2 from "./assets/images/Categories/shirts.jpg";
import carousel_img_3 from "./assets/images/Categories/jackets.jpg";
import carousel_img_4 from "./assets/images/Categories/blazers.jpg";
import carousel_img_5 from "./assets/images/Categories/tuxedo-coats.jpg";
import carousel_img_6 from "./assets/images/Categories/trousers.jpg";
import carousel_img_7 from "./assets/images/Categories/tuxedo-shirts.jpg";
import news_letters_img from "./assets/images/backgrounds/modal-image-2.png";

// eslint-disable-next-line
// const [show, setShow] = useState("fade")
// useEffect(()=>{
//   setTimeout(()=>{
//     setShow("show")
//   }, 2000)
// }, [])
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const options = {
    margin: 30,
    responsiveClass: true,

    dots: true,
    autoplay: false,
  
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 4,

        }
    },
}
  const style = {
    boxShadow: "-1px -1px 0 0.25rem #2a6cc900",
  };
  return (
    <div>
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
      <div
        id="carouselExampleIndicators"
        className="carousel "
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner_1} className="d-block w-100" alt="..." />
            <div className="carousel-caption text-dark d-none d-md-block">
              <div className="line"></div>
              <h5>TUXIDO COLLECTIONS</h5>
              <p>2022</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner_2} className="d-block w-100" alt="..." />
            <div className="carousel-caption text-dark d-none d-md-block">
              <div className="line"></div>
              <h5>SUMMER COLLECTIONS</h5>
              <p>LINEN</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner_3} className="d-block w-100" alt="..." />
            <div className="carousel-caption_3 carousel-caption text-white  ">
              <div className="line"></div>
              <h5>YOU CAN TELL WHEN ITS TAILORED</h5>
              <p>LINEN</p>
            </div>
          </div>
        </div>
      </div>
      <div className="second_carousel">
        <OwlCarousel className="owl-theme" {...options} loop margin={0}>
          <div className="item">
            <div className="rounded card  text-white">
              <img src={carousel_img_1} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <p className="card-text">CustomTailored</p>
                <h5 className="card-title">SUITS</h5>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card text-white">
              <img src={carousel_img_2} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <p className="card-text">Custom Tailored</p>
                <h5 className="card-title">SHIRTS</h5>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card text-white">
              <img src={carousel_img_3} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <p className="card-text">Custom Tailored</p>
                <h5 className="card-title">JACKETS</h5>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card text-white">
              <img src={carousel_img_4} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <p className="card-text">Custom Tailored</p>
                <h5 className="card-title">BLAZERS</h5>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card text-white">
              <img src={carousel_img_5} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <p className="card-text">Custom Tailored</p>
                <h5 className="card-title">TUXEDO COATS</h5>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card text-white">
              <img src={carousel_img_6} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <p className="card-text">Custom Tailored</p>
                <h5 className="card-title">TROUSERS</h5>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="card text-white">
              <img src={carousel_img_7} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <p className="card-text">Custom Tailored</p>
                <h5 className="card-title">TUXEDO SHIRTS</h5>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Home;
