import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';

const Navbar = () => {

  const { cartState } = useCart();

  
  return (

    <div className="navbar bg-blue-gray-400 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Shoes</a></li>
      <li><a>Backpack </a></li>
    
      <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">RIO Store</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Shoes</a></li>
      <li><a>Backpack </a></li>
    
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end text-xl cursor-pointer">
  <FontAwesomeIcon icon={faShoppingCart} />
  </div>

  <div className="flex justify-end flex-1 px-2">
  <div className="flex items-stretch relative">
    <a className="btn btn-ghost rounded-btn">Button</a>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">
        Dropdown
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content right-0 mt-4 absolute z-[1] p-2 shadow bg-base-100 rounded-box"
      >
        <div className="card-body">
          {cartState.cartItems.map((item) => (
            <a
              key={item.id}
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover rounded-t-lg h-24 w-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={item.images[0]}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <div className="mb-2 flex items-center">
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    {item.category}
                  </span>
                </div>
                <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </div>
            </a>
          ))}
        </div>
      </ul>
    </div>
  </div>
</div>


  
</div>
 
  )
}

export default Navbar