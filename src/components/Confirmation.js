import React from 'react'
import './css/confirmation.css'
const Confirmation = () => {
  return (
    <div><section className="order-section">
    <div className="order-wrapper">
         <div className="order-confirm text-center">

             {/* <!-- Order Status --> */}
             <div className="title-primary text-green">Order Confirmed</div>

             {/* <!-- Order Number --> */}
             <div className="order-number">Order Number. <span>345690</span></div>

             <div className="order-text">Your order has been placed successfully. You will receive a confirmation email shortly with all the details</div>

             {/* <!-- Track Order --> */}
             <button className="btn bg-brown text-white btn-fill btn-track">Track Order</button>
             <div className="separator"></div>

             <div className="row">
                 <div className="col-md-6">
                     <div className="payment-details">
                         <div className="payment-title">Payment Details</div>
                         {/* <!-- Order Total --> */}
                         <div className="order-total">$ 896</div>
                         <div className="payment-mode">Payment Mode: <span>Online</span></div>
                     </div>
                 </div>
                 <div className="col-md-6">
                     <div className="shipping-details">
                         
                         {/* <!-- Order Shipping Details --> */}
                         <div className="shipping-title">Shipping Details</div>
                         <div className="shipping-address">1592 US-130, North Brunswick Township, NJ 08902, United States</div>
                     </div>
                 </div>
             </div>
         </div>
    </div>
</section></div>
  )
}

export default Confirmation