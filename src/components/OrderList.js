import React from 'react'

const OrderList = () => {
  return (
    <div> <li className="order-item">
    <div className="order-details">
      {/* <!-- Product Image --> */}
      <div className="order-details--image">
        <img src={product_1} alt="" />
      </div>
      <div className="order-details--info">
        {/* <!-- Product ID --> */}
        <div className="order-id">
          Order ID: <span>233567890</span>
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
</div>
  )
}

export default OrderList    