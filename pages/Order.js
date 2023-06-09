import React from 'react'

const Order = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">Codeswear.com</h2>
              <h3 className="text-gray-900 text-2xl title-font font-medium mb-2">Order id: #784512</h3>
              <p className="leading-relaxed mb-4">Your order has been succesfully placed</p>
              <div className="flex mb-2">
                <a className="text-decoration-none flex-grow text-pink-500  py-2 text-lg px-1">Item name</a>
                <a className="text-decoration-none flex-grow text-pink-500 text-center  md:mr-2 py-2 text-lg px-1">Qty</a>
                <a className="text-decoration-none flex-grow text-pink-500 text-center md:ml-[20px] py-2 text-lg px-1">Price</a>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Wear the code</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto mr-4 md:mr-10 text-gray-900 tetx-center unique">499.00</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Wear the code</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto mr-4 md:mr-10 text-gray-900 tetx-center unique">499.00</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Wear the code</span>
                <span className="ml-auto text-gray-900">1</span>
                <span className="ml-auto mr-4 md:mr-10 text-gray-900 tetx-center unique">499.00</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-xl text-gray-900">Total: ₹ 1158.00</span>
                <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-3 md:px-5 focus:outline-none hover:bg-pink-600 rounded">Track Order</button>
              </div>
            </div>
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Order
