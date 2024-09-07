

import React, { useContext, useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { apiData } from '../components/ContextApi'
import { FaCartShopping } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import chair01 from "../assets/chair01.png"
import { Link } from 'react-router-dom';
import { RxCaretRight } from "react-icons/rx";
import Post from '../components/pagination/Post';
import PaginationArea from '../components/pagination/PaginationArea';
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { PiSquaresFourFill } from "react-icons/pi";
import { GrSort } from "react-icons/gr";
import ProductsBar from '../components/ProductsBar';



const Products = () => {
  let data = useContext(apiData)

  let [multiList, setMultiList] = useState('')
  let [currentPage, setCurrentPage] = useState(1)
  let [perPage, setPerPage] = useState(8)

  let lastPage = currentPage * perPage
  let firstPage = lastPage - perPage


  let allData = data.slice(firstPage, lastPage)

  let pageNumber = []
  for (let i = 0; i < Math.ceil(data.length / perPage); i++) {
    pageNumber.push(i)
  }


  let paginate = (pageNumber) => {
    setCurrentPage(pageNumber + 1);

  }

  let next = () => {
    if (currentPage < pageNumber.length) {
      setCurrentPage((state) => state + 1)
    }
  }
  let prev = () => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1)
    }
  }

  let handleList = ()=>{
    setMultiList("activeList");
    
  }

  return (
    <section className=' lg:pt-[148px] pt-[173px]'>
      <div className="lg:pb-[40px] pb-[10px] pl-5 bg-[#F6F5FF]">
        <Container>
          <div className=" lg:pt-5">
            <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold'>Products</h2>
            <h3 className="flex items-center gap-x-2 font-sans text-[12px] text-[#767676] font-normal">
              <Link to="/">Home</Link><RxCaretRight /> Products
            </h3>
          </div>
        </Container>
      </div>
      <Container>
                   <div className="">
                   <div className="lg:flex lg:mt-[10px] bg-[#fff] lg:py-[30px] px-[40px]">
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
                    <div className="lg:w-[50%] w-full flex items-center pl-[100px] ">
                        <h4 className='font-Sans font-semibold text-[16px] text-[#0D0E43] lg:ml-[10px]'>View: </h4>
                       <div className=" flex gap-x-5 pl-[20px] ">
                       <div onClick={()=>setMultiList("")} className={`h-[42px] w-[40px] text-[35px] ${ multiList == "activeList" ? "bg-white " : "bg-black text-white"} border-[1px] border-[#737373]  `}>
                            <PiSquaresFourFill />
                        </div>
                        <Link to="/pagesproduct" onClick={handleList} className={`h-[42px] w-[40px] text-[35px]  ${ multiList == "activeList" ? "bg-black text-white" : "bg-white"} border-[1px] border-[#737373]`}>
                            <GrSort/>
                        </Link>
                       </div>
                    </div>


                </div>
            </div>
                   </div>
        <Flex>
          <div className="w-[10%]"></div>
          <div className="w-[90%] items-center">
            
              <Post allData={allData} />

            <div className=" text-end">
              <PaginationArea pageNumber={pageNumber} paginate={paginate} currentPage={currentPage} next={next} prev={prev} />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Products