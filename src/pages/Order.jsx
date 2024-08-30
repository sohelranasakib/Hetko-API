import React from 'react'
import Container from '../components/Container'
import clock from "../assets/clock .png"
import clock00 from "../assets/clock00.png"
import clock01 from "../assets/clock01.png"
import { Link } from 'react-router-dom'
import { RxCaretRight } from "react-icons/rx";

const Order = () => {
  return (
    <section className='py-[0px] px-3'>
          <div className="lg:pb-[50px] pb-[10px] pl-5 bg-[#F6F5FF]">
        <Container>
          <div className=" lg:pt-10">
            <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold'>Products</h2>
            <h3 className="flex items-center gap-x-1 font-sans text-[12px] text-[#767676] font-normal">
              <Link to="/">Home</Link><RxCaretRight /> Pages <RxCaretRight /> Products
            </h3>
          </div>
        </Container>
      </div>
    <Container>
                <div className="mt-[50px] ml-[100px]">
                    <img src={clock} alt="" />
                </div>
        
                <div className=" text-center">
                    <div className="">
                        <img className='ml-[50%] translate-x-[-50%] mt-[20px]' src={clock00} alt="" />
                        <h3 className='  font-Sans font-bold text-[36px] text-[#0D0E43] mt-[20px] '>Your Order Is Completed! </h3>
                        
                        <p className='  font-Sans font-semibold text-[14px] text-[#0D0E43] mt-[20px] lg:w-[40%] w-full lg:ml-[50%] lg:translate-x-[-50%] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                        <button className='py-[10px] px-[30px] bg-[#FB2E86] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'> <Link to="/"> Back to Home </Link> </button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-[90%]"></div>
                    <div className="w-[10%]">
                    <img className=' mr-[10%]' src={clock01} alt="" />
                    </div>
                </div>
    </Container>
   </section>
  )
}

export default Order