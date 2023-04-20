import React from 'react'
import Link from 'next/link';
import Product from "@/models/Product";
import mongoose from 'mongoose';
const Stickers = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).length === 0 && <p>Sorry, all stickers collections are out of stock. New stock is coming soon. Stay tuned...</p>}
            {
              Object.keys(products).length !== 0 && Object.keys(products).map((item, index) => {
                return (
                  <div key={index} className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-3">
                    <span className="block relative rounded overflow-hidden">
                      <Link passHref={true} href={`/product/${products[item].slug}`}><img alt="ecommerce" className="m-auto h-[30vh] md:m-0 md:h-[30vh] block" src={products[item].img} /></Link>{/*"https://m.media-amazon.com/images/I/51z+XH77z0L.jpg"*/}
                    </span>
                    <Link style={{ textDecoration: 'none', color: 'black' }} href={'/product/Wear the code'}><div className="mt-4 text-center">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wall Stickers</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                      <p className="mb-0">₹ {products[item].price}.00</p>
                    </div></Link>
                  </div>
                )
              })
            }
            {/* <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-3">
              <span className="block relative  rounded overflow-hidden">
                <Link href={'product/Wear the code'}><img alt="ecommerce" className="m-auto h-[30vh] md:m-0 md:h-[30vh] block" src="https://m.media-amazon.com/images/I/61l5jlvmH5L._SX522_.jpg" /></Link>
              </span>
              <Link style={{textDecoration:'none',color:'black'}} href={'/product/Wear the code'}><div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wall Stickers</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                <p className="mb-0">₹ 199.00</p>
              </div></Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-3">
              <span className="block relative  rounded overflow-hidden">
                <Link href={'product/Wear the code'}><img alt="ecommerce" className="m-auto h-[30vh] md:m-0 md:h-[30vh] block" src="https://m.media-amazon.com/images/I/71ZRX1MDF9L._SX522_.jpg" /></Link>
              </span>
              <Link style={{textDecoration:'none',color:'black'}} href={'/product/Wear the code'}><div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wall Stickers</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <p className="mb-0">₹ 199.00</p>
              </div></Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-3">
              <span className="block relative  rounded overflow-hidden">
                <Link href={'product/Wear the code'}><img alt="ecommerce" className="m-auto h-[30vh] md:m-0 md:h-[30vh] block" src="https://m.media-amazon.com/images/I/51Le800MwaL.jpg" /></Link>
              </span>
              <Link style={{textDecoration:'none',color:'black'}} href={'/product/Wear the code'}><div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wall Stickers</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p className="mb-0">₹ 199.00</p>
              </div></Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-3">
              <span className="block relative  rounded overflow-hidden">
                <Link href={'product/Wear the code'}><img alt="ecommerce" className="m-auto h-[30vh] md:m-0 md:h-[30vh] block" src="https://m.media-amazon.com/images/I/710qA8EzjrL._SX522_.jpg" /></Link>
              </span>
              <Link style={{textDecoration:'none',color:'black'}} href={'/product/Wear the code'}><div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wall Stickers</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                <p className="mb-0">₹ 199.00</p>
              </div></Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-3">
              <span className="block relative rounded overflow-hidden">
                <Link href={'product/Wear the code'}><img alt="ecommerce" className="m-auto h-[30vh] md:m-0 md:h-[30vh] block" src="https://m.media-amazon.com/images/I/715YNejm3FL._SX679_.jpg" /></Link>
              </span>
              <Link style={{textDecoration:'none',color:'black'}} href={'/product/Wear the code'}><div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wall Stickers</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                <p className="mb-0">₹ 199.00</p>
              </div></Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-3">
              <span className="block relative  rounded overflow-hidden">
                <Link href={'product/Wear the code'}><img alt="ecommerce" className="m-auto h-[30vh] md:m-0 md:h-[30vh] block" src="https://m.media-amazon.com/images/I/619p57QC4+L._SX522_.jpg" /></Link>
              </span>
              <Link style={{textDecoration:'none',color:'black'}} href={'/product/Wear the code'}><div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wall Stickers</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <p className="mb-0">₹ 199.00</p>
              </div></Link>
            </div>
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-3">
              <span className="block relative  rounded overflow-hidden">
                <Link href={'product/Wear the code'}><img alt="ecommerce" className="m-auto h-[30vh] md:m-0 md:h-[30vh] block" src="https://m.media-amazon.com/images/I/61s0Jb+p4IL._SX522_.jpg" /></Link>
              </span>
              <Link style={{textDecoration:'none',color:'black'}} href={'/product/Wear the code'}><div className="mt-4 text-center">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wall Stickers</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p className="mb-0">₹ 199.00</p>
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
  let products = await Product.find({ category: 'Stickers' });//sob product peye jabo
  let stickers = {};
  for (let item of products) {
    if (item.title in stickers) {
      if (!(stickers[item.title].color.includes(item.color)) && item.availableQty > 0) {
        stickers[item.title].color.push(item.color);
      }
      if (!(stickers[item.title].size.includes(item.size)) && item.availableQty > 0) {
        stickers[item.title].size.push(item.size);
      }
    }
    else {
      stickers[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        stickers[item.title].color = [item.color];
        stickers[item.title].size = [item.size];
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(stickers)) }, // will be passed to the page component as props
  }
}
export default Stickers
