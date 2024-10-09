import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import CartTab from './cartTab'
const Layout = () => {
  return (
    <div className='bg-zinc-200'>


      <main className='w-[1200px] max-w-full m-auto p-5'>
        <Header/>
        <Outlet/>



      </main>
      <CartTab/>










    </div>
  )
}

export default Layout