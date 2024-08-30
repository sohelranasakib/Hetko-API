import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { RxCaretRight } from "react-icons/rx";

const Error = () => {
  return (
    <section>
            <div className="lg:pb-[60px] pb-[10px] pl-5 bg-[#F6F5FF]">
                <Container>
                    <div className=" lg:pt-10">
                        <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold'> 404 Not Found</h2>
                        <h3 className="flex items-center gap-x-1 font-sans text-[12px] text-[#767676] font-normal">
                            <Link to="/">Home</Link><RxCaretRight />Pages <RxCaretRight /> 404 Not Found
                        </h3>
                    </div>
                </Container>
            </div>
            <Container>
              <div className=" py-[50px]">
                <div className="">
                  <h1 className='  font-sans font-bold text-[100px] text-center'>404</h1>
                  <h3 className=' font-sans font-bold text-[24px] text-[#262626] text-center pb-[20px]'>ooPs! The page you requested was not found!</h3>
                </div>
                <div className=" flex justify-center">
                  <a className=' font-sans font-bold py-[20px] px-[30px] bg-[#262626] text-[#fff] rounded-lg inline-block text-center' href="#"><Link>Back To Home</Link></a>
                </div>
              </div>
            </Container>
    </section>
  )
}

export default Error