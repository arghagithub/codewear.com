import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiFillCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineClear } from 'react-icons/ai';
import { MdOutlineShoppingCartCheckout, MdAccountCircle } from 'react-icons/md';


const Navbar = (props) => {
    const { cart, addtocart, removefromcart, clearcart, subtotal } = props;
    const ref = useRef();
    const togglecart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full');
            ref.current.classList.add('translate-x-0');
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0');
            ref.current.classList.add('translate-x-full');
        }
    }
    return (
        <div className='flex flex-col items-center justify-center md:flex-row md:justify-start shadow-xl sticky top-0 z-10 bg-white'>
            <div className="logo mx-2">
                <Link href={'/'} ><Image
                    src="/logo.png"
                    alt="Picture of the author"
                    width={180}
                    height={30}
                /></Link>
            </div>
            <div className="navbar mt-3">
                <ul className="flex font-bold space-x-8">
                    <Link style={{ textDecoration: 'none', color: 'black' }} href={'/Tshirt'}><li className='text-pink-600 text-sm md:text-md hover:text-black'>T-shirts</li></Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} href={'/Hoodies'}><li className='text-pink-600 text-sm md:text-md hover:text-black'>Hoodies</li></Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} href={'/Stickers'}><li className='text-pink-600 text-sm md:text-md hover:text-black'>Stickers</li></Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} href={'/Mugs'}><li className='text-pink-600 text-sm md:text-md hover:text-black'>Mugs</li></Link>
                </ul>
            </div>
            <div className="cart mx-1 mt-3 absolute top-0 right-1">
                <Link href={'/Login'}><button type="button" className="text-xl mx-2 md:text-4xl text-black"><MdAccountCircle /></button></Link>
                <button onClick={togglecart} type="button" className="text-xl mx-2 md:text-4xl"><AiOutlineShoppingCart /></button>
            </div>

            <div ref={ref} className={`sidecart w-72 h-[100vh] absolute overflow-y-scroll top-0 right-0 p-6 bg-pink-100 z-20 transform ${Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'} transition-transform`}>
                <h2 className="text-xl font-bold text-center">Your Cart</h2>
                <span onClick={togglecart} className="top-2 right-2 absolute cursor-pointer text-3xl text-pink-800"><AiFillCloseCircle /></span>
                <ol className='list-decimal space-y-4 mt-3'>
                    {
                        (Object.keys(cart).length === 0) && <div className='mt-3 ml-5 font-semibold'>No items in the cart</div>
                    }
                    {
                        Object.keys(cart).map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className="ietm flex justify-center">
                                        <div className='w-2/3 text-left px-1  text-pink-800 font-bold'>{cart[item].name} : {cart[item].size} / {cart[item].variant}</div>
                                        <div className='w-1/3 font-bold flex  items-center  justify-center' ><AiOutlineMinusCircle onClick={() => { removefromcart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant) }} className='text-2xl mx-2 cursor-pointer text-pink-500 font-bold' /> {cart[item].qty} <AiOutlinePlusCircle onClick={() => { addtocart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant) }} className=' cursor-pointer text-pink-500 fint-bold text-2xl ml-2' /></div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ol>
                <div className='text-center'>
                    <span className="total mt-6 font-bold">Subtotal:&nbsp;&nbsp;{subtotal}</span>
                </div>
                <div className="flex justify-center ml-5">
                    <Link style={{ textDecoration: 'none' }} href={'/Check'}><button className="flex mx-auto mt-3 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-md"> <MdOutlineShoppingCartCheckout className='mt-[4px] mr-[6px]' />Checkout</button></Link>
                    <button onClick={clearcart} className="flex mx-auto mt-3 text-white bg-pink-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-md"> <AiOutlineClear className='mr-[6px] mt-[4px]' />Clear cart</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar
