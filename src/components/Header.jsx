'use client'
import React from 'react'
import Logo from '@/app/assets/logo.png'
import Image from 'next/image'
import { NavbarItems } from '@/app/assets'
import Link from 'next/link'
import { NavbarIsActive, NavbarStyles } from '@/app/utils'
import { usePathname } from 'next/navigation'
function Header() {
    const currentPath = usePathname()
    console.log(currentPath)
    const NavbarIsActiveFn = (path) => {
        if(path === currentPath){
            return NavbarIsActive
        }
    }
  return (
    <header className='px-[54px] py-6'>
        <div className='flex items-center justify-between'>
            <Image src={Logo} width={185} alt="logo"/>
            <nav className='space-x-[75px]'>
                {NavbarItems.map(item => <Link key={item.id} className={`${NavbarStyles} ${NavbarIsActiveFn(item.link)}`} href={item.link}>{item.title}</Link>)}
            </nav>
        </div>
    </header>
  )
}

export default Header