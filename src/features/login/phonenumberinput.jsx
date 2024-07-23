import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PhoneNumberInput(props) {
  return (
    <>
      <div>
        <div className="flex items-center border border-gray-200 rounded-md mb-4 mt-10">
          <div className="bg-yellow-500 text-white p-2 rounded-l-md flex items-center">
            <img
              className="w-6 h-6 mr-2"
              src="/src/assets/indo.png"
              placeholder="indonesian flag"
            />
            <span className="mr-2 text-lg">+62</span>
          </div>
          <input
            type="text"
            placeholder="Phone Number"
            className="flex-1 p-2 rounded-r-md "
            {...props}
          />
        </div>
      </div>
    </>
  );
}
export default PhoneNumberInput;
