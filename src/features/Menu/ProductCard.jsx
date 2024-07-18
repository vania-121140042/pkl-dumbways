// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function ProductCard({name,price,image}) {
//   const foodName = () => {
//     axios.get('https://tidy-paths-cough.loca.lt/user')
//       .then(res =>{
//       console.log({res,name},{res,image},{res,price})
//       }).catch (error => {
//       console.error('Error, try again vania', error);
//       })
//     }

  const ProductCard = ({name,price,image}) => {
   return (
    <div class="flex flex-col rounded-lg shadow-2xl">
    <div className="relative">
      <img
        src={image}
        alt="Product Image"
        class="w-164 h-210 object-cover rounded-t-lg"
      />
      <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
        New
      </span>
    </div>
    <div class="p-4">
      <span className="text-black font-bold ">
          {name}
      </span>
      <p className="text-black font-semibold mt-2">Rp {price}</p>
      <button className="mt-4 bg-yellow-500 text-white w-full py-2 rounded-md hover:bg-black transition duration-300 flex items-center justify-center">
        <span className="text-lg font-medium">+ Add</span>
      </button>
    </div>
  </div>
   );
};
export default ProductCard