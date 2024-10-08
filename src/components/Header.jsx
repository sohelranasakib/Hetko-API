
import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FiMail, FiLogIn } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import cart from "../assets/cart.png"
import { RxCross2 } from "react-icons/rx";
import { FaUser } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




const Header = () => {
    let data = useSelector((state) => state.product.cartItem)

    let [cartShow, setCartShow] = useState(false)
    let [useShow, setUseShow] = useState(false)
    let cartref = useRef()
    let useref = useRef()



    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (cartref.current.contains(e.target) == true) {
                setCartShow(!cartShow)
            } else {
                setCartShow(false)

            }
            if (useref.current.contains(e.target) == true) {
                setUseShow(!useShow)
            } else {
                setUseShow(false)

            }


        })
    }, [cartShow, useShow])

    return (
        <section className=' bg-[#7E33E0] py-[25px] fixed top-0 left-0 w-[100%] z-50'>
            <Container>
                <Flex>
                    <div className=" lg:flex w-[40%]">
                        <div className=" flex items-center gap-x-2 mr-[120px] text-[#F1F1F1]">
                            <FiMail />
                            <h3 className=' font-sans lg:text-[16px] text-[13px] font-semibold'>mrsohelrana756@gmail.com</h3>
                        </div>
                        <div className="flex items-center gap-x-2 text-[#F1F1F1] lg:pl-0 pl-2">
                            <FiPhoneCall />
                            <h3 className=' font-sans lg:text-[16px] text-[14px] font-semibold '>01731612756</h3>
                        </div>
                    </div>
                    <div className="w-[40%] flex justify-end ">
                        <ul className='lg:flex gap-x-6 '>
                            <li>
                                <select name="" id="" className='bg-[#7E33E0] outline-none font-sans text-[16px] font-semibold text-[#F1F1F1]'>
                                    <option value="">English</option>
                                    <option value="">Bangla</option>
                                </select>
                            </li>
                            <li>
                                <select name="" id="" className='bg-[#7E33E0] outline-none font-sans text-[16px] font-semibold text-[#F1F1F1]'>
                                    <option value="">USD</option>
                                    <option value="">BDT</option>
                                </select>
                            </li>
                            {/* <li className='flex gap-x-2 items-center font-sans text-[16px] font-semibold text-[#F1F1F1]'>Login <FiLogIn /></li> */}
                            {/* <li className='flex gap-x-2 items-center font-sans text-[16px] font-semibold text-[#F1F1F1]'>Wishlist <FaRegHeart /></li> */}
                            {/* <li className='text-[22px] text-[#F1F1F1]'><FaShoppingCart />
                           </li> */}


                        </ul>

                    </div>
                    <div className=" w-[20%] lg:flex justify-end gap-x-2 ">
                        <div ref={useref} className=" flex items-center text-[22px] text-[#F1F1F1] lg:pb-0 pb-2">
                            <FaUser />
                            <MdArrowDropDown />
                        </div>
                        <div ref={cartref} className="relative ">
                            <div className=" relative ">
                                <FaShoppingCart className='text-[22px] text-[#F1F1F1]' />
                            </div>
                            {data.length > 0 ? <div className="absolute h-[20px] w-[20px] bg-[#262626] left-[20px] top-[-15px] rounded-full text-[#fff] text-center">
                                {data.length}
                            </div> : ""}


                        </div>
                    </div>

                </Flex>
                {useShow &&
                    <div className='absolute lg:top-[53px] top-[50px] z-50  lg:right-[180px] right-[30px] bg-[#262626] w-[200px] py-[10px]'>
                        <div className='text-center'>
                            <h3 className='text-[rgba(255,255,255,0.7)] font-sans font-bold text-[16px] py-2 hover:text-white'>
                                <Link to="/account">My Account</Link>
                            </h3>
                        </div>
                        <div className=''>
                            <h4 className=' font-sans font-bold text-[20px] text-[#262626] py-[10px] px-[20px] bg-[#fff] text-center '>
                                <Link to="/login">Log In</Link>
                            </h4>
                            <h4 className=' font-sans font-semibold text-[16px]  text-[#fff]  py-[10px] px-[20px] text-center '>
                                <Link to="/signup">Sign Up</Link>
                            </h4>
                        </div>
                    </div>
                }

                {cartShow &&
                    <div className=" w-[250px] bg-[#262626] absolute lg:top-[53px] top-[80px] lg:right-[80px] right-[10px] z-50 py-3">
                        {data.map((item) => (
                            <div className="flex justify-around items-center pb-2">
                                <div className="">
                                    <img className=' w-[100px] h-[100px]' src={item.thumbnail} alt="" />
                                </div>
                                <div className="">
                                    <h3 className='font-sans text-[14px] font-normal  text-white'>{item.title}</h3>
                                    <h5 className='font-sans text-[14px] font-normal  text-white'>${item.price}</h5>
                                </div>
                                <div className=" text-white">
                                    <RxCross2 />
                                </div>
                            </div>
                        ))}

                        <div className=" flex justify-around">
                            <div className="">
                                <Link to="/shopingcart" className=' lg:w-[120px] w-[100px] font-sans font-bold text-[16px]  h-[40px] border-2 border-[#fff]   inline-block text-center leading-[40px] bg-[#262626] text-[rgba(255,255,255,0.7)] text-white hover:bg-white hover:text-black  border-b-2 hover:border-b-black  duration-300 ease-in-out' href="#"> View Cart</Link>
                            </div>
                            {/* <div className="">
                                <a href="#">
                                    <a className=' lg:w-[120px] w-[100px] font-sans font-bold text-[16px]  h-[40px] border-2 border-[#fff]   inline-block text-center leading-[40px] bg-[#262626] text-[rgba(255,255,255,0.7)] text-white hover:bg-white hover:text-black  border-b-2 hover:border-b-black  duration-300 ease-in-out' href="#">Cheack Out</a>
                                </a>
                            </div> */}
                        </div>
                    </div>
                }
            </Container>
        </section>

    )
}

export default Header

