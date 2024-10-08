import React from 'react'
import Button from './Button'

function Footer() {
  return (
<footer>
    <div className='container'>
        <div className='grid py-[48px] grid-cols-4 border-b border-gray-500'>
            <div className="col-span-1 flex flex-col gap-[50px]">
                <h1 className='font-bold text-2xl'>Funiro.</h1>
                <p className='text-gray'>400 University Drive Suite 200 Coral Gables,
                FL 33134 USA</p>
            </div>
            <div className="col-span-1 flex flex-col gap-[55px] ">
                <h1 className='font-medium text-gray'>Links</h1>
                <nav className='flex flex-col gap-[46px] font-medium'>
                    <a href="/">Home</a>
                    <a href="/shop">Shop</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact</a>
                </nav>
            </div>
            <div className="col-span-1 flex flex-col gap-[55px] ">
                <h1 className='font-medium text-gray'>Help</h1>
                <nav className='flex flex-col gap-[46px] font-medium'>
                    <a href="#">Payment Options</a>
                    <a href="#">Returns</a>
                    <a href="#">Privacy Policies</a>
                </nav>
            </div>
            <div className="col-span-1 flex flex-col gap-[55px] ">
                <h1 className='font-medium text-gray'>Newsletter</h1>
                <label htmlFor="" className='flex items-center gap-[11px]'>
                    <input type="text" placeholder='Enter your email' className='outline-none border-b ' />
                    <Button styles={'uppercase font-medium border-b'} title={'Subscribe'}/>
                </label>
            </div>
        </div>
        <p className='my-[38px]'>2023 furino. All rights reverved</p>
    </div>
</footer>
  )
}

export default Footer