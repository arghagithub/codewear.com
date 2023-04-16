import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
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
            <div className="cart mx-1 mt-3 absolute top-0 right-1">
                <button type="button" className="text-xl mx-2 md:text-4xl"><AiOutlineShoppingCart /></button>
            </div>


        </div>
    )
}

export default Navbar
