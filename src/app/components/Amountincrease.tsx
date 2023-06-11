'use client';

import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'


export default function Amountincrease() {

     const [amount, setAmount] = useState(1)
        const setDecrease = () => {
      amount > 1 ? setAmount(amount - 1) : setAmount(1)
  };
    const setIncrease = () => {
      amount >= 1 ? setAmount(amount + 1) : setAmount(6)
    }
  return (
    <div className='flex my-8'>
        <div className='text-2xl'>
            <h1>Quantity:</h1>
        </div>
        <div className='flex ml-4'>
            <button onClick={() => setDecrease()} className='bg-[#cdcdcd] pl-4 pr-4 rounded-full'>
                <FaMinus />
            </button>
            <div className='text-2xl mx-6'>{amount}</div>
            <button onClick={() => setIncrease()} className='outline pl-4 pr-4 rounded-full'>
                <FaPlus />
            </button>
        </div>
    </div>

  )
}
