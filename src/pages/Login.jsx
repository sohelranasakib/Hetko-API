import React from 'react'
import { RxCaretRight } from "react-icons/rx";
import Container from '../components/Container';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section>
          <div className="lg:pb-[60px] pb-[10px] pl-5 bg-[#F6F5FF] ">
                <Container>
                    <div className=" lg:pt-10">
                        <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold'>Login</h2>
                        <h3 className="flex items-center gap-x-1 font-sans text-[12px] text-[#767676] font-normal">
                            <Link to="/">Home</Link><RxCaretRight />Pages <RxCaretRight /> Login
                        </h3>
                    </div>
                </Container>
            </div>
            <Container>
                    <div className="py-[70px] w-[100%] ">
                      <div className="  w-[544px] h-[474px] bg-[#F6F5FF] mx-auto">
                      <h2 className='text-[45px] font-sans font-bold flex justify-center mb-[10px]'>Login</h2>
                      <span className=' font-normal font-sans text-[#9096B2] text-[17px] flex justify-center mb-[25px]' >Please login using account detail bellow.</span>
                      <input className=' w-[80%] h-[52px] border-[2px] my-[15px] border-[#9096B2] px-[20px] outline-none text-[#9096B2] text-[17px] items-center' placeholder=' Email Adress' type="text" />
                      </div>
                    </div>
                </Container>

    </section>
  )
}

export default Login