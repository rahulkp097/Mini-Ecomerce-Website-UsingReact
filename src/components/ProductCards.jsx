import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import axios from 'axios';
import { useCart } from '../context/CartContext';

function ProductCards() {
const [products,setProducts]=useState()
const { dispatch } = useCart();
const { cartState } = useCart();

useEffect(()=>{
    getProducts()
},[])



    async function getProducts(){
        const  res= await axios.get('https://dummyjson.com/products')
       
    setProducts(res.data.products)
    }


    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
        Swal.fire({
            title: "Prodcut added to cart!",
            icon: "success"
          });
      };

      const removeFromCart = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
        Swal.fire({
            title: "Prodcut Removed from cart!",
            icon: "success"
          });
      };


   console.log(cartState,"cart Product")

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
        <h3> Rs.{product.price}</h3>
        <div className="card-actions mt-4">
          {cartState.cartItems.some((item) => item.id === product.id) ? (
            <button onClick={() => removeFromCart(product)} className="btn btn-primary">
              Remove
            </button>
          ) : (
            <button onClick={() => addToCart(product)} className="btn btn-primary">
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  ))}
</div>

  )
}

export default ProductCards