import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useOrderContext } from "../../../context/Context";
import { api } from "../../../lib/api";

const Basket = () => {
  const navigate = useNavigate();
  const [{ selectedProducts, user }, dispatch] = useOrderContext();
  const totalPrice = selectedProducts.reduce((acc, curr) => {
    return acc + curr.product.price * curr.quantity;
  }, 0);

  const handleSubmit = async () => {
    try {
      const data = await api.post("/orders", {
        userId: user.id,
        items: selectedProducts.map((item) => {
          return { foodId: item.product.id, quantity: item.quantity };
        }),
      });
      navigate(`/confirmation/${data.data.id}`);
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <button
            onClick={() => {
              navigate("/menu");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <h1 className="text-xl font-semibold">Basket</h1>
          <div className="w-6"></div>
        </div>

        <div className="px-4 py-6">
          <h2 className="mb-2 text-lg font-semibold">Order Item (s)</h2>
          {selectedProducts.map((item) => {
            const itemTotalPrice = item.quantity * item.product.price;

            return (
              <div className="p-4" key={item.product.id}>
                <div className="flex flex-col justify-between mb-2">
                  <div className="flex flex-row justify-between items-center mb-2">
                    <span>{item.product.name}</span>
                    <span className="font-bold">Rp {itemTotalPrice}</span>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <button className="text-sm text-green-600">Edit</button>
                    <div className="">
                      <button
                        className="w-8 h-8 text-gray-600 bg-gray-300 rounded-lg text-lg font-semibold"
                        onClick={() => {
                          dispatch({
                            type: "removeOrder",
                            payload: { product: item.product },
                          });
                        }}
                      >
                        -
                      </button>
                      <span className="mx-4 font-bold">{item.quantity}</span>
                      <button
                        className="w-8 h-8 text-white bg-yellow-400 rounded-lg text-lg font-semibold"
                        onClick={() => {
                          dispatch({
                            type: "addOrder",
                            payload: { product: item.product },
                          });
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 p-4 w-[100%] h-[50%] bg-white rounded-t-3xl boxShadow absolute bottom-0">
          <div className="divide-y divide-black border-b">
            <h2 className="mb-3 text-lg font-semibold devide-y-2">
              Payment Details
            </h2>
          </div>
          <div className="rounded-lg mt-2">
            <div className="flex justify-between mb-1">
              <span>Subtotal</span>
              <span>Rp {totalPrice}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>SC</span>
              <span>Rp 0</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>PB1</span>
              <span>Rp 0</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total Addition</span>
              <span>Rp {totalPrice}</span>
            </div>
          </div>
          <div className="px-4 py-4 space-y-5 absolute bottom-2 left-0 right-0 mx-auto">
            <button
              onClick={handleSubmit}
              className="w-full px-4 py-2 text-white bg-yellow-500  hover:bg-black transition duration-300 rounded-lg"
            >
              Submit Order
            </button>
            <p className="mt-2 text-sm text-center text-red-600">
              Submitted order cannot be cancelled
            </p>
          </div>
        </div>
      </div>
    </>
  );
  //     }}
  //   </orderContext.Consumer>;
};

export default Basket;
