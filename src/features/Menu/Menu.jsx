import ProductCard from "./ProductCard";
import products from "../../assets/NamaMakanan.json"
import KategoriCard from "./KategoriCard";
import kategori from "../../assets/NamaKategori.json"
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Menu = () => { 
  const [products, setProducts] = useState([]);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddItem = (price) => {
    setOrderQuantity(orderQuantity + 1); 
    setTotalPrice(totalPrice + price);
  };

  useEffect(() => {
    console.log("HALOO!!")
    axios.get('https://loud-corners-suffer.loca.lt/foods')
      .then(response => {
        const data = response.data;
        console.log(data);
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const navigate = useNavigate();
    return (
        <div className="min-h-screen p-4">
            
          {/*Navbar atas yang membuat logo, search, order dan hamburger menu */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div>
                  <svg
                    className="h-28 w-28"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </div>
                <div className="text-yellow-500 font-bold text-2xl absolute left-1/2 transform -translate-x-1/2">
                  Ayam Goreng
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <div>
                  <svg
                    className="h-28 w-28"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    className="h-28 w-28"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
  
            {/*Kategori Menu */}
            <div className="flex overflow-x-auto overflow-hidden no-scrollbar mt-8">
              <div className="flex flex-nowrap justify-between gap-5 w-full">
                 {kategori.map((kategori, index)=>{
                    return <KategoriCard name={kategori.name} picture={kategori.picture}/>
                }) 
                } 
              </div>
            </div>
  
            <div className="bg-yellow-50 border-2 border-yellow-500 rounded-lg p-1 md:p-4 flex flex-row justify-between items-center mt-5 ">
              <span className="text-gray-600 text-[14px] md:text-base ">
                Order now to earn reward points!
              </span>
              <button className="bg-yellow-500 p-2 rounded-md flex items-center justify-between">
                <span className="text-white mr-1 md:mr-2 text-[10px] md:text-base">
                  MY REWARDS
                </span>
                <svg
                  className="w-[16px] h-[16px]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="white"
                  class="w-4 h-4 md:w-6 md:h-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>
              </button>
            </div>
  
            <div className="text-black font-medium text-xl mt-4">
              Special Price
            </div>
  
            <div className="grid grid-cols-2 gap-3 mt-4">
            {/* {products.map((product, index, image)=>{
                return <ProductCard title={product.title} price={product.price} image={product.image}/>
            }) 
            } */}

            {products.map(product => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
              />
              ))
            }
            </div>

            <div className="bg-black rounded-lg p-2 flex flex-row justify-between items-center sticky bottom-2 left-0 right-0 mx-auto">
              <div className="pr-3">
                <img
                  src="/src/assets/bag.png"
                  alt="Bread"
                  className="w-8 h-8"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <span className="text-white text-lg font-light">
                  Order Quantity
                </span>
                <span className="text-white text-lg font-bold">0 item(s)</span>
              </div>

              <button onClick={()=>{
                navigate("/order");
                }} className="bg-yellow-500 p-2 rounded-md flex items-center">
                <span className="text-white mr-2 text-lg font-bold">Rp 0</span>
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
          </div>
    );
  };
  export default Menu;