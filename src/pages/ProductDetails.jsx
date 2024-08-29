import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/Container';
import Flex from '../components/Flex';
import { RxCaretRight } from "react-icons/rx";
import pro01 from "../assets/pro01.png"
import pro001 from "../assets/pro001.png"
import { FaStar, FaArrowRight } from "react-icons/fa";
import { FaRegStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/slice/productSlice';


const ProductDetails = () => {
    let [singleData, setSingleData] = useState([]);
    let productId = useParams();
    let dispatch = useDispatch();


    let getData = () => {
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
            setSingleData(response.data);

        })
    }

    useEffect(() => {
        getData()
    }, [])


    let clientRating = Array.from({ length: 5 }, (elm, index) => {
        let ratingNumber = index + 0.5
        return (
            singleData.rating >= index + 1 ? <FaStar /> : singleData.rating > ratingNumber ? <FaRegStarHalfStroke className=' text-[#FFD881]' /> : <FaRegStar />
        )
    })

    let handleAddToCart = (item) => {
        dispatch(addToCart({ ...item, qun: 1 }))


    }

    return (
        <section>
            <div className="lg:pb-[60px] pb-[10px] pl-5 bg-[#F6F5FF]">
                <Container>
                    <div className=" lg:pt-10">
                        <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold'>Product Details</h2>
                        <h3 className="flex items-center gap-x-2 font-sans text-[12px] text-[#767676] font-normal">
                            <Link to="/">Home</Link><RxCaretRight /> Product Details
                        </h3>
                    </div>
                </Container>
            </div>

          <Container>
          <div className=" py-[50px]">
          <div className=" flex w-[100%] mb-[40px] gap-x-10">
                        <div className=" ProdectImgBox flex gap-[10px] w-[50%]">

                            <div className="miniimgbox w-[25%]">
                                {singleData?.images?.map((item) => (
                                    <img className=' mb-[8px] w-[100%] h-[125px] border-[1px] border-[#9e9e9e] rounded-[6px]' src={item} alt="" />
                                ))}
                            </div>
                            <div className="bigimgbox w-[75%]">
                                <img src={singleData.thumbnail} className='h-[391px] w-[100%] rounded-[6px]' alt="" />
                            </div>
                        </div>

                        <div className="w-[50%]">
                            <h2 className='font-Sans font-bold text-[36px] text-[#0D0E43]'>{singleData.title}</h2>
                            <div className="flex mt-[20px] gap-x-1 items-center text-[#FFC416] ">
                                {clientRating}
                                {/* <h5 className='font-Sans font-semibold text-[18px] text-[#0D0E43]'>(22)</h5> */}
                                <div className="">
                                    <span className='text-[#767676] ml-[10px]  text-[14px]'>{singleData.rating}</span>
                                </div>
                            </div>
                            <div className=" flex mt-[18px] gap-x-3">
                                <h2 className=' font-Sans font-bold text-[16px] text-[#0D0E43]'>${singleData.price} <span className=' ml-[10px] text-[#1e7e3e]'>{singleData.discountPercentage}% <span className=''>Discount</span></span></h2>

                            </div>
                            <h2 className=' font-Sans font-bold text-[16px] text-[#FB2E86]'>Stock: {singleData.stock}</h2>
                            {/* <h3 className='font-Sans font-bold text-[18px] text-[#0D0E43] mt-[20px]'>Color</h3> */}
                            <p className='font-Sans font-normal text-[18px] text-[#0D0E43] mt-[20px]'>{singleData.description}</p>
                            <Link to="/shopingcart" onClick={() => handleAddToCart(singleData)}>
                                <button className='py-[10px] px-[25px] bg-[#262626] mt-[20px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Add To cart</button>
                            </Link>

                            <h4 className='font-Sans font-bold text-[18px] text-[#0D0E43] mt-[20px]'>Categories: {singleData.category}</h4>
                            <h5 className='font-Sans font-bold text-[18px] text-[#0D0E43] mt-[20px]'>Tags: {singleData.tags}</h5>
                        </div>

                    </div>


            {/* <div className=" bg-[#F9F8FE]">
                    <div className=" px-10">
                        <div className="w-[60%]">
                            <ul className='lg:flex justify-between'>
                                <li className=' relative font-Sans font-bold text-[24px] text-[#0D0E43] mt-[50px] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[130px] after:bg-[#0D0E43]'>Description</li>
                                <li className=' relative font-Sans font-bold text-[24px] text-[#0D0E43] mt-[50px] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[170px] after:bg-[#0D0E43]'>Additional Info</li>
                                <li className=' relative font-Sans font-bold text-[24px] text-[#0D0E43] mt-[50px] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[90px] after:bg-[#0D0E43]'>Reviews</li>
                                <li className=' relative font-Sans font-bold text-[24px] text-[#0D0E43] mt-[50px] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[70px] after:bg-[#0D0E43]'>Video</li>
                            </ul>
                        </div>
                        <div className="mt-[70px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43] '>Varius tempor.</h3>
                            <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] '>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>

                        </div>
                        <div className="mt-[70px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43] '>More details</h3>
                            <div className="flex items-center mt-[15px]">
                                <FaArrowRight />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]  '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex items-center mt-[10px]">
                                <FaArrowRight />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]  '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex items-center mt-[10px]">
                                <FaArrowRight />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]  '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                            <div className="flex items-center mt-[10px]">
                                <FaArrowRight />
                                <p className='font-Sans font-semibold text-[16px] text-[#0D0E43]  '>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </div>
                        </div>
                    </div>
                
            </div> */}
          </div>
          </Container>
        </section>
    )
}

export default ProductDetails