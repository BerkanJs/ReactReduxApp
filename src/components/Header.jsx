import React, {useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import {useSelector, useDispatch} from 'react-redux'
import { toggleStatusTab } from '../stores/cart';
const Header = () => {
  const [totalQuantity,setTotalQuantity]=useState(0);
  const carts =useSelector(store=>store.cart.items);
  const dispatch = useDispatch();
  useEffect(()=>{
    let total=0;
    carts.forEach(item=>total+=item.quantity);
    setTotalQuantity(total);

  },[carts])

  const handleOpenTabCart=()=>{
    dispatch(toggleStatusTab());
  }

  return (

    <header className='flex justify-between items-center'>



      <Link to="/" className='text-xl font-semibold'>Home</Link>
      <div onClick={handleOpenTabCart}className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative'><TiShoppingCart className='text-3xl' />
      <span className='absolute top-2/3 right-1/2 bg-red-500 text-white tex-sm w-5 h-5 rounded-full flex justify-center items-center'>{totalQuantity}</span>
      
      </div>


   

      </header>




  )
}

export default Header