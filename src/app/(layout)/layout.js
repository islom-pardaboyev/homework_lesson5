import Footer from '../components/Footer'
import Header from '../components/Header'
import React from 'react'

function Layout({children}) {
  return (
    <main className='flex flex-col  justify-between'>
        <Header/>
        {children}
        <Footer/>
    </main>
  )
}

export default Layout