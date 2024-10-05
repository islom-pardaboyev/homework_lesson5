
import Header from '../../components/Header'
import React from 'react'

function Layout({children}) {
  return (
    <div>
        <Header/>

        {children}
    </div>
  )
}

export default Layout