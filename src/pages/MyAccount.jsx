import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { RxCaretRight } from "react-icons/rx";

const MyAccount = () => {
  return (
    <section className=' pt-[148px]'>
          <div className="lg:pb-[60px] pb-[10px] pl-5 bg-[#F6F5FF] ">
        <Container>
          <div className=" lg:pt-10">
            <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold'>My Account</h2>
            <h3 className="flex items-center gap-x-1 font-sans text-[12px] text-[#767676] font-normal">
              <Link to="/">Home</Link><RxCaretRight />Pages <RxCaretRight /> My Account
            </h3>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default MyAccount