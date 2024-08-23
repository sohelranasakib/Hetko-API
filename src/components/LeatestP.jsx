import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaCartShopping } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import chair0 from "../assets/chair001.png"

const LeatestP = () => {
  return (
    <section className='py-[30px]'>
    <Container>
        <div className=" text-center">
                <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Leatest Products</h3>
                
            </div>
            <div className="lg:flex justify-center px-3 py-10">
                <div className="lg:w-[25%]"></div>
                <div className="lg:w-[50%] w-full   ">
            <ul className='lg:flex  justify-around '>
                    <li  className=' relative  cursor-pointer items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86] after:absolute after:contain-[""] after:bottom-0 after:left-0  after:h-[5px] after:w-[0px] after:bg-[#FB2E86] after:duration-300 after:ease-in-out after:hover:w-[90px]'>New Arrival</li>
                    <li  className=' relative  cursor-pointer items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86] after:absolute after:contain-[""] after:bottom-0 after:left-0  after:h-[5px] after:w-[0px] after:bg-[#FB2E86] after:duration-300 after:ease-in-out after:hover:w-[85px]'>Best Seller</li>
                    <li  className=' relative  cursor-pointer items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86] after:absolute after:contain-[""] after:bottom-0 after:left-0  after:h-[5px] after:w-[0px] after:bg-[#FB2E86] after:duration-300 after:ease-in-out after:hover:w-[70px]'>Featured</li>
                    <li  className=' relative  cursor-pointer items-center font-Sans font-semibold text-[16px] text-[#0D0E43] duration-300 ease-in-out hover:text-[#FB2E86] after:absolute after:contain-[""] after:bottom-0 after:left-0  after:h-[5px] after:w-[0px] after:bg-[#FB2E86] after:duration-300 after:ease-in-out after:hover:w-[95px]'>Special Offer</li>
                    
                </ul>
            </div>
                <div className="lg:w-[25%]"></div>
            </div>
      <Flex className=" justify-between flex-wrap">
        <div className=" lg:w-[30%] w-full p-[10px]">
          <div className=" relative  w-[100%] group ">
            <img className="bg-[#F6F7FB] w-[100%]" src={chair0} alt="" />
            <div className=' absolute bottom-[100px] left-5 opacity-[0] group-hover:bottom-[100px] duration-75 group-hover:opacity-[1] gap-y-3'>
              <FaCartShopping/>
              <FaHeart />
              <FaSearchPlus />
            </div>
            <div className=" flex justify-between">
              <div className="">
              <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>Comfort Handy Craft</h3>
              </div>
              <div className=" flex gap-x-2">
                <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>$42.00</h3>
                <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold text-[red]'>$65.00</h3>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:w-[30%] w-full p-[10px]">
          <div className=" relative  w-[100%] group ">
            <img className="bg-[#F6F7FB] w-[100%]" src={chair0} alt="" />
            <div className=' absolute bottom-[100px] left-5 opacity-[0] group-hover:bottom-[100px] duration-75 group-hover:opacity-[1] gap-y-3'>
              <FaCartShopping/>
              <FaHeart />
              <FaSearchPlus />
            </div>
            <div className=" flex justify-between">
              <div className="">
              <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>Comfort Handy Craft</h3>
              </div>
              <div className=" flex gap-x-2">
                <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>$42.00</h3>
                <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold text-[red]'>$65.00</h3>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:w-[30%] w-full p-[10px]">
          <div className=" relative  w-[100%] group ">
            <img className="bg-[#F6F7FB] w-[100%]" src={chair0} alt="" />
            <div className=' absolute bottom-[100px] left-5 opacity-[0] group-hover:bottom-[100px] duration-75 group-hover:opacity-[1] gap-y-3'>
              <FaCartShopping/>
              <FaHeart />
              <FaSearchPlus />
            </div>
            <div className=" flex justify-between">
              <div className="">
              <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>Comfort Handy Craft</h3>
              </div>
              <div className=" flex gap-x-2">
                <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>$42.00</h3>
                <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold text-[red]'>$65.00</h3>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:w-[30%] w-full p-[10px]">
          <div className=" relative  w-[100%] group ">
            <img className="bg-[#F6F7FB] w-[100%]" src={chair0} alt="" />
            <div className=' absolute bottom-[100px] left-5 opacity-[0] group-hover:bottom-[100px] duration-75 group-hover:opacity-[1] gap-y-3'>
              <FaCartShopping/>
              <FaHeart />
              <FaSearchPlus />
            </div>
            <div className=" flex justify-between">
              <div className="">
              <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>Comfort Handy Craft</h3>
              </div>
              <div className=" flex gap-x-2">
                <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>$42.00</h3>
                <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold text-[red]'>$65.00</h3>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:w-[30%] w-full p-[10px]">
          <div className=" relative  w-[100%] group ">
            <img className="bg-[#F6F7FB] w-[100%]" src={chair0} alt="" />
            <div className=' absolute bottom-[100px] left-5 opacity-[0] group-hover:bottom-[100px] duration-75 group-hover:opacity-[1] gap-y-3'>
              <FaCartShopping/>
              <FaHeart />
              <FaSearchPlus />
            </div>
            <div className=" flex justify-between">
              <div className="">
              <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>Comfort Handy Craft</h3>
              </div>
              <div className=" flex gap-x-2">
                <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>$42.00</h3>
                <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold text-[red]'>$65.00</h3>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:w-[30%] w-full p-[10px]">
          <div className=" relative  w-[100%] group ">
            <img className="bg-[#F6F7FB] w-[100%]" src={chair0} alt="" />
            <div className=' absolute bottom-[100px] left-5 opacity-[0] group-hover:bottom-[100px] duration-75 group-hover:opacity-[1] gap-y-3'>
              <FaCartShopping/>
              <FaHeart />
              <FaSearchPlus />
            </div>
            <div className=" flex justify-between">
              <div className="">
              <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>Comfort Handy Craft</h3>
              </div>
              <div className=" flex gap-x-2">
                <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>$42.00</h3>
                <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold text-[red]'>$65.00</h3>
              </div>
            </div>
          </div>
        </div>
       
      
      </Flex>
    </Container>
    </section>
  )
}

export default LeatestP