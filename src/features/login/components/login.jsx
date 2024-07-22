import { useEffect, useRef } from "react";
import { redirect, useNavigate } from "react-router-dom";
import PhoneNumberInput from "../phonenumberinput";
// import PhoneNumberInput from "../phonenumberinput";

const Login = () => {
  const navigate = useNavigate();
    return (
      <div className="min-h-screen items-center p-4">

          <div className="text-center">
            <p className="text-yellow-500 text-3xl font-bold leading-none font-pacifico">subways</p>
            <div className="mt-2">
              <img className="mx-auto" src="/src/assets/circle.png"/>
              <div className="relative flex items-center justify-center">
                <div className="absolute top-0 flex justify-center items-center">
                </div>
                {/* <div className="w-32 h-32 rounded-full bg-gray-200"></div> */}
              </div>
            </div>

            <div className="text-black text-lg font-medium mt-8">
              Subway at Setiabudi One
            </div>
            <div className="text-gray-500 text-sm">
              18, Jl. H. R. Rasuna Said No.18, RT.18/RW.2, Kuningan, Karet Kuningan,
              Setiabudi, South Jakarta City, Jakarta 12920 
            </div>
          </div>

          <div className="mt-8 border-b border-gray-500"></div>

          <div className="mb-4 mt-8">
            <img 
            src= "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/xa5yq47nn2j-3%3A1927?alt=media&token=32eea38f-a959-4a93-97e3-fb4d55ea2a1f"
            alt="Subway Offer" 
            className="w-full rounded-md"/>
          </div>

          <PhoneNumberInput />

          {/* <div className="flex items-center border border-gray-200 rounded-md mb-4 mt-10">
            <div>
            <PhoneNumberInput onPhoneNumberSubmit={handlePhoneNumberSubmit} />
            <button
            onClick={handlePhoneNumberSubmit}
            className="w-full bg-yellow-500 hover:bg-black transition duration-300 ease-in-out text-white p-2 rounded-md font-medium mt-10"
            >
            Let's Go
        </button>
      
          <div className="flex items-center border border-gray-200 rounded-md mb-4 mt-10">
            <div className="bg-yellow-500 text-white p-2 rounded-l-md flex items-center">
              <img className="w-6 h-6 mr-2" src="/src/assets/indo.png" placeholder="indonesian flag"/>
              <span className="mr-2 font-bold text-lg">+62</span>
            </div>
            <input
              type="text"
              placeholder="Phone Number"
              className="flex-1 p-2 rounded-r-md "
            />
          </div>

          <button onClick={()=>{
            navigate("/menu");
          }} className="w-full bg-yellow-500 hover:bg-black transition duration-300 ease-in-out text-white p-2 rounded-md font-medium mt-10"> Lets Go </button>
          </div> */}

          <div className="text-center text-gray-500 text-xs mt-4">
          By clicking let’s go, you agree to all applicable {' '}
            <div className="text-yellow-500">Terms of Use and Privacy Policy</div>
          </div>


          <div className="mt-4">
              <div className="flex mb-2">
                <input type="checkbox" className="mt-1 form-checkbox h-4 w-3 bg-green-500 " />
                <label htmlFor="checkbox1" className="ml-2 text-sm text-gray-600">
                I agree to signup for the free membership program for active mobile number only
                </label>
              </div>

              <div className="mt-4">
                <div className="flex mb-2">
                  <input type="checkbox" className="mt-1 form-checkbox h-4 w-3 bg-green-500" />
                  <label htmlFor="checkbox1" className="ml-2 text-sm text-gray-600">
                  send me subways news, event, and exclusive offers
                  </label>
              </div>
            </div>
          </div>  
        </div>
    );
  };
  
  export default Login;
  