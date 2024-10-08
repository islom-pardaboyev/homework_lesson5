import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../(layout)/sidebar/page'
import React from 'react'

function Layout({children}) {
  return (
    <main className='flex flex-col justify-between'>
        <Header/>
        <Sidebar/>
        {children}
        <Footer/>
    </main>
  )
}

export default Layout