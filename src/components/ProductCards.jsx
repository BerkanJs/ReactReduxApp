import React from 'react'
import {Link} from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import {useSelector,useDispatch} from 'react-redux'
import {addToCart} from '../stores/cart';
const ProductCards = (prop) => {
    const carts=useSelector(store=>store.cart.items)
    console.log(carts)
    const {id,name,price,image,slug}=prop.data;
    const dispatch=useDispatch();
    const handleAddToCart=()=>{
      dispatch(addToCart({
        productId:id,
        quantity:1
      }));
      

    }
  return (
    <div className='bg-white p-5 rounded-xl shadow-sm flex flex-col items-center justify-center space-y-5'>
        <Link to={slug}>
        <img src={image} className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]' alt="" />
        <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
   
        <p className='text-2xl font-medium text-center'>{price}$</p>
 
  
        
        
        </Link>
        <button onClick={handleAddToCart} className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 duration-150 flex gap-2 items-center'> <TiShoppingCart className='text-xl' /> Add To Cart</button>



    </div>
  )
}


export default ProductCards