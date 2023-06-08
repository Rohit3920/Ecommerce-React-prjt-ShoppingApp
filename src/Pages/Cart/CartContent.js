import React from 'react'

function CartContent(props) {
  const { name, price, thumbnail } = props.data
  console.log(name)

  return (
    <div className='cart-item'>
      <div className='product-img'>
                <img src={thumbnail} alt='IMG Not Found' />
            </div>
            <div className='cart-content'>
                <h4>{name}</h4>
                <h5> ${price}</h5>
            </div>
    </div>
  )
}

export default CartContent
