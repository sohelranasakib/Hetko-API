import React, { useContext, useEffect, useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { RxCaretRight } from "react-icons/rx";
import { PiSquaresFourFill } from "react-icons/pi";
import { GrSort } from "react-icons/gr"
import { FaStar, FaRegHeart, FaSearchPlus } from "react-icons/fa";
import { FaRegStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { apiData } from '../components/ContextApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/slice/productSlice';
import ProductsBar from '../components/ProductsBar';

const ShopList = () => {
    let data = useContext(apiData)
    let dispatch = useDispatch()
    let [multiList, setMultiList] = useState('')

   

    // let clintRating = Array.from({length: 5}, (elm, index)=>{
    //    let ratingNumber = index + 0.5
    //    return(
    //     data.rating >= index + 1 ? <FaStar /> : data.rating > ratingNumber ? <FaRegStarHalfStroke className=' text-[#FFD881]' /> : <FaRegStar />
    //    )
    // })

    let handleToCart = (item) => {
        dispatch(addToCart({ ...item, qun: 1 }))
    }

    let handleList = () => {
        setMultiList("activeList");

    }


    return (
        <section>

            <div className="lg:pb-[60px] pb-[10px] pl-5 bg-[#F6F5FF] lg:pt-[148px] pt-[174px]">
                <Container>
                    <div className=" lg:pt-5">
                        <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold'>Shop List</h2>
                        <h3 className="flex items-center gap-x-2 font-sans text-[12px] text-[#767676] font-normal">
                            <Link to="/">Home</Link><RxCaretRight /> Shop List
                        </h3>
                    </div>
                </Container>

            </div>

            <Container>
                <div className="">
                    {/* <ProductsBar /> */}
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
                                    <div onClick={() => setMultiList("")} className={`h-[42px] w-[40px] text-[35px] ${multiList == "activeList" ? "bg-white " : "bg-black text-white"} border-[1px] border-[#737373]  `}>
                                        <PiSquaresFourFill />
                                    </div>
                                    <div  onClick={handleList} className={`h-[42px] w-[40px] text-[35px]  ${multiList == "activeList" ? "bg-black text-white" : "bg-white"} border-[1px] border-[#737373]`}>
                                        <GrSort />
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>

                <div className=" lg:w-[70%] w-[100%]">
                    {data.map((item) => (
                        <div className=" flex gap-x-10 py-[10px]">
                            <div className="lg:w-[40%] w-full">
                                <div className=" relative group">
                                    <img className='w-full lg:h-[300px]' src={item.thumbnail} alt="" />
                                    <Link to={`/product/${item.id}`}>
                                        <h3 className=" font-sans font-bold absolute top-[130px] left-[50%] translate-x-[-50%]  h-[40px] w-[120px] flex justify-center items-center bg-[#08D15F] rounded-lg text-[#fff] opacity-0 group-hover:top-[130px] duration-75 group-hover:opacity-[1] ">Shop Now</h3>
                                    </Link>

                                </div>

                            </div>
                            <div className="lg:w-[55%] w-full">
                                <div className="">
                                    <h2 className='font-Sans font-bold lg:text-[24px] text-[16px] text-[#0D0E43]'>{item.title}</h2>
                                    <div className="flex">
                                        <div className="flex lg:mt-[20px]">
                                            <h3 className='font-Sans font-bold lg:text-[16px] text-[#0D0E43]'>${item.price} <span className=' ml-[20px] text-[#1e7e3e]'>{item.discountPercentage}% <span className=''>Discount</span></span></h3>

                                            {/* <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4> */}
                                        </div>
                                        {/* <div className="flex mt-[20px] gap-2 ml-[20px]">
                                                {clintRating}
                                             </div> */}
                                    </div>
                                    <h2 className=' font-Sans font-bold lg:text-[16px] text-[#FB2E86]'>Stock: {item.stock}</h2>
                                    <p className='font-Sans font-semibold lg:text-[16px] text-[11px] text-[#0D0E43] lg:mt-[20px] lg:w-[80%]'>{item.description}</p>
                                    <div className="flex my-[10px] text-[20px] gap-6">
                                        <FiShoppingCart />
                                        <FaRegHeart />
                                        <div onClick={() => handleToCart(item)} className="">
                                            <FaSearchPlus />
                                        </div>
                                    </div>
                                    <Link to={`/product/${item.id}`}>
                                        <button className='lg:py-[10px] py-[5px] lg:px-[25px] px-[10px] bg-[#262626] mt-[0px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Shop Now</button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </Container>
        </section>
    )
}

export default ShopList