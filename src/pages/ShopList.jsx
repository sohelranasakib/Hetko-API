import React from 'react'
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
import { FiShoppingCart } from "react-icons/fi";

const ShopList = () => {
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
                <Flex className=" py-[30px]">
                    <div className="w-[20%]">
                        <div className="">
                        <div className="">
                            <h2 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[3px] after:w-[150px] after:bg-[#fff] hover:after:bg-black flex items-center gap-x-5'>Product Brand </h2>
                        </div>
                    
                            <div className="">
                                <div className=" ">
                                        <div  className=' flex items-center  gap-3 py-1'>
                                            <input type="radio" name='yes' />
                                            <p className="font-Sans font-semibold text-[16px] text-[#0D0E43] relative after:absolute after:contain-[''] after:bottom-[0px] after:left-0 after:h-[2px] after:w-[100%] after:bg-[#fff] hover:after:bg-black capitalize">Coaster Furniture</p>
                                        </div>                                
                                        <div  className=' flex items-center  gap-3 py-1'>
                                            <input type="radio" name='yes' />
                                            <p className="font-Sans font-semibold text-[16px] text-[#0D0E43] relative after:absolute after:contain-[''] after:bottom-[0px] after:left-0 after:h-[2px] after:w-[100%] after:bg-[#fff] hover:after:bg-black capitalize">Fusion Dot High Fashion</p>
                                        </div>                                
                                        <div  className=' flex items-center  gap-3 py-1'>
                                            <input type="radio" name='yes' />
                                            <p className="font-Sans font-semibold text-[16px] text-[#0D0E43] relative after:absolute after:contain-[''] after:bottom-[0px] after:left-0 after:h-[2px] after:w-[100%] after:bg-[#fff] hover:after:bg-black capitalize">Unique Furnitture Restor</p>
                                        </div>                                
                                </div>
                            </div>
                        </div>
                        <div className=" py-5">
                        <div className="">
                            <h2 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[3px] after:w-[150px] after:bg-[#fff] hover:after:bg-black flex items-center gap-x-5'>Discount Offer </h2>
                        </div>
                    
                            <div className="mt-[10px]">
                                <div className=" ">
                                        <div  className=' flex items-center  gap-3 py-1'>
                                            <input type="radio" name='yes' />
                                            <p className="font-Sans font-semibold text-[16px] text-[#0D0E43] relative after:absolute after:contain-[''] after:bottom-[0px] after:left-0 after:h-[2px] after:w-[100%] after:bg-[#fff] hover:after:bg-black capitalize">20% Cashback</p>
                                        </div>                                
                                        <div  className=' flex items-center  gap-3 py-1'>
                                            <input type="radio" name='yes' />
                                            <p className="font-Sans font-semibold text-[16px] text-[#0D0E43] relative after:absolute after:contain-[''] after:bottom-[0px] after:left-0 after:h-[2px] after:w-[100%] after:bg-[#fff] hover:after:bg-black capitalize">5% Cashback Offer</p>
                                        </div>                                
                                        <div  className=' flex items-center  gap-3 py-1'>
                                            <input type="radio" name='yes' />
                                            <p className="font-Sans font-semibold text-[16px] text-[#0D0E43] relative after:absolute after:contain-[''] after:bottom-[0px] after:left-0 after:h-[2px] after:w-[100%] after:bg-[#fff] hover:after:bg-black capitalize">25% Discount Offer</p>
                                        </div>                                
                                </div>
                            </div>
                        </div>
                        <div className="">
                        <div className="">
                            <h2 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[3px] after:w-[150px] after:bg-[#fff] hover:after:bg-black flex items-center gap-x-5'>Categories </h2>
                        </div>
                    
                            <div className="mt-[10px]">
                                <div className=" ">
                                        <div  className=' flex items-center  gap-3 py-1'>
                                            <input type="radio" name='yes' />
                                            <p className="font-Sans font-semibold text-[16px] text-[#0D0E43] relative after:absolute after:contain-[''] after:bottom-[0px] after:left-0 after:h-[2px] after:w-[100%] after:bg-[#fff] hover:after:bg-black capitalize">Prestashop</p>
                                        </div>                                
                                        <div  className=' flex items-center  gap-3 py-1'>
                                            <input type="radio" name='yes' />
                                            <p className="font-Sans font-semibold text-[16px] text-[#0D0E43] relative after:absolute after:contain-[''] after:bottom-[0px] after:left-0 after:h-[2px] after:w-[100%] after:bg-[#fff] hover:after:bg-black capitalize">Magento</p>
                                        </div>                                
                                        <div  className=' flex items-center  gap-3 py-1'>
                                            <input type="radio" name='yes' />
                                            <p className="font-Sans font-semibold text-[16px] text-[#0D0E43] relative after:absolute after:contain-[''] after:bottom-[0px] after:left-0 after:h-[2px] after:w-[100%] after:bg-[#fff] hover:after:bg-black capitalize">Bigcommerce</p>
                                        </div>                                
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <Link to="/product">
                    <div className=" w-[70%]">
                    <div className="lg:flex justify-between mt-[50px] px-3">
                            <div className="lg:w-[40%] w-full">
                                <div className="">
                                    <img className='w-full' src={shop4} alt="" />
                                </div>
                            </div>
                            <div className="lg:w-[55%] w-full">
                                <div className="">
                                    <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>Accumsan tincidunt</h2>
                                    <div className="flex">
                                        <div className="flex mt-[20px] gap-2">
                                            <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$26.00</h3>
                                            <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4>
                                        </div>
                                        <div className="flex mt-[20px] gap-2 ml-[20px]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                    <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <div className="flex mt-[20px] gap-6">
                                        <FiShoppingCart />
                                        <FaRegHeart />
                                        <FaSearchPlus />
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="lg:flex justify-between mt-[50px] px-3">
                            <div className="lg:w-[40%] w-full">
                                <div className="">
                                    <img className='w-full' src={shop3} alt="" />
                                </div>
                            </div>
                            <div className="lg:w-[55%] w-full">
                                <div className="">
                                    <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>Accumsan tincidunt</h2>
                                    <div className="flex">
                                        <div className="flex mt-[20px] gap-2">
                                            <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$26.00</h3>
                                            <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4>
                                        </div>
                                        <div className="flex mt-[20px] gap-2 ml-[20px]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                    <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <div className="flex mt-[20px] gap-6">
                                        <FiShoppingCart />
                                        <FaRegHeart />
                                        <FaSearchPlus />
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="lg:flex justify-between mt-[50px] px-3">
                            <div className="lg:w-[40%] w-full">
                                <div className="">
                                    <img className='w-full' src={shop2} alt="" />
                                </div>
                            </div>
                            <div className="lg:w-[55%] w-full">
                                <div className="">
                                    <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>Accumsan tincidunt</h2>
                                    <div className="flex">
                                        <div className="flex mt-[20px] gap-2">
                                            <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$26.00</h3>
                                            <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4>
                                        </div>
                                        <div className="flex mt-[20px] gap-2 ml-[20px]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                    <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <div className="flex mt-[20px] gap-6">
                                        <FiShoppingCart />
                                        <FaRegHeart />
                                        <FaSearchPlus />
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className="lg:flex justify-between mt-[50px] px-3">
                            <div className="lg:w-[40%] w-full">
                                <div className="">
                                    <img className='w-full' src={shop1} alt="" />
                                </div>
                            </div>
                            <div className="lg:w-[55%] w-full">
                                <div className="">
                                    <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>Accumsan tincidunt</h2>
                                    <div className="flex">
                                        <div className="flex mt-[20px] gap-2">
                                            <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>$26.00</h3>
                                            <h4 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>$26.00</h4>
                                        </div>
                                        <div className="flex mt-[20px] gap-2 ml-[20px]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                    <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                                    <div className="flex mt-[20px] gap-6">
                                        <FiShoppingCart />
                                        <FaRegHeart />
                                        <FaSearchPlus />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></Link>
                   
                   
                    
                    
                </Flex>
            </Container>
        </section>
    )
}

export default ShopList