import React from 'react'
import { useState,useEffect } from 'react';
import {products} from '../data/products';
import { useDispatch } from 'react-redux';
import {changeQuantity} from '../stores/cart';



const cartitems = (props) => {
    const {productId ,quantity}=props.data;
    const[detail,setDetail]=useState([]);
    const dispatch=useDispatch();



    useEffect(()=>{
        const findDetail=products.filter(product=>product.id==productId)[0];
        setDetail(findDetail);

    },[productId])

    const handleMinusQuantity=()=>{
        dispatch(changeQuantity({
            productId:productId,
            quantity:quantity-1
        }))
    }
    const handlePlusQuantity=()=>{
        dispatch(changeQuantity({
            productId:productId,
            quantity:quantity+1
        }))
    }
  return (
    <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
        <img src={detail.image} className='w-12' alt="" />
        <h3>{detail.name}</h3>
        <p>{ detail.price * quantity}</p>
        <div className='w-20 flex justify-between'>
            <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handleMinusQuantity}>-</button>
            <span>{quantity}</span>
             <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-600' onClick={handlePlusQuantity}>+</button>
        </div>





    </div>
  )
}

export default cartitems