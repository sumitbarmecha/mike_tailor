import React, { useState } from "react";
import "./css/forgetpassword.css";
import { Link } from "react-router-dom";
import arrow from "./assets/images/left-arrow.png";
import key from "./assets/images/key.png";
const ForgetPassword = () => {
  const URL = "http://localhost:4000";
  const [emailData, setEmailData] = useState({
    email: "",
  });
  const handleInputs_sendemail = (e) => {
    const { name, value } = e.target;

    setEmailData({
      ...emailData,
      [name]: value,
    });
  };

 const sendemail = async (e) => {
    e.preventDefault();
    const {email } = emailData;
    try {
      const res = await fetch(`${URL}/user/um/forgot-password`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({

          email
   
        }),
      });

      const data = await res.json();
      
      console.log(data);
     
      //  setJwt(data)
      if (data === "") {
        console.log("signup not successfull");
      } else {
        alert("signup sucessful");
        // setEmailData({
        //   ...emailData,
        //   firstName: "",
        //   lastName: "",
        //   email: "",
        //   phone: "",
        //   password: "",
        // });
      }
      setEmailData({
        ...emailData,
       
        email: emailData.email
  
      });
    } catch (err) {
      console.log(err);
      alert("error while request");
    }
  };
  return (
    <div className="forgetpassword">
      <form action="" className="container form-input d-flex row ">
        <img src={key} alt=' s' className="key-icon" />
        <h1 className="text-brown">Forgot password?</h1>
        <p>No worries , we will send you reset email</p>
        <label htmlFor="email">email</label>

        <input
          type="email"
          value={emailData.email}
          // placeholder="avianrizkyprasetya@mail.com"
          name="email"
          onChange={handleInputs_sendemail}
          required
        />
        <input
          onSubmit={sendemail}
          type="submit"
          className="bg-brown rounded text-white border-0"
        />
        <Link to="/">
          <img src={arrow} width="25px" alt="error" /> Back to homepage
        </Link>
      </form>
    </div>
  );
};

export default ForgetPassword;
