import Image from 'next/image'
import React, { useRef } from 'react'
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiFillCloseCircle,AiOutlinePlusCircle,AiOutlineMinusCircle } from 'react-icons/ai';
import {MdOutlineShoppingCartCheckout} from 'react-icons/md';

const Navbar = () => {
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
        <div className='flex flex-col items-center justify-center md:flex-row md:justify-start shadow-xl'>
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
                    <Link style={{ textDecoration: 'none', color: 'black' }} href={'/Tshirt'}><li className='text-pink-600 text-sm md:text-md'>T-shirts</li></Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} href={'/Hoodies'}><li className='text-pink-600 text-sm md:text-md'>Hoodies</li></Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} href={'/Stickers'}><li className='text-pink-600 text-sm md:text-md'>Stickers</li></Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} href={'/Mugs'}><li className='text-pink-600 text-sm md:text-md'>Mugs</li></Link>
                </ul>
            </div>
            <div onClick={togglecart} className="cart mx-1 mt-3 absolute top-0 right-1">
                <button type="button" className="text-xl mx-2 md:text-4xl"><AiOutlineShoppingCart /></button>
            </div>

            <div ref={ref} className="sidecart w-72 h-full absolute top-0 right-0 p-6 bg-pink-100 z-10 transform translate-x-full transition-transform">
                <h2 className="text-xl font-bold text-center">Your Cart</h2>
                <span onClick={togglecart} className="top-2 right-2 absolute cursor-pointer text-3xl text-pink-800"><AiFillCloseCircle /></span>
                <ol className='list-decimal space-y-4 mt-3'>
                    <li>
                        <div className="ietm flex justify-center">
                            <div className='w-2/3 text-left px-1  text-pink-800 font-bold'>T-shirts- Wear the code : </div>
                            <div className='w-1/3 font-bold flex  items-center  justify-center' ><AiOutlineMinusCircle className='text-2xl mx-2 cursor-pointer text-pink-500 font-bold'/> 1 <AiOutlinePlusCircle className=' cursor-pointer text-pink-500 fint-bold text-2xl ml-2' /></div>
                        </div>
                    </li>
                    <li>
                        <div className="ietm flex">
                            <div className='w-2/3 text-left px-1 text-pink-800 font-bold'>T-shirts- Wear the code : </div>
                            <div className='w-1/3 font-bold flex  items-center justify-center' ><AiOutlineMinusCircle className='text-2xl mx-2 cursor-pointer text-pink-500 font-bold'/> 1 <AiOutlinePlusCircle className=' cursor-pointer text-pink-500 fint-bold text-2xl ml-2' /></div>
                        </div>
                    </li>
                    <li>
                        <div className="ietm flex">
                            <div className='w-2/3 text-left px-1  text-pink-800 font-bold'>T-shirts- Wear the code : </div>
                            <div className='w-1/3 font-bold flex  items-center justify-center' ><AiOutlineMinusCircle className='text-2xl mx-2 cursor-pointer text-pink-500 font-bold'/> 1 <AiOutlinePlusCircle className=' cursor-pointer text-pink-500 fint-bold text-2xl ml-2' /></div>
                        </div>
                    </li>
                    <li>
                        <div className="ietm flex">
                            <div className='w-2/3 text-left px-1  text-pink-800 font-bold'>T-shirts- Wear the code : </div>
                            <div className='w-1/3 font-bold flex items-center  justify-center' ><AiOutlineMinusCircle className='text-2xl mx-2 cursor-pointer text-pink-500 font-bold'/> 1 <AiOutlinePlusCircle className=' cursor-pointer text-pink-500 fint-bold text-2xl ml-2' /></div>
                        </div>
                    </li>
                </ol>
                <button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-md"> <MdOutlineShoppingCartCheckout className='m-[6px]'/>Checkout</button>
            </div>

        </div>
    )
}

export default Navbar
