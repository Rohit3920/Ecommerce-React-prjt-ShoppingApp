import React from 'react'
import './Shop.css'
import product from '../../products.json'
import Product from '../../Component/Product'
import Filter from '../../Component/Filter'
// import categories from '../categories.json'


function Home() {

  return (
    <div>
      <h1 className='shopTitle'>Rohit-Brands Product Shop</h1>
      <Filter />

      <div className='products'>
        {
          product.map((data, ind) => {
            return Filter && Filter.id ?
              <h1 key={ind}>hello</h1>
              :
              <Product key={data.id} data={data} />
          })
        }
      </div>
    </div>
  )
}

export default Home
