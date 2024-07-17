import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  return (
      <div className="min-h-screen bg-white m-4">
        <div className="flex items-center justify-center px-4 py-2 border-b p-4">
          <div className="w-full max-w-md text-center">
            <div className="text-black text-lg font-medium ">
              Ayam Kampux at Setiabudi One
            </div>
            <div className="text-gray-400 font-light text-xs">
            18, Jl. H. R. Rasuna Said No.18, RT.18/RW.2, Kuningan, Karet Kuningan, 
            Setiabudi, South Jakarta City, Jakarta 12920
            </div>
          </div>
        </div>

        <div className="text-center mb-4 mt-3">
          <div className="flex justify-center items-center mb-2 ">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <div className="text-green-600 text-xl font-medium">
            Your order has been successfully 
            sent to kitchen
          </div>
        </div>

        <div className="border border-gray-200 rounded-md mb-4">
          <div className="bg-gray-200 p-3 rounded-t-md">
            <h2 className="text-black-500 font-medium">Order Information</h2>
          </div>
          <div className="p-4 border-gray-200 ">
          <div className="border-b pb-3 mb-2">
            <div className="flex justify-between items-center">
              <div className="text-center flex-1">
                <span className="block text-black-500 font-bold">Order ID</span>
                <span className="block text-black font-bold text-2xl">663947569</span>
              </div>
            <div className="h-10 border-l border-gray-300 mx-4"></div>
            <div className="text-center flex-1">
              <span className="block text-black-500 font-bold">Queue Number</span>
              <span className="block text-black font-bold text-2xl">A6</span>
              </div>
            </div>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-black-500 font-bold">Phone Number</span>
              <span className="text-black font-medium">+6282132017582</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-black-500 font-bold ">Table</span>
              <span className="text-black font-medium">10</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-black-500 font-bold">Order Type</span>
              <span className="text-black font-medium">Dine In</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-black-500 font-bold">Order Time</span>
              <span className="text-black font-medium">2023-01-04 14:26:00</span>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-md mb-4">
          <div className="bg-gray-200 p-3 rounded-t-md">
            <h2 className="text-black-500 font-medium">Order Summary</h2>
          </div>
          <div className="p-3 mb-2">
            <div className="flex justify-between font-bold text-lg">
                <span className="text-black-500">Qty</span>
                <span className="text-black-500 flex-1 pl-10">Item</span>
                <span className="text-black-500 text-right">Price</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-black font-medium">1</span>
                <span className="text-black font-medium flex-1 pl-16">Ayam Dada Besar Voucher</span>
                <span className="text-black font-medium text-right">Rp 0</span>
              </div>
            </div>
            <div className="border-t-2 border-dashed border-gray-200 ">
            <div className="flex justify-between bg-yellow-200 p-4">
              <span className="text-black font-semibold">Grand Total</span>
              <span className="text-black font-medium">Rp 0</span>
            </div>
           </div>
          </div>

        <div className=" text-black-500 font-bold">
            Pay at Cashier
        </div>
          <div className="text-center">
            <img src= "https://i.pinimg.com/564x/aa/33/05/aa33051122786760db5479d9a10b1611.jpg"
              alt="Cashier" 
              className="w-64 h-44 mx-auto" />
            <div className="text-black text-lg font-medium">
              Please come to cashier
            </div>
            <div className="text-gray-500 text-sm mb-8">
              <span> Prevent the spread of Corona virus by using e-payment (non-cash) </span>
            </div>
          </div>
          
          <button onClick={()=>{
            navigate("/menu");
          }}
          className="w-full bg-yellow-500 text-white p-2 rounded-md font-medium flex gap-4 items-center justify-center">
            <img className="w-6 h-6" src="\src\assets\bell.png"/>
            <span className="mr-2">Continue Browsing</span>
          </button>
      </div>
  );
};

export default OrderConfirmation;