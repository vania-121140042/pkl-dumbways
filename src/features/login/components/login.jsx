import { useEffect, useRef } from "react";
import { redirect, useNavigate } from "react-router-dom";
import PhoneNumberInput from "../phonenumberinput";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { api } from "../../../lib/api";
import { useOrderContext } from "../../../context/Context";

const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit, formState, control } = useForm();

  console.log(formState.errors);

  const onSubmit = async (value) => {
    console.log("Hai!!!", value);
    api
      .post("/login", {
        phoneNumber: value.phoneNumber,
      })
      .then((Response) => {
        dispatch({
          type: "addPhoneNumber",
          payload: {
            phoneNumber,
          },
        });
        console.log(Response);
        navigate("/Menu");
      })
      .catch((error) => console.error("Error submitting phone number:", error));
  };

  return (
    <div className="min-h-screen items-center p-4">
      <div className="text-center">
        <p className="text-yellow-500 text-3xl font-bold leading-none font-pacifico">
          AYAM KAMPUX
        </p>
        <div className="mt-2">
          <img className="mx-auto" src="/src/assets/circle.png" />
          <div className="relative flex items-center justify-center">
            <div className="absolute top-0 flex justify-center items-center"></div>
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
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/xa5yq47nn2j-3%3A1927?alt=media&token=32eea38f-a959-4a93-97e3-fb4d55ea2a1f"
          alt="Subway Offer"
          className="w-full rounded-md"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="phoneNumber"
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            return <PhoneNumberInput {...field} />;
          }}
        />

        <button
          className="w-full bg-yellow-500 hover:bg-yellow-600 transition duration-300 ease-in-out text-white p-3 rounded-md font-medium mt-5"
          type="submit"
        >
          Let's Go
        </button>

        <div className="text-center text-gray-500 text-xs mt-4">
          By clicking lets go, you agree to all applicable
          <div className="text-yellow-500">Terms of Use and Privacy Policy</div>
        </div>

        <div className="mt-4">
          <div className="flex mb-2">
            <Controller
              name="isAgreed"
              control={control}
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <input
                    {...field}
                    type="checkbox"
                    className="mt-1 form-checkbox h-4 w-3 bg-green-500 "
                  />
                );
              }}
            />

            <label htmlFor="checkbox1" className="ml-2 text-sm text-gray-600">
              I agree to signup for the free membership program for active
              mobile number only
            </label>
          </div>

          <div className="mt-4">
            <div className="flex mb-2">
              <Controller
                name="isSendEvent"
                control={control}
                rules={{ required: true }}
                render={({ field }) => {
                  return (
                    <input
                      {...field}
                      type="checkbox"
                      className="mt-1 form-checkbox h-4 w-3 bg-green-500 "
                    />
                  );
                }}
              />

              <label htmlFor="checkbox1" className="ml-2 text-sm text-gray-600">
                send me subways news, event, and exclusive offers
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
