import React, { useContext } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { RxCaretRight } from "react-icons/rx";
import Flex from '../components/Flex';
import ProductsBar from '../components/ProductsBar';
import shop1 from "../assets/shop1.png"
import shop2 from "../assets/shop2.png"
import shop3 from "../assets/shop3.png"
import shop4 from "../assets/shop4.png"
import { FaStar, FaRegHeart, FaSearchPlus } from "react-icons/fa";
import { FaRegStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { apiData } from '../components/ContextApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/slice/productSlice';

const ShopList = () => {
    let data = useContext(apiData)
    let dispatch = useDispatch()


    // let clintRating = Array.from({length: 5}, (elm, index)=>{
    //    let ratingNumber = index + 0.5
    //    return(
    //     data.rating >= index + 1 ? <FaStar /> : data.rating > ratingNumber ? <FaRegStarHalfStroke className=' text-[#FFD881]' /> : <FaRegStar />
    //    )
    // })

   let handleToCart = (item)=>{
        dispatch(addToCart({...item, qun: 1}))
   }

    return (
        <section>

            <div className="lg:pb-[60px] pb-[10px] pl-5 bg-[#F6F5FF]">
                <Container>
                    <div className=" lg:pt-10">
                        <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold'>Shop List</h2>
                        <h3 className="flex items-center gap-x-2 font-sans text-[12px] text-[#767676] font-normal">
                            <Link to="/">Home</Link><RxCaretRight /> Shop List
                        </h3>
                    </div>
                </Container>

            </div>

            <Container>
                <div className="">
                    <ProductsBar />
                </div>
        
                    <div className=" w-[70%]">
                        {data.map((item) => (
                            <div className=" flex gap-x-10 py-[10px]">
                                <div className="lg:w-[40%] w-full">
                                    <div className=" relative group">
                                        <img className='w-full h-[300px]' src={item.thumbnail} alt="" />
                                        <Link to={`/product/${item.id}`}>
                                             <h3 className=" font-sans font-bold absolute top-[130px] left-[50%] translate-x-[-50%]  h-[40px] w-[120px] flex justify-center items-center bg-[#08D15F] rounded-lg text-[#fff] opacity-0 group-hover:top-[130px] duration-75 group-hover:opacity-[1] ">Shop Now</h3>
                                        </Link>
                                        
                                    </div>
                                    
                                </div>
                                <div className="lg:w-[55%] w-full">
                                    <div className="">
                                        <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>{item.title}</h2>
                                        <div className="flex">
                                            <div className="flex mt-[20px]">
                                                <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>${item.price} <span className=' ml-[20px] text-[#1e7e3e]'>{item.discountPercentage}% <span className=''>Discount</span></span></h3>
                                                
                                                {/* <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4> */}
                                            </div>
                                            {/* <div className="flex mt-[20px] gap-2 ml-[20px]">
                                                {clintRating}
                                             </div> */}
                                        </div>
                                        <h2 className=' font-Sans font-bold text-[16px] text-[#FB2E86]'>Stock: {item.stock}</h2>
                                        <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>{item.description}</p>
                                        <div className="flex my-[10px] text-[20px] gap-6">
                                            <FiShoppingCart />
                                            <FaRegHeart />
                                            <div onClick={()=>handleToCart(item)} className="">
                                            <FaSearchPlus />
                                            </div>
                                        </div>
                                        <Link to={`/product/${item.id}`}>
                                        <button className='py-[10px] px-[25px] bg-[#262626] mt-[0px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Shop Now</button>
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