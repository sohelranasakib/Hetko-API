import React from 'react'
import Container from './Container'
import chair01 from "../assets/chair01.png"
import Flex from './Flex'
import { FaCartShopping } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";







const Featured = ({item}) => {
 
 
  return (
    <>
          <div className=" lg:w-[100%] w-full p-[10px]">
            <div className=" relative  w-[100%] group hover:bg-[#2F1AC4] ">
              <img className="bg-[#F6F7FB] w-[100%]" src={item.thumbnail} alt="" />
            <div className=' flex absolute lg:top-[30px] top-[10px] left-5 lg:opacity-[0] lg:group-hover:top-[30px] duration-500 ease-in-out group-hover:opacity-[1] gap-x-2'>
                <FaCartShopping />
                <FaHeart />
                <FaSearchPlus />
                </div>
              <h3 className=" lg:opacity-[0] lg:group-hover:top-[240px] duration-500 ease-in-out group-hover:opacity-[1]  absolute lg:top-[340px] top-[150px] left-[50%] translate-x-[-50%] lg:h-[40px] w-[100px] flex justify-center items-center bg-[#08D15F] rounded-[5px] text-[#fff] text-[13px]">View Details</h3>
              <div className=" w-[100%] flex justify-center items-center">
                <div className=" text-center my-[20px]">
                  <h2 className=" group-hover:text-[#fff] text-[#FB2E86] lg:text-[22px] text-[13px] font-bold">{item.title}</h2>
                  <h2 className=" group-hover:text-[#fff] text-[#151875] lg:text-[18px] text-[12px]">{item.category}</h2>
                  <h2 className=" group-hover:text-[#fff] text-[#151875] lg:text-[18px] text-[13px]">${item.price}</h2>
                </div>
              </div>
            </div>
          </div>
    
    </>

  )
}

export default Featured
