import React, { useState } from 'react'
import './Filter.css'
import categories from '../categories.json'
import product from '../products.json'
import Product from './Product'

function Filter(props) {

    const [filt, setFilt] = useState()
    props = filt;
    console.log("props >>", props)
    const shorted = (itemId) => {
        setFilt(itemId)
        return (
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
        )
    }
    // console.log(filt)
    return (
        <div className='Filter'>
            <h1>filters</h1>
            <div className='shorted'>
                <strong>Shorted</strong><br />
                {
                    categories.map((data, ind) => {
                        return (
                            <div key={ind}>
                                <input type='radio' id={data.id} onChange={(e) => shorted(e.target.id)} name='product-filter' />
                                <label>{data.name}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export function send() {

}
export default Filter
