import React from 'react'


function Product(props) {
    const { name, price, thumbnail, currency, inStock, delivery } = props.data
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
                        inStock ? <span >Available</span> : <span style={{color: 'red'}}>Out of Stock</span>
                    }
                </p>
                <p>
                    Delivery
                    {
                        delivery ? <span> available</span> : <span style={{color: 'red'}}> not available</span>
                    }
                </p>
                <button className='addToCartBtn'>Add To Cart</button>
            </div>
        </div>
    )
}

export default Product
