import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Cartitems from './Cartitems';
import { toggleStatusTab } from '../stores/cart';
const cartTab = () => {
  const carts = useSelector(store=>store.cart.items);
  const statusTab=useSelector(store=>store.cart.statusTab)
  const dispatch =useDispatch();
  const handleCloseTabCart =()=>{
    dispatch(toggleStatusTab());
  }

  return (
    <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500 ${statusTab===false?"translate-x-full":""}`}>

      <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
      <div>

        {carts.map((data,key)=>(
          <Cartitems key={key} data={data}/>
        ))}

      </div>
      <div className='grid grid-cols-2'>
        <button onClick={handleCloseTabCart} className='bg-black text-white'>Close</button>
        <button className='bg-amber-600 text-white'>Check Out</button>
      </div>



    </div>
  )
}

export default cartTab