import React, { useContext } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { apiData } from '../ContextApi'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/productSlice';


const Post = ({ allData, multiList }) => {
  
  
  let dispatch = useDispatch()

 let handleAddTo = (item)=>{
  dispatch(addToCart({...item, qun: 1}))
  
 }
  return (
    <>
     <div className={`${multiList == "activeList" ? "" : "flex justify-between flex-wrap" }`}>
     {allData.map((item) => (
        <div className=" lg:w-[23%] p-[10px]">

          <div className=" relative  w-[96%] group hover:bg-[#35aa58]">
            <Link to={`/product/${item.id}`}>
              <img className="bg-[#F6F7FB] w-[100%]" src={item.thumbnail} alt="" />
              <h3 className=" opacity-[0] group-hover:top-[240px] duration-75 group-hover:opacity-[1]  absolute top-[340px] left-[50%] translate-x-[-50%] h-[40px] w-[100px] flex justify-center items-center bg-[#08D15F] rounded-[5px] text-[#fff] text-[13px] font-bold">View Shop</h3>
            </Link>
            <div className=' flex absolute top-5 left-5 lg:opacity-[0] group-hover:top-5 duration-75 group-hover:opacity-[1] gap-x-2 text-[25px] '>
              <FaCartShopping />
              <FaHeart />
              <div onClick={()=>handleAddTo(item)} className="">
              <FaSearchPlus />
              </div>
            </div>
            <h2 onClick={()=>handleAddTo(item)} className='group-hover:text-[#fff] text-[#fff] text-[18px] w-[60px]  bg-[#e62d2d] inline-block pt-2 rounded-lg '>Add To</h2>
            <div className=" w-[100%] flex justify-center items-center">
              <div className=" text-center my-[20px]">
                <h2 className=" group-hover:text-[#fff] text-[#FB2E86] text-[22px] font-bold hover:text-[#fff]">{item.title}</h2>
                <h2 className=" group-hover:text-[#fff] text-[#151875] text-[18px]">{item.category}</h2>
                <h2 className=" group-hover:text-[#fff] text-[#151875] text-[18px]">${item.price}</h2>
                <a className='group-hover:text-[#fff] text-[#fff] text-[18px] w-[110px] h-[40px] bg-black inline-block pt-2 rounded-lg '> <Link to={`/product/${item.id}`}>Shop now</Link></a>


              </div>
            </div>

          </div>
        </div>
      ))}
     </div>

    </>

  )
}

export default Post