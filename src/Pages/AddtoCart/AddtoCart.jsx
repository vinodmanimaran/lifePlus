import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import CustomerForm from '../../Components/CustomerForm/CustomerForm'
import Orders from '../../Components/Orders/Orders'
import './AddtoCart.css'

const AddtoCart = () => {
  return (
    <div>
      <Header/>
        <div className="addtocart_left_right">
              <div className="orders">
<Orders/>
</div>
<div className="customer_details-form">
<CustomerForm/>        
</div>

      </div>
      <Footer/>
    </div>
  )
}

export default AddtoCart;