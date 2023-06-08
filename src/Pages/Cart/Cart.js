import React, { useContext } from 'react'
import products from '../../products.json'
import './cart.css'
import { ShopContext } from '../../context/ShopContext'
import CartContent from './CartContent'
import {useNavigate} from 'react-router-dom'

function Cart() {
  const { cartItem,GetTotalAmount } = useContext(ShopContext);
  const TotalAmount = GetTotalAmount();

  const [id] = products;
const navigate = useNavigate()
  return (
    <div className='cart'>
      <div className='cart-title'>
        <h1>Your Cart Items</h1>
      </div>

      <div>
        {
          products.map((getProduct) => {
            return (
              cartItem[getProduct.id] !== 0 ? (
                <CartContent key={id} data={getProduct} />
              ) : <></>
            )
          })
        }
      </div>
      {
        TotalAmount > 0 ?
        <div className='checkout'>
        <p>SubTotal : ${TotalAmount}</p>
        <button onClick={() => navigate("/")} >Continue Shopping</button>
        <button>Checkout</button>

      </div> 
      : <h1 className='EmptyCart'>Your cart are Empty <h1 style={{opacity: 0.1}}>&#128524;</h1></h1>
      }
      
    </div>
  )
}

export default Cart
