const ButtonQuantity = ({ orderQuantity, totalprice, onAdd }) => (
  <div className="bg-black rounded-lg p-2 flex flex-row justify-between items-center sticky bottom-2 left-0 right-0 mx-auto">
    <div className="pr-3">
      <img src="/src/assets/bag.png" alt="Bread" className="w-8 h-8" />
    </div>
    <div className="flex flex-col flex-grow">
      <span className="text-white text-lg font-light">Order Quantity</span>
      <span className="text-white text-lg font-bold">
        {orderQuantity} item(s)
      </span>
    </div>

    <button
      onClick={onAdd}
      className="bg-yellow-500 p-2 rounded-md flex items-center"
    >
      <span className="text-white mr-2 text-lg font-bold">Rp {totalprice}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        stroke="white"
        className="w-5 h-5 ml-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  </div>
);

export default ButtonQuantity;

//     <button onClick={onAdd} className="bg-black rounded-lg p-2 flex flex-row justify-between items-center sticky bottom-0">
//       <div className="pr-3">
//       <img
//             src="/src/assets/bag.png"
//             alt="Bread"
//             className="w-8 h-8"
//             />
//       </div>
//       <div className="flex flex-col flex-grow">
//             <span className="text-white text-lg font-light"> Order Quantity </span>
//             <span className="text-white text-lg font-bold"> {orderQuantity} item(s)</span>
//         </div>
//     </button>
//   );

//   export default ButtonQuantity;
