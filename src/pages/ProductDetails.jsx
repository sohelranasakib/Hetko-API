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


    let clientRating = Array.from({length: 5}, (elm, index)=>{
        let ratingNumber = index + 0.5
        return(
            singleData.rating >= index+1 ? <FaStar />:  singleData.rating > ratingNumber ? <FaRegStarHalfStroke className=' text-[#FFD881]' /> :<FaRegStar />
        )
    })

    let handleAddToCart = (item)=>{
        dispatch(addToCart({...item, qun: 1 }))
       
        
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
                <Flex>
                <Flex className=" flex-wrap justify-between lg:pl-0 pl-5">
                    {singleData?.images?.map((item) => (
                        <div className="w-[45%] my-4">
                            <img src={item} alt="Productd" />
                        </div>
                    ))}


                </Flex>

                    {/* <div className="w-[10%] pr-5">
                        <img src={pro01} alt="" />
                        <img className=' my-[20px]' src={pro01} alt="" />
                        <img src={pro01} alt="" />
                    </div>
                    <div className=" w-[30%]">
                        <div className="">
                            <img src={pro001} alt="" />
                        </div>
                    </div> */}
                    <div className=" w-[55%]">
                        <div className="">
                            <h2 className='font-Sans font-bold text-[36px] text-[#0D0E43]'>Playwood arm chair</h2>
                            <div className="flex mt-[20px] gap-x-1 items-center text-[#FFC416] ">
                               {clientRating}
                                <h5 className='font-Sans font-semibold text-[18px] text-[#0D0E43]'>(22)</h5>
                            </div>
                            <div className=" flex mt-[18px] gap-x-3">
                                <h2 className=' font-Sans font-bold text-[16px] text-[#0D0E43]'>${singleData.price}</h2>
                                {/* <h2 className=' font-Sans font-bold text-[16px] text-[#FB2E86]'>$32.00</h2> */}
                            </div>
                            <h2 className=' font-Sans font-bold text-[16px] text-[#FB2E86]'>Stock: {singleData.stock}</h2>
                            <h3 className='font-Sans font-bold text-[18px] text-[#0D0E43] mt-[20px]'>Color</h3>
                            <p className='font-Sans font-normal text-[18px] text-[#0D0E43] mt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                            <Link to="/shopingcart" onClick={()=>handleAddToCart(singleData)}>
                            <button className='py-[10px] px-[25px] bg-[#262626] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Add To cart</button>
                            </Link>
                           
                            <h4 className='font-Sans font-bold text-[18px] text-[#0D0E43] mt-[20px]'>Categories: {singleData.category}</h4>
                            <h5 className='font-Sans font-bold text-[18px] text-[#0D0E43] mt-[20px]'>Tags: {singleData.tags}</h5>
                        </div>
                    </div>

                </Flex>
            </Container>

            <div className=" bg-[#F9F8FE]">
                <Container>
                    <div className="py-[100px]">
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
                </Container>
            </div>
        </section>
    )
}

export default ProductDetails