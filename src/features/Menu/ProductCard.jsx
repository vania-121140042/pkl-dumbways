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

const ProductCard = (props) => {
  // const {addItem} = use();
  return (
    <div class="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      <div className="relative w-full h-36 flex-shrink-0">
        <img
          src={props.image}
          alt="Product Image"
          class="w-full h-full object-cover"
        />
        <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          New
        </span>
      </div>
      <div class="p-4 flex-grow flex flex-col justify-between">
        <span className="text-black font-bold ">{props.name}</span>
        <p className="text-black font-semibold mt-2">Rp{props.price}</p>
        <button
          name="addorder"
          className=" mt-4 bg-yellow-500 text-white w-full py-2 rounded-md  hover:bg-black transition flex items-center justify-center"
          onClick={props.onClick}
        >
          + Add
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
