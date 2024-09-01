import React, { useContext } from 'react'
import Flex from './Flex'
import { FaCartShopping } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import chair0 from "../assets/chair001.png"
import { Link } from 'react-router-dom';
import { apiData } from './ContextApi';
import { useDispatch } from 'react-redux';
import { addToCart } from './slice/productSlice';


const LetP = () => {
let data = useContext(apiData)
let dispatch = useDispatch()


let handleCartAdd = (item)=>{
    dispatch(addToCart({...item, qun: 1}))
}
    return (
        <>     
        {data.map((item)=>(   
            <div className=" lg:w-[30%] w-full p-[10px]">
             
              <div className=" relative  w-[100%] group ">
              <Link to={`/product/${item.id}`}>
                    <img className="bg-[#F6F7FB] w-[100%]" src={item.thumbnail} alt="" />
                  
                    <div className=" absolute top-[30px] left-[20px] opacity-0 group-hover:opacity-[1] duration-75">
                            <a className=' font-sans font-bold text-[18px] py-[5px] px-[25px] bg-[#262626] text-[#fff] rounded-lg inline-block ' href="#">Sale</a>
                        </div>
                    <h3 className=" opacity-[0] group-hover:top-[240px] duration-75 group-hover:opacity-[1]  absolute top-[340px] left-[50%] translate-x-[-50%] h-[40px] w-[100px] flex justify-center items-center bg-[#08D15F] rounded-[5px] text-[#fff] text-[13px]">View Details</h3>
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
                    <div className=' absolute bottom-[100px] left-5 opacity-[0] group-hover:bottom-[180px] duration-75 group-hover:opacity-[1] text-[25px]'>
                        <div className="">
                        <FaCartShopping />
                        </div>
                        <div className=" py-4">
                        <FaHeart />
                        </div>
                        <div onClick={()=>handleCartAdd(item)} className="">
                        <FaSearchPlus />
                        </div>
                    </div>
                </div>
             
              
                
            </div>
             ))}
        </>
    )
}

export default LetP
