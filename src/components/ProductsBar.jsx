import React, { useState } from 'react'
import { PiSquaresFourFill } from "react-icons/pi";
import { GrSort } from "react-icons/gr";
import { Link } from 'react-router-dom';

const ProductsBar = () => {
    let [multiList, setMultiList] = useState('')

    let handleList = ()=>{
        setMultiList("activeList")
    }
  return (
    <div className="lg:flex mt-[10px] bg-[#fff] py-[30px] px-[40px]">
                <div className="lg:w-[40%] w-full">
                    <h2 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Ecommerce Acceories & Fashion item </h2>
                    <h5 className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>About 9,620 results (0.62 seconds)</h5>
                </div>
                <div className="lg:w-[60%] w-full lg:flex">
                    <div className="lg:w-[25%] w-full lg:flex items-center justify-between my-[20px] lg:my-0">
                        <h4 className='font-Sans font-semibold text-[16px] border-[#262626]'>per page: </h4>
                        <input className='h-[35px] lg:w-[60%] w-[70%] border-[1px] outline-none border-[#262626]  ' type="text" />
                    </div>
                    <div className="lg:w-[25%] w-full lg:flex items-center justify-around mb-[20px] lg:mb-0">
                        <h4 className='font-Sans font-semibold text-[16px] text-[#0D0E43] lg:ml-[10px]'>Sort By: </h4>
                        <select className=' lg:px-[27px] py-[5px] border-[1px] border-[#262626] outline-none rounded-[2px]'>
                            <option>Featured</option>
                            <option >Price</option>
                            <option >Category</option>
                        </select>
                    </div>
                    <div className="lg:w-[50%] w-full flex items-center pl-[100px]">
                        <h4 className='font-Sans font-semibold text-[16px] text-[#0D0E43] lg:ml-[10px]'>View: </h4>
                        <div className=" flex gap-x-5 pl-[20px] ">
                       <h3 onClick={()=>setMultiList("")} className={`h-[42px] w-[40px] text-[35px] ${ multiList == "activeList" ? "bg-white " : "bg-black text-white"} border-[1px] border-[#737373]  `}>
                            <PiSquaresFourFill />
                        </h3>
                        <div onClick={handleList} className={`h-[42px] w-[40px] text-[35px]  ${ multiList == "activeList" ? "bg-black text-white" : "bg-white"} border-[1px] border-[#737373]`}>
                            <GrSort/>
                        </div>
                       </div>

                        {/* <div className=" pl-[20px]">
                            <PiSquaresFourFill className=' h-[46px] w-[40px] border-[1px] border-[#737373] text-[35px]'/>
                        </div>
                        <div  className=" pl-3">
                            <GrSort className=' h-[46px] w-[40px] border-[1px] border-[#737373] text-[35px]'/>
                        </div> */}
                    </div>


                </div>
            </div>
  )
}

export default ProductsBar