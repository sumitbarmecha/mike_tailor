import React, { useEffect, useState } from "react";
import "./css/contactus.css";

const ContactUs = () => {
  // /message/create
  const URL = "http://localhost:4000";
  const storedJwt = localStorage.getItem("authToken");
console.log(storedJwt)
  const [msgData, setmsgData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleInputs_contact = (e) => {
    const { name, value } = e.target;

    setmsgData({
      ...msgData,
      [name]: value,
    });
  };
  const contactus = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = msgData;
    try {
      const res = await fetch(`${URL}/message/create`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "authToken": `Bearer ${storedJwt}`,
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const data = await res.json();
      console.log(data);

      if (data === "") {
        console.log("message sent");
      } else {
        alert("mesaage not sent");
        setmsgData({
          ...msgData,
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
      setmsgData({
        ...msgData,
        name: msgData.name,
        email: msgData.email,
        subject: msgData.subject,
        message: msgData.message,
      });
    } catch (err) {
      console.log(err);
      alert("error while request");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ContactUs container">
      <div
        className=" contact_box1 d-flex col
       justify-content-between"
      >
        <div className="address ">
          <h3>Address</h3>
          <p className="text-light">
            Address PO Box 16122 Collins Street <br /> West Victoria 8007
            Australia – <strong className="text-brown"> Map</strong>
          </p>
        </div>
        <div className="contact_info">
          <h3>Contact Info</h3>
          <p className="text-light">
            Email : miketailor@gmail.com <br />
            Phone : +61 9 8376 6284
          </p>
        </div>
        <div className="open_hour">
          <h3>Open Hour</h3>
          <p className="text-light">
            Monday – Friday : 09:00 – 20:00 <br />
            Sunday & Saturday: 10:30 – 22:00
          </p>
        </div>
      </div>
      <div className="map_img d-flex justify-content-center">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196.98115050700625!2d144.948537577714!3d-37.820532623168354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5a3ff30273%3A0x55700729bcaebb85!2s16122%20Collins%20St%2C%20West%20Melbourne%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2sin!4v1652343701815!5m2!1sen!2sin"
            width="100%"
            title="map"
            frameborder="0"
          ></iframe>
        </div>
      </div>

      <h3 className="m-3 text-center">
        <strong className="text-brown">Get In Touch</strong>
      </h3>
      <div className="contact-form d-flex justify-content-center">
        {/* <!-- Contact Form  --> */}
        <form action="" onSubmit={contactus}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-input">
                <label htmlFor="fullname" className="title">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Jordan Harris"
                  value={msgData.name}
                  onChange={handleInputs_contact}
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
                  value={msgData.email}
                  onChange={handleInputs_contact}
                  name="email"
                  id="email"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-input">
                <label htmlFor="subject" className="title">
                  Subject
                </label>
                <input
                  type="text"
                  value={msgData.subject}
                  onChange={handleInputs_contact}
                  name="subject"
                  id="subject"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-input">
                <label htmlFor="message" className="title">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={msgData.message}
                  onChange={handleInputs_contact}
                  id=""
                  cols="20"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div className="col-md-3 offset-md-9">
              <div className="bg-brown rounded text-white form-input">
                <input
                  type="submit"
                  defaultValue="Send  Message"
                  className="btn contactus_submitbtn btn-fill"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
