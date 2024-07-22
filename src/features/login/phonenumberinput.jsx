import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PhoneNumberInput() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const handleInput = (event) =>{
      setPost({...post,[event.target.phoneNumber]: event.target.value})
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Hai!!!")
      axios.post('https://loud-corners-suffer.loca.lt/login', { phoneNumber })
      .then(Response => {
        console.log(Response);
        navigate('/Menu');
      }) .catch (error => console.error('Error submitting phone number:', error))
      }
    
    return(
      <>
      <div>
      <div className="flex items-center border border-gray-200 rounded-md mb-4 mt-10">
            <div className="bg-yellow-500 text-white p-2 rounded-l-md flex items-center">
              <img className="w-6 h-6 mr-2" src="/src/assets/indo.png" placeholder="indonesian flag"/>
              <span className="mr-2 text-lg">+62</span>
      </div>
      <form onSubmit={handleSubmit} className="w-full">
       <input
        type="text"
        placeholder="Phone Number"
        className="flex-1 p-2 rounded-r-md "
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      /> 
    </form>
    </div>

    <button onClick={()=>{
    navigate("/menu");
    }} className="w-full bg-yellow-500 hover:bg-black transition duration-300 ease-in-out text-white p-2 rounded-md font-medium mt-5"> Lets Go </button>
    </div>
    
    </>
    );
}
export default PhoneNumberInput;

