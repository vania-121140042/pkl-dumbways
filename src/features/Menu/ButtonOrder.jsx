const ButtonOrder = ({price, onAdd}) => (
    <button onClick={(onAdd)=>{
    navigate("/order");
    }} className="bg-yellow-500 p-2 rounded-md flex items-center">
    <span className="text-white mr-2 text-lg font-bold">Rp {price} </span>
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
  )
export default ButtonOrder