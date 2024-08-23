import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from "../assets/logo.png"
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navber = () => {
    let [show, setShow] = useState(false)
    let berref = useRef()



    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (berref.current.contains(e.target) == true) {
                setShow(!show)
            } else {
                setShow(false)
            }

        })

    }, [show])




    return (
        <section className='py-4 bg-[#f1f1f1]'>
            <Container>
                <Flex>
                    <div className="lg:w-[15%]">
                        <div className=" lg:pl-0 pl-2">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>

                    <div className="lg:w-[40%] w-[10%]">
                        <ul className={`lg:flex lg:flex-row flex flex-col z-50  gap-y-3 gap-x-10  pl-[20px] pt-[20px] lg:pt-0 font-sans text-[#767676] text-[18px] font-medium lg:static fixed duration-[800ms]  ${show == true ? "bg-[#262626] top-[0px] left-0 w-1/2 h-full py-2" : "top-[0px] left-[-250px] h-full"}`}>
                            <li className='text-white flex justify-between items-center lg:hidden'>Menu <RxCross2 className='mr-[20px]' /></li>
                            <li><a className='font-Sans font-semibold text-[16px] lg:text-[#0D0E43] text-white duration-300 ease-in-out hover:text-[#FB2E86] pt-1' href="#">
                                <Link to="/"> Home</Link></a></li>
                            <li><a className='font-Sans font-semibold text-[16px] lg:text-[#0D0E43] text-white duration-300 ease-in-out hover:text-[#FB2E86] pt-1' href="#">Pages</a></li>
                            <li><a className='font-Sans font-semibold text-[16px] lg:text-[#0D0E43] text-white duration-300 ease-in-out hover:text-[#FB2E86] pt-1' href="#"> 
                                <Link to="/product"> Products</Link></a></li>
                            <li><a className='font-Sans font-semibold text-[16px] lg:text-[#0D0E43] text-white duration-300 ease-in-out hover:text-[#FB2E86] pt-1' href="#"> Blog</a></li>
                            <li><a className='font-Sans font-semibold text-[16px] lg:text-[#0D0E43] text-white duration-300 ease-in-out hover:text-[#FB2E86] pt-1' href="#">Shop</a></li>
                            <li><a className='font-Sans font-semibold text-[16px] lg:text-[#0D0E43] text-white duration-300 ease-in-out hover:text-[#FB2E86] pt-1' href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="lg:w-[50%] w-[100%] text-end">
                        <div className=" relative">
                            <input type="text" placeholder=' search...' className=' w-[70%] h-[40px] rounded-lg bg-[#D9D9D9] outline-none pl-2' />
                            <div className=" absolute w-[40px] h-[40px] top-[50%] right-0 translate-y-[-50%] bg-[#262626] rounded-r-lg "><IoIosSearch className=' text-[#ffff] text-[25px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]' /></div>
                        </div>
                    </div>

                    {/* <div className="lg:pr-0 pr-2 lg:hidden text-[20px] lg:pl-0 pl-10" onClick={()=>setShow(!show)}>
                  {show == true ? <RxCross2 /> : <FaBars />}
              </div>  */}
                    <div ref={berref} className=" lg:hidden pl-5 pr-5 ">
                        <FaBars className=' text-[30px]' />
                    </div>

                </Flex>
            </Container>
        </section>
    )
}

export default Navber