import React from 'react'
import './Shop.css'
import product from '../../products.json'
import Product from '../../Component/Product'

function Home() {
  return (
    <div>
      <h1 className='shopTitle'>Expensive Product Shop</h1>

      <div className='products'>
        {
          product.map((data) =>{
            return ( <Product key={data.id} data={data}/>)
          })
        }
      </div>
    </div>
  )
}

export default Home
