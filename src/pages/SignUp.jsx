import React from 'react'
import { RxCaretRight } from "react-icons/rx";
import Container from '../components/Container';
import { Link } from 'react-router-dom';


const SignUp = () => {
    return (
        <section>
            <div className="lg:pb-[60px] pb-[10px] pl-5 bg-[#F6F5FF] ">
                <Container>
                    <div className=" lg:pt-10">
                        <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold'>Sign Up</h2>
                        <h3 className="flex items-center gap-x-1 font-sans text-[12px] text-[#767676] font-normal">
                            <Link to="/">Home</Link><RxCaretRight />Pages <RxCaretRight /> Sign Up
                        </h3>
                    </div>
                </Container>
            </div>
            <Container>
                <div className=" py-[40px] lg:pl-0 pl-4">
                    <div className="">
                        <h2 className=' font-sans text-[#262626] lg:text-[28px] text-[20px] font-bold'>Your Personal Details</h2>
                        <div className="flex gap-x-10 py-[10px]">
                            <div className=" w-[35%]">
                                <h3 className=' font-sans text-[#262626] lg:text-[18px]  font-bold'>First Name</h3>
                                <input className=' w-[100%] h-[45px] border-b-2 border-[#8d8686] outline-none' placeholder=' First Name' type="text" />
                            </div>
                            <div className=" w-[35%]">
                                <h3 className='font-sans text-[#262626] lg:text-[18px]  font-bold'>Last Name</h3>
                                <input className=' w-[100%] h-[45px] border-b-2 border-[#8d8686] outline-none' placeholder=' Last Name' type="text" />
                            </div>
                        </div>
                        <div className="flex gap-x-10">
                            <div className=" w-[35%]">
                                <h3 className=' font-sans text-[#262626] lg:text-[18px]  font-bold'>Email Address</h3>
                                <input className=' w-[100%] h-[45px] border-b-2 border-[#8d8686] outline-none' placeholder=' Your gmail' type="text" />
                            </div>
                            <div className=" w-[35%]">
                                <h3 className='font-sans text-[#262626] lg:text-[18px]  font-bold'>Telephone</h3>
                                <input className=' w-[100%] h-[45px] border-b-2 border-[#8d8686] outline-none' placeholder=' Your phone number' type="text" />
                            </div>
                        </div>

                    </div>
                    <div className=" py-[60px]">
                        <h2 className=' font-sans text-[#262626] lg:text-[28px] text-[20px] font-bold'>New Customer</h2>
                        <div className="flex gap-x-10 py-[10px]">
                            <div className=" w-[35%]">
                                <h3 className=' font-sans text-[#262626] lg:text-[18px]  font-bold'>Present Address</h3>
                                <input className=' w-[100%] h-[45px] border-b-2 border-[#8d8686] outline-none' placeholder=' Your address' type="text" />
                            </div>
                            <div className=" w-[35%]">
                                <h3 className='font-sans text-[#262626] lg:text-[18px]  font-bold'> Permanent Address</h3>
                                <input className=' w-[100%] h-[45px] border-b-2 border-[#8d8686] outline-none' placeholder=' Your address' type="text" />
                            </div>
                        </div>
                        <div className="flex gap-x-10">
                            <div className=" w-[35%]">
                                <h3 className=' font-sans text-[#262626] lg:text-[18px]  font-bold'>City</h3>
                                <input className=' w-[100%] h-[45px] border-b-2 border-[#8d8686] outline-none' placeholder=' Your city' type="text" />
                            </div>
                            <div className=" w-[35%]">
                                <h3 className='font-sans text-[#262626] lg:text-[18px]  font-bold'>Post code</h3>
                                <input className=' w-[100%] h-[45px] border-b-2 border-[#8d8686] outline-none' placeholder=' Your post code' type="text" />
                            </div>
                        </div>

                    </div>
                    <div className="">
                        <h2 className=' font-sans text-[#262626] lg:text-[28px] text-[20px] font-bold'>Your Password</h2>
                        <div className="flex gap-x-10 py-[10px]">
                            <div className=" w-[35%]">
                                <h3 className=' font-sans text-[#262626] lg:text-[18px]  font-bold'>Password</h3>
                                <input className=' w-[100%] h-[45px] border-b-2 border-[#8d8686] outline-none' placeholder=' Your password' type="text" />
                            </div>
                            <div className=" w-[35%]">
                                <h3 className='font-sans text-[#262626] lg:text-[18px]  font-bold'>Repeat Password</h3>
                                <input className=' w-[100%] h-[45px] border-b-2 border-[#8d8686] outline-none' placeholder=' Repeat password' type="text" />
                            </div>
                        </div>
                    </div>
                    <div className=" flex items-center gap-x-2 pt-[30px]">
                    <input type="radio" name=' yes'/>
                    <h3 className=' font-normal font-sans text-[#9096B2] text-[17px]'>I have read and agree to the Privacy Policy</h3>
                    </div>
                <div className=" pt-[10px]">
                <a className=' font-sans font-bold text-[20px] py-[10px] px-[30px] bg-[#262626] text-[#fff] inline-block rounded-lg' href="#"> <Link to="/login">Sign Up</Link> </a>
                </div>
                </div>
            </Container>
        </section>

    )
}

export default SignUp