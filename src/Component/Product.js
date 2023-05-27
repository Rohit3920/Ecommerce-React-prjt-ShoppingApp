import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

function Product(props) {
    const {id, name, price, thumbnail, currency, inStock, delivery } = props.data
    const { addToCart, cartItem } = useContext(ShopContext)
    
    const cartItemsAmount = cartItem[id];
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={thumbnail} alt='IMG Not Found' />
            </div>
            <div className='product-content'>
                <h2>{name}</h2>
                <h3>{currency} ${price}</h3>
                <p>
                    {
                        inStock ? <span >Available</span> : <span style={{ color: 'red' }}>Out of Stock</span>
                    }
                </p>
                <p>
                    Delivery
                    {
                        delivery ? <span> available</span> : <span style={{ color: 'red' }}> not available</span>
                    }
                </p>
                <button className='addToCartBtn' onClick={() => addToCart(id)}>
                    Add To Cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
                </button>
            </div>
        </div>
    )
}

export default Product
