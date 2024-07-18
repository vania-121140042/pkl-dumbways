import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PhoneNumberInput() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (phoneNumber) {
        try {
          await axios.post('https://full-foxes-punch.loca.lt/login', { phoneNumber });
          navigate('/menu');
        } catch (error) {
          console.error('Error submitting phone number:', error);
        }
      }
    };

    return(
    <div className="bg-yellow-500 text-white p-2 rounded-l-md flex items-center">
        <img className="w-6 h-6 mr-2" src="/src/assets/indo.png" placeholder="indonesian flag"/>
        <span className="mr-2 font-bold text-lg">+62</span>
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
       <input
        type="text"
        placeholder="Phone Number"
        className="flex-1 p-2 rounded-r-md "
      /> 
    </form>
    </div>
    );
};
export default PhoneNumberInput;

