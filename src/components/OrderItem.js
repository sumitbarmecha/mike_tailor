import React from 'react'
import product_1 from './assets/images/products/1.png'
import close from './assets/images/close.svg'
const OrderItem = () => {
  return (
    <div className='OrderItem m-2'><li className="order-item dropdown-item">
    <div className="product-details d-flex  justify-content-between">
      {/* <!-- Product Image --> */}
      <div className="product-details--image">
        <img className='rounded'
          src={product_1}
          alt=""
        />
      </div>
      <div className="product-details--info ">
        {/* <!-- Product ID --> */}
        <div className="info--id m-1 weight-900">188-33</div>

        {/* <!-- Product Title --> */}
        <div className="info--title font-10 m-1">
          Blmers Luini Linen <span> | </span>
          <span className="info--variations m-1">
            Dark Grey
          </span>
        </div>

        {/* <!-- Quantity --> */}
        <div className="qty-input ">
          <button
            className="qty-count  qty-count--minus"
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
            value="1"
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
      <div className="product-details--extra">
        <a href="#" className="remove-product">
          <img src={close} alt="" />
        </a>

        {/* <!-- Product Price --> */}
        <div className="product-details--price title-secondary text-light weight-900">
          $300
        </div>
      </div>
    </div>
  </li></div>
  )
}

export default OrderItem