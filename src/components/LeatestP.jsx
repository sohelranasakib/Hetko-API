
import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import chair0 from "../assets/chair001.png"
import LetP from './LetP'
import { useContext } from 'react';
import { apiData } from './ContextApi';
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart, FaSearchPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import {  Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import { addToCart } from './slice/productSlice'


const LeatestP = () => {
let data = useContext(apiData)
let [multiList, setMultiList] = useState('')

let dispatch = useDispatch()

let handleToCart = (item) => {
    dispatch(addToCart({ ...item, qun: 1 }))
}

let handleList = () => {
  setMultiList("activeList");

}

let NewArrival = data.filter(product => product.id >= 100 && product.id <= 107);
let BestSeller = data.filter(product => product.id >= 108  && product.id <= 115);
let Featured = data.filter(product => product.id >= 116 && product.id <=  123);
let SpecialOffer = data.filter(product => product.id >= 144 && product.id <= 151);



  return (
    <section className='py-[30px]'>
          <div className=" text-center">
    <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Leatest Products</h3>
    
</div>
<div className="lg:px-0 px-2">
  <Tabs>
   <TabList className=' lg:pb-12 flex justify-center lg:gap-10 gap-1'>      
                             <Tab><h3  className="text-[18px] font-bold font-sans lg:px-5 px-2 border-b-2"
                            >New Arrival</h3></Tab>
                            <Tab><h3 className='text-[18px] font-bold font-sans lg:px-5 px-2 border-b-2'
                            >Best Seller</h3></Tab>
                            <Tab><h3 className='text-[18px] font-bold font-sans lg:px-5 px-2 border-b-2'
                            >Featured product</h3></Tab>
                            <Tab><h3 className='text-[18px] font-bold font-sans lg:px-5 px-2 border-b-2'
                            >Special Offer</h3></Tab>
                        </TabList>
    <Container>

     
     <TabPanel>
     <div className=" flex justify-between flex-wrap">
            {NewArrival.map((item)=>(  
              <div className=" lg:w-[23%] w-[48%] py-5">
              <div className="relative  w-[100%] group ">
              <Link to={`/product/${item.id}`}>
                    <img className="bg-[#F6F7FB] w-[100%]" src={item.thumbnail} alt="" />
                  
                    <div className=" absolute lg:top-[-30px] lg:group-hover:top-[30px]  top-0 lg:left-[20px] lg:right-0 right-0 lg:opacity-0 group-hover:opacity-[1] duration-500 ease-in-out">
                            <a className=' font-sans font-bold lg:text-[18px] lg:py-[5px] lg:px-[25px] px-[10px] bg-[#262626] text-[#fff] rounded-lg inline-block ' href="#">Sale</a>
                        </div>
                    <h3 className=" lg:opacity-[0] lg:group-hover:top-[240px] duration-500 ease-in-out lg:group-hover:opacity-[1]  absolute lg:top-[340px] top-[150px] left-[50%] translate-x-[-50%] lg:h-[40px] h-[20px] lg:w-[100px] w-[80px] flex justify-center items-center bg-[#08D15F] rounded-[5px] text-[#fff] text-[13px]">View Details</h3>
                    </Link>
                    <div className=" flex justify-between">
                        <div className="">
                            <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>{item.title}</h3>
                        </div>
                        <div className=" flex gap-x-2">
                            <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>${item.price}</h3>
                            <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold text-[red]'>{item.date}</h3>
                        </div>
                    </div>
                    <div className=' absolute lg:bottom-[0px] bottom-[80px] lg:left-5 left-2 lg:opacity-[0] lg:group-hover:bottom-[80px] duration-500 ease-in-out group-hover:opacity-[1] lg:text-[25px] text-[18px]'>
                        <div className="">
                        <FaCartShopping />
                        </div>
                        <div className=" py-4">
                        <FaHeart />
                        </div>
                        <div onClick={()=>handleToCart(item)} className="">
                        <FaSearchPlus />
                        </div>
                    </div>
                </div>
                </div>
                 ))}
            
            </div>
     </TabPanel>
     <TabPanel>
     <div className=" flex justify-between flex-wrap">
            {BestSeller.map((item)=>(  
              <div className=" lg:w-[23%] w-[48%] py-5">
              <div className="relative  w-[100%] group ">
              <Link to={`/product/${item.id}`}>
                    <img className="bg-[#F6F7FB] w-[100%]" src={item.thumbnail} alt="" />
                  
                    <div className=" absolute lg:top-[-30px] lg:group-hover:top-[30px]  top-0 lg:left-[20px] lg:right-0 right-0 lg:opacity-0 group-hover:opacity-[1] duration-500 ease-in-out">
                            <a className=' font-sans font-bold lg:text-[18px] lg:py-[5px] lg:px-[25px] px-[10px] bg-[#262626] text-[#fff] rounded-lg inline-block ' href="#">Sale</a>
                        </div>
                    <h3 className=" lg:opacity-[0] lg:group-hover:top-[240px] duration-500 ease-in-out lg:group-hover:opacity-[1]  absolute lg:top-[340px] top-[150px] left-[50%] translate-x-[-50%] lg:h-[40px] h-[20px] lg:w-[100px] w-[80px] flex justify-center items-center bg-[#08D15F] rounded-[5px] text-[#fff] text-[13px]">View Details</h3>
                    </Link>
                    <div className=" flex justify-between">
                        <div className="">
                            <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>{item.title}</h3>
                        </div>
                        <div className=" flex gap-x-2">
                            <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>${item.price}</h3>
                            <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold text-[red]'>{item.date}</h3>
                        </div>
                    </div>
                    <div className=' absolute lg:bottom-[0px] bottom-[80px] lg:left-5 left-2 lg:opacity-[0] lg:group-hover:bottom-[80px] duration-500 ease-in-out group-hover:opacity-[1] lg:text-[25px] text-[18px]'>
                        <div className="">
                        <FaCartShopping />
                        </div>
                        <div className=" py-4">
                        <FaHeart />
                        </div>
                        <div onClick={()=>handleToCart(item)} className="">
                        <FaSearchPlus />
                        </div>
                    </div>
                </div>
                </div>
                 ))}
            
            </div>
     </TabPanel>
     <TabPanel>
     <div className=" flex justify-between flex-wrap">
            {Featured.map((item)=>(  
              <div className=" lg:w-[23%] w-[48%] py-5">
              <div className="relative  w-[100%] group ">
              <Link to={`/product/${item.id}`}>
                    <img className="bg-[#F6F7FB] w-[100%]" src={item.thumbnail} alt="" />
                  
                    <div className=" absolute lg:top-[-30px] lg:group-hover:top-[30px]  top-0 lg:left-[20px] lg:right-0 right-0 lg:opacity-0 group-hover:opacity-[1] duration-500 ease-in-out">
                            <a className=' font-sans font-bold lg:text-[18px] lg:py-[5px] lg:px-[25px] px-[10px] bg-[#262626] text-[#fff] rounded-lg inline-block ' href="#">Sale</a>
                        </div>
                    <h3 className=" lg:opacity-[0] lg:group-hover:top-[240px] duration-500 ease-in-out lg:group-hover:opacity-[1]  absolute lg:top-[340px] top-[150px] left-[50%] translate-x-[-50%] lg:h-[40px] h-[20px] lg:w-[100px] w-[80px] flex justify-center items-center bg-[#08D15F] rounded-[5px] text-[#fff] text-[13px]">View Details</h3>
                    </Link>
                    <div className=" flex justify-between">
                        <div className="">
                            <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>{item.title}</h3>
                        </div>
                        <div className=" flex gap-x-2">
                            <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>${item.price}</h3>
                            <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold text-[red]'>{item.date}</h3>
                        </div>
                    </div>
                    <div className=' absolute lg:bottom-[0px] bottom-[80px] lg:left-5 left-2 lg:opacity-[0] lg:group-hover:bottom-[80px] duration-500 ease-in-out group-hover:opacity-[1] lg:text-[25px] text-[18px]'>
                        <div className="">
                        <FaCartShopping />
                        </div>
                        <div className=" py-4">
                        <FaHeart />
                        </div>
                        <div onClick={()=>handleToCart(item)} className="">
                        <FaSearchPlus />
                        </div>
                    </div>
                </div>
                </div>
                 ))}
            
            </div>
     </TabPanel>
     <TabPanel>
     <div className=" flex justify-between flex-wrap">
            {SpecialOffer.map((item)=>(  
              <div className=" lg:w-[23%] w-[48%] py-5">
              <div className="relative  w-[100%] group ">
              <Link to={`/product/${item.id}`}>
                    <img className="bg-[#F6F7FB] w-[100%]" src={item.thumbnail} alt="" />
                  
                    <div className=" absolute lg:top-[-30px] lg:group-hover:top-[30px]  top-0 lg:left-[20px] lg:right-0 right-0 lg:opacity-0 group-hover:opacity-[1] duration-500 ease-in-out">
                            <a className=' font-sans font-bold lg:text-[18px] lg:py-[5px] lg:px-[25px] px-[10px] bg-[#262626] text-[#fff] rounded-lg inline-block ' href="#">Sale</a>
                        </div>
                    <h3 className=" lg:opacity-[0] lg:group-hover:top-[240px] duration-500 ease-in-out lg:group-hover:opacity-[1]  absolute lg:top-[340px] top-[150px] left-[50%] translate-x-[-50%] lg:h-[40px] h-[20px] lg:w-[100px] w-[80px] flex justify-center items-center bg-[#08D15F] rounded-[5px] text-[#fff] text-[13px]">View Details</h3>
                    </Link>
                    <div className=" flex justify-between">
                        <div className="">
                            <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>{item.title}</h3>
                        </div>
                        <div className=" flex gap-x-2">
                            <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold'>${item.price}</h3>
                            <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold text-[red]'>{item.date}</h3>
                        </div>
                    </div>
                    <div className=' absolute lg:bottom-[0px] bottom-[80px] lg:left-5 left-2 lg:opacity-[0] lg:group-hover:bottom-[80px] duration-500 ease-in-out group-hover:opacity-[1] lg:text-[25px] text-[18px]'>
                        <div className="">
                        <FaCartShopping />
                        </div>
                        <div className=" py-4">
                        <FaHeart />
                        </div>
                        <div onClick={()=>handleToCart(item)} className="">
                        <FaSearchPlus />
                        </div>
                    </div>
                </div>
                </div>
                 ))}
            
            </div>
     </TabPanel>
    
    </Container>
    </Tabs>
    </div>
    </section>
  )
}

export default LeatestP



