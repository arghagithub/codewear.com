import React from 'react'
import Link from 'next/link';
import Product from "@/models/Product";
import mongoose from 'mongoose';
const Mugs = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).length === 0 && <p>Sorry, all coffee mugs collections are out of stock. New stock is coming soon. Stay tuned</p>}

            {(Object.keys(products).length !== 0) &&
              Object.keys(products).map((item, index) => {
                return (
                  <div key={index} className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-3">
                    <span className="block relative rounded overflow-hidden">
                      <Link href={`/product/${products[item].slug}`}><img alt="ecommerce" className="m-auto h-[30vh] md:m-0 md:h-[30vh] block" src="https://m.media-amazon.com/images/I/61GZXYM9dfL._SX679_.jpg" /></Link>
                    </span>
                    <Link style={{ textDecoration: 'none', color: 'black' }} href={`/product/${products[item].slug}`}><div className="mt-4 text-center">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Coffee mugs</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                      <p className="mb-0">₹ {products[item].price}</p>
                      {/* <p className="mb-0 mt-2 flex flex-wrap justify-center items-center">
                        {products[item].size.includes('S') && <span className='border p-1 mx-2'>S</span>}
                        {products[item].size.includes('M') && <span className='border p-1 mx-2'>M</span>}
                        {products[item].size.includes('L') && <span className='border p-1 mx-2'>L</span>}
                        {products[item].size.includes('XL') && <span className='border p-1 mx-2'>XL</span>}
                        {products[item].size.includes('XXL') && <span className='border p-1 mx-2'>XXL</span>}
                        {products[item].size.includes('3XL') && <span className='border p-1 mx-2 my-1'>3XL</span>}
                      </p> */}
                      <p className="mb-0 mt-2">
                        {products[item].color.includes('Red') && <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none" />}
                        {products[item].color.includes('Green') && <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none" />}
                        {products[item].color.includes('Purple') && <button className="border-2 border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none" />}
                        {products[item].color.includes('Pink') && <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none" />}
                        {products[item].color.includes('Yellow') && <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none" />}
                        {products[item].color.includes('Black') && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none" />}
                      </p>
                    </div></Link>
                  </div>
                )
              })
            }

            {/* <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-3">
              <span className="block relative  rounded overflow-hidden">
                <Link href={'product/Wear the code'}><img alt="ecommerce" className="m-auto h-[30vh] md:m-0 md:h-[30vh] block" src="https://m.media-amazon.com/images/I/51ZZ03sehSL._SX679_.jpg" /></Link>
              </span>
              <Link style={{ textDecoration: 'none', color: 'black' }} href={'/product/Wear the code'}><div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Coffee mugs</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                <p className="mb-0">₹ 249.00</p>
              </div></Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-3">
              <span className="block relative  rounded overflow-hidden">
                <Link href={'product/Wear the code'}><img alt="ecommerce" className="m-auto h-[30vh] md:m-0 md:h-[30vh] block" src="https://m.media-amazon.com/images/I/41RQpKK0g9L._SX300_SY300_QL70_FMwebp_.jpg" /></Link>
              </span>
              <Link style={{ textDecoration: 'none', color: 'black' }} href={'/product/Wear the code'}><div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Coffee mugs</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <p className="mb-0">₹ 249.00</p>
              </div></Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-3">
              <span className="block relative  rounded overflow-hidden">
                <Link href={'product/Wear the code'}><img alt="ecommerce" className="m-auto h-[30vh] md:m-0 md:h-[30vh] block" src="https://m.media-amazon.com/images/I/41uirB8jqmL.jpg" /></Link>
              </span>
              <Link style={{ textDecoration: 'none', color: 'black' }} href={'/product/Wear the code'}><div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Coffee mugs</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p className="mb-0">₹ 249.00</p>
              </div></Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-3">
              <span className="block relative  rounded overflow-hidden">
                <Link href={'product/Wear the code'}><img alt="ecommerce" className="m-auto h-[30vh] md:m-0 md:h-[30vh] block" src="https://m.media-amazon.com/images/I/51lrgnIWOKL._SX679_.jpg" /></Link>
              </span>
              <Link style={{ textDecoration: 'none', color: 'black' }} href={'/product/Wear the code'}><div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Coffee mugs</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                <p className="mb-0">₹ 249.00</p>
              </div></Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-3">
              <span className="block relative rounded overflow-hidden">
                <Link href={'product/Wear the code'}><img alt="ecommerce" className="m-auto h-[30vh] md:m-0 md:h-[30vh] block" src="https://m.media-amazon.com/images/I/610rmi2VeeL._SX679_.jpg" /></Link>
              </span>
              <Link style={{ textDecoration: 'none', color: 'black' }} href={'/product/Wear the code'}><div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Coffee mugs</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                <p className="mb-0">₹ 249.00</p>
              </div></Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-3">
              <span className="block relative  rounded overflow-hidden">
                <Link href={'product/Wear the code'}><img alt="ecommerce" className="m-auto h-[30vh] md:m-0 md:h-[30vh] block" src="https://m.media-amazon.com/images/I/61c0e-k1L1L._SX679_.jpg" /></Link>
              </span>
              <Link style={{ textDecoration: 'none', color: 'black' }} href={'/product/Wear the code'}><div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Coffee mugs</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <p className="mb-0">₹ 249.00</p>
              </div></Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-3">
              <span className="block relative  rounded overflow-hidden">
                <Link href={'product/Wear the code'}><img alt="ecommerce" className="m-auto h-[30vh] md:m-0 md:h-[30vh] block" src="https://m.media-amazon.com/images/I/41TfR4kVswL._SX679_.jpg" /></Link>
              </span>
              <Link style={{ textDecoration: 'none', color: 'black' }} href={'/product/Wear the code'}><div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Coffee mugs</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p className="mb-0">₹ 249.00</p>
              </div></Link>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) { // if there is already a connection
    await mongoose.connect(process.env.MONGO_URI);

  }
  let products = await Product.find({ category: 'Mugs' });//sob product peye jabo
  let mugs = {};
  for (let item of products) {
    if (item.title in mugs) {
      if (!(mugs[item.title].color.includes(item.color)) && item.availableQty > 0) {
        mugs[item.title].color.push(item.color);
      }
      if (!(mugs[item.title].size.includes(item.size)) && item.availableQty > 0) {
        mugs[item.title].size.push(item.size);
      }
    }
    else {
      mugs[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        mugs[item.title].color = [item.color];
        mugs[item.title].size = [item.size];
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(mugs)) }, // will be passed to the page component as props
  }
}

export default Mugs
