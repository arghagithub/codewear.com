import React from 'react'
import Link from 'next/link';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
const Check = (props) => {
  const { cart, addtocart, removefromcart,subtotal } = props;
  console.log(cart);
  return (
    <div className='container px-2 sm:m-auto'>
      <h1 className='font-bold text-center my-8 text-3xl text-pink-600' >Checkout</h1>
      <h2 className='ml-2 font-bold text-xl'>Delivery details</h2>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="mb-2">
            <label htmlFor="name" className="leading-7 font-semibold text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-2">
            <label htmlFor="email" className="leading-7 font-semibold text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className="px-2 w-full">
        <div className="mb-2">
          <label htmlFor="address" className="leading-7 font-semibold text-sm text-gray-600">Address</label>
          <textarea cols="30" rows="2" id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out"></textarea>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="mb-2">
            <label htmlFor="phone" className="leading-7 font-semibold text-sm text-gray-600">Phone</label>
            <input type="text" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-2">
            <label htmlFor="city" className="leading-7 font-semibold text-sm text-gray-600">City</label>
            <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <div className="mx-auto flex my-2">
        <div className="px-2 w-1/2">
          <div className="mb-2">
            <label htmlFor="state" className="leading-7 font-semibold text-sm text-gray-600">State</label>
            <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="px-2 w-1/2">
          <div className="mb-2">
            <label htmlFor="pincode" className="leading-7 font-semibold text-sm text-gray-600">Pincode</label>
            <input type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>
      <h2 className='ml-2 font-bold text-xl'>Review cart items</h2>
      <div className="sidecart mx-2 my-4 p-6 bg-pink-100 rounded-md">
        <ol className='list-decimal space-y-4 mt-3'>
          {
            (Object.keys(cart).length === 0) && <div className='mt-3 font-semibold'>No items in the cart</div>
          }
          {
            Object.keys(cart).map((item, index) => {
              return (
                <li key={index}>
                  <div className="ietm flex">
                    <div className='text-left px-1  text-pink-800 font-bold'>{cart[item].name} :{cart[item].size}/{cart[item].variant} </div>
                    <div className='w-1/3 font-bold flex  items-center  justify-center' ><AiOutlineMinusCircle onClick={() => { removefromcart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant) }} className='text-2xl mx-2 cursor-pointer text-pink-500 font-bold' /> {cart[item].qty} <AiOutlinePlusCircle onClick={() => { addtocart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant) }} className=' cursor-pointer text-pink-500 fint-bold text-2xl ml-2' /></div>
                  </div>
                </li>
              )
            })
          }
        </ol>
        <span className="total ml-8 font-bold">Subtotal:&nbsp;&nbsp;{subtotal}</span>
      </div>
        <Link style={{textDecoration:'none'}} href={'/Check'}><button className="flex mx-auto mt-3 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-md">Pay ₹ {subtotal}</button></Link>
    </div>
  )
}

export default Check
