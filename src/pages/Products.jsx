

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
import ProductsBar from '../components/ProductsBar';



const Products = () => {
  let data = useContext(apiData)

  let [currentPage, setCurrentPage] = useState(1)
  let [perPage, setPerPage] = useState(6)

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

  return (
    <section>
      <div className="lg:pb-[50px] pb-[10px] pl-5 bg-[#F6F5FF]">
        <Container>
          <div className=" lg:pt-10">
            <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold'>Products</h2>
            <h3 className="flex items-center gap-x-2 font-sans text-[12px] text-[#767676] font-normal">
              <Link to="/">Home</Link><RxCaretRight /> Products
            </h3>
          </div>
        </Container>
      </div>
      <Container>
                   <div className="">
                        <ProductsBar/>
                   </div>
        <Flex>
          <div className="w-[10%]"></div>
          <div className="w-[90%] items-center">
            <div className=" flex justify-between flex-wrap">
              <Post allData={allData}/>

            </div>
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