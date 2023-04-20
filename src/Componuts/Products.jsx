import React from 'react'
import products from '../data'
export default function Products({ sendData }) {
  return (
    <div className="container my-5">
        <div className="row g-5">
            {products.map((ele, ind)=><>
                <div key={ind} className='text-center col-md-3'>
                    <img height={'200px'} className="w-100" src={ele.image} />
                    <h6>{ele.title.split(" ").slice(0,4).join(" ")}</h6>
                    <h5 >{ele.price}$</h5>
                    <button onClick={() => { sendData(ele) }} className='btn btn-info text-white w-100'> Add To Cart </button>
                </div>
            </>
                
            )}
        </div>
    </div>
  )
}
