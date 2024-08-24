import React, { useContext } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { apiData } from '../ContextApi'
import { Link } from 'react-router-dom';


const Post = ({allData}) => {
   
  return (
<>
{allData.map((item) => (
        <div className=" lg:w-[32%] p-[10px]">
          <Link to={`/product/${item.id}`}>
        <div className=" relative  w-[96%] group hover:bg-[#2F1AC4] ">
          <img className="bg-[#F6F7FB] w-[100%]" src={item.thumbnail} alt="" />
          <div className=' flex absolute top-5 left-5 opacity-[0] group-hover:top-5 duration-75 group-hover:opacity-[1] gap-x-2'>
            <FaCartShopping />
            <FaHeart />
            <FaSearchPlus />
          </div>
          
          <h3 className=" opacity-[0] group-hover:top-[240px] duration-75 group-hover:opacity-[1]  absolute top-[340px] left-[50%] translate-x-[-50%] h-[40px] w-[100px] flex justify-center items-center bg-[#08D15F] rounded-[5px] text-[#fff] text-[13px]">View Details</h3>
          
          <div className=" w-[100%] flex justify-center items-center">
            <div className=" text-center my-[20px]">
              <h2 className=" group-hover:text-[#fff] text-[#FB2E86] text-[22px] font-bold hover:text-[#fff]">{item.title}</h2>
              <h2 className=" group-hover:text-[#fff] text-[#151875] text-[18px]">{item.category}</h2>
              <h2 className=" group-hover:text-[#fff] text-[#151875] text-[18px]">${item.price}</h2>
              <a className='group-hover:text-[#fff] text-[#fff] text-[18px] w-[140px] h-[40px] bg-black inline-block pt-2 ' href="#">Add To Cart</a>
            </div>
          </div>
        </div>
        </Link>
      </div>
     
    
    ))}
</>

  )
}

export default Post