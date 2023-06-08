import React, { useContext } from 'react'
import products from '../../products.json'
import './cart.css'
import { ShopContext } from '../../context/ShopContext'
import CartContent from './CartContent'

function Cart() {
  const { cartItem } = useContext(ShopContext);

  const [id] = products;

  console.log('cart-item : ' + cartItem[1])

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
    </div>
  )
}

export default Cart
