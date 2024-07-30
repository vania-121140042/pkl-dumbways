import { createContext, useContext, useReducer, useState } from "react";

const initialState = {
  selectedProducts: [],
  user: null,
};

const reducer = (state, action) => {
  let response = state;

  switch (action.type) {
    case "addOrder":
      const findProduct = state.selectedProducts.find(
        (item) => item.product.id === action.payload.product.id
      );

      // logic untuk nambah data pertama kali
      if (!findProduct) {
        // setSelectedProducts((prev) => [...prev, { product, quantity: 1 }]);
        return {
          ...state,
          selectedProducts: [
            ...state.selectedProducts,
            { product: action.payload.product, quantity: 1 },
          ],
        };
      }

      return {
        ...state,
        selectedProducts: state.selectedProducts.map((item) => {
          if (item.product.id !== action.payload.product.id) return item;

          return { ...item, quantity: item.quantity + 1 };
        }),
      };
      break;

    case "removeOrder":
      return {
        ...state,
        selectedProducts: state.selectedProducts.map((item) => {
          if (item.product.id !== action.payload.product.id) return item;

          return { ...item, quantity: item.quantity - 1 };
        }),
      };
      break;

    case "addUser":
      return { ...state, user: action.payload.user };
    case "resetOrder":
      return {
        ...state,
        selectedProducts: [],
      };
    default:
      break;
  }
};

export const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <OrderContext.Provider value={[state, dispatch]}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  return useContext(OrderContext);
};

export default OrderContext;
