import React from "react";
import lapel from "./assets/images/products/JACKET LAPEL TYPE 2-PEAK-12.jpg";
import "./css/productinfo.css";
import lapel2 from "./assets/images/products/JACKET NO OF BUTTONS- DOUBLE BREASTED 6 ON 2-12.jpg";
const Custom = (props) => {
  return (
    <div class="accordion-item">
      <h2
        class="accordion-header"
        id={`panelsStayOpen-heading${props.accordian_num}`}
      >
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#panelsStayOpen-collapse${props.accordian_num}`}
          aria-expanded="true"
          aria-controls={`panelsStayOpen-collapse${props.accordian_num}`}
        >
          {props.acc_title}
        </button>
      </h2>
      <div
        id={`panelsStayOpen-collapse${props.accordian_num} `}
        class="accordion-collapse collapse show"
        aria-labelledby={`panelsStayOpen-heading${props.accordian_num}`}
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

      {/* <div className="border rounded accordion-item">
        <h2
          className="accordion-header"
          id={`panelsStayOpen-heading${props.acho_num}`}
        >
          <button
            className="text-brown border-bottom accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#panelsStayOpen-collapse${props.acho_num}`}
            aria-expanded="true"
            aria-controls={`#panelsStayOpen-collapse${props.acho_num}`}
          >
            {props.custom_name}
          </button>
        </h2>
        <div
          id={`#panelsStayOpen-collapse${props.acho_num}`}
          className="accordion-collapse collapse show"
          aria-labelledby={`panelsStayOpen-heading${props.acho_num}`}
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
      </div> */}
    </div>
  );
};

export default Custom;
