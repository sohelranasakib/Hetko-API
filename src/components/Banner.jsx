import React from 'react'
import ban from "../assets/banner.png"
import bann from "../assets/banner2.png"



const Banner = () => {

    return (
        <section className=' lg:pt-[140px] pt-[170px]'>
            <div className=" lg:pt-0 pt-[100px]">
            <div className="flex  ">
                <div className="lg:w-[15%] w-[100%]">
                    <div className="">
                        <img src={ban} alt="" />
                    </div>
                </div>
                <div className="lg:w-[43%]  flex">
                    <div className="lg:mt-[50%]  translate-y-[-50%]">
                        <h5 className='font-Sans font-bold lg:text-[16px] text-[12px] text-[#FB2E86]'>Best Furniture For Your Castle....</h5>
                        <h2 className='font-Sans font-bold lg:text-[48px] text-[10px] text-[#000]'>New Furniture Collection Trends in 2020</h2>
                        <h3 className='font-Sans font-bold lg:text-[16px] text-[12px] text-[#0D0E43]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                            in phasellus non in justo.</h3>
                        <button className='lg:py-[10px] py-[5px] lg:px-[25px] px-[2px] bg-[#FB2E86] lg:mt-[50px] font-Sans font-bold lg:text-[16px] text-[8px] text-[#fff] rounded-lg'>Shop Now</button>
                    </div>

                </div>
                <div className="lg:w-[38%]">
                    <div className="lg:mt-[40px] ">
                        <img src={bann} alt="" />
                    </div>
                </div>
            </div>
            </div>
        </section>
      
    )
}

export default Banner
