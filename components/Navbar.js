import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className='flex flex-col items-center justify-center md:flex-row md:justify-start shadow-xl'>
            <div className="logo mt-2 mx-2">
                <Image
                    src="/logo.png"
                    alt="Picture of the author"
                    width={180}
                    height={30}
                />
            </div>
            <div className="navbar mt-3">
                <ul className="flex font-bold space-x-8">
                    <Link style={{ textDecoration: 'none', color: 'black' }} href={'/'}><li className='text-pink-600 text-sm md:text-lg'>T-shirts</li></Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} href={'/'}><li className='text-pink-600 text-sm md:text-lg'>Hoodies</li></Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} href={'/'}><li className='text-pink-600 text-sm md:text-lg'>Stickers</li></Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} href={'/'}><li className='text-pink-600 text-sm md:text-lg'>Mugs</li></Link>
                </ul>
            </div>
            <div className="cart mx-1 mt-3 absolute top-0 right-1">
                <button type="button" className="text-xl mx-2 md:text-4xl"><AiOutlineShoppingCart /></button>
            </div>


        </div>
    )
}

export default Navbar
