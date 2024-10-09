import React, { useState } from 'react'
import {useParams} from 'react-router-dom';
import {products} from '../data/products'
import { useEffect } from 'react';
import{useDispatch} from 'react-redux';
import{ addToCart} from '../stores/cart';
const Detail = () => {
  const {slug} = useParams();
  const[detail,setDetail]=useState([]);
  const [quantity,setQuantity]=useState(1);
  const dispatch=useDispatch();
  useEffect(()=>{
    const findDetail=products.filter(product=>product.slug==slug);
    if(findDetail.length>0){
      setDetail(findDetail[0]);
    }
    else{
      window.location.href='/';
    }

  },[slug])
  const handleMinusQuantity=()=>{
    setQuantity(quantity-1<1?1:quantity-1);
  }

  const handlePlusQuantity=()=>{
    setQuantity(quantity+1);
  }

  const handleAddtoCart=()=>{
    dispatch(addToCart({
      productId:detail.id,
      quantity:quantity
    }))
  }
  return (
    <div className='overflow-x-hidden'>


    <h2 className='text-3xl text-center pb-10 my-2'>Product Detail</h2>
      <div className="grid grid-cols-2 gap-5 mt-5 pt-12 h-screen ">
   
        <div >
          <img src={detail.image} alt="" className='w-full ' />
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-4xl uppercase font-bold'>{detail.name}</h1>
          <p className='font-bold text-3xl'>{detail.price}</p>
          <div className='flex gap-5'>
            <div className='flex gap-2 justify-center items-center'>
              <button onClick={handleMinusQuantity} className='bg-gray-100 h-full w-10 text-xl rounded-xl flex justify-center items-center'>-</button>
              <span className='bg-gray-200 h-full w-20 text-xl rounded-xl flex justify-center items-center'>{quantity}</span>
              <button onClick={handlePlusQuantity} className='bg-gray-100 h-full w-10 text-xl rounded-xl flex justify-center items-center'>+</button>
            </div>
            <button onClick={handleAddtoCart} className='bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl'>Add To Cart</button>
          </div>
          <p>{detail.desc}</p>
        </div>
      </div>











    </div>
  )
}

export default Detail