import React, {useContext} from 'react'
import { ShopContext } from '../../context/ShopContext';

function CartContent(props) {
  const { cartItem, addToCart,  removeFromCart, manualCountCartItem } = useContext(ShopContext);

  const {id,  name, price, thumbnail } = props.data

  return (
    <div className='cart-item'>
      <div className='product-img'>
        <img src={thumbnail} alt='IMG Not Found' />
      </div>
      <div className='cart-content'>
        <h4>{name}</h4>
        <h5> ${price}</h5>

        <div className='countHandler'>
          <button onClick={() => removeFromCart(id)}>-</button>
          <input type='text' value={cartItem[id]} onChange={(e)=> manualCountCartItem(Number(e.target.value), id)}/>
          <button onClick={() => addToCart(id)}>+</button>

        </div>
      </div>


    </div>

  )
}

export default CartContent
