import React, { useEffect, useState } from 'react'

import axios from 'axios';

function ProductCards() {
const [products,setProducts]=useState()

useEffect(()=>{
    getProducts()
},[])
    async function getProducts(){
        const  res= await axios.get('https://dummyjson.com/products')
       
    setProducts(res.data.products)
    }

   console.log(products)

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {products?.map((product) => (
      <div key={product.id} className="card bg-base-100 shadow-xl">
        <figure className="p-4">
          <img src={product?.images[0]} alt="Shoes" className="rounded-xl w-full h-48 object-cover" />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title">{product?.title}</h2>
          <p>{product.description}</p>
          <div className="card-actions mt-4">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default ProductCards