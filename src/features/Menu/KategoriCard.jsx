const KategoriCard = ({name}) => {
    return (
        <button className="flex flex-col items-center flex-shrink-0">
        <img
          src="\src\assets\good.png"
          alt="For You"
          class="w-10 h-10 mb-1"
        />
        <span className="text-sm relative text-gray-600 hover:text-yellow-500 hover-underline transition duration-300">
          {name}
        </span>
      </button>
    )
 }
 export default KategoriCard