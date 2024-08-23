import React from 'react'
import Container from './Container'
import blog from "../assets/blog.png"

const LetestBlog = () => {
    return (
        <section className=' pb-[100px]'>
            <Container>
                <div className=" text-center ">
                    <h3 className='font-Sans font-bold text-[42px] text-[#0D0E43]'>Leatest Blog</h3>
                </div>
                <div className="lg:flex justify-between mt-[50px] px-3">
                    <div className="lg:w-[33%] w-full duration-300 ease-in-out hover:mt-3">
                        <img src={blog} alt="" />
                        <div className="py-[20px] px-3 ">
                            <h5 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>SaberAli</h5>
                            <h2 className='font-Sans font-bold text-[22px] text-[#0D0E43] mt-[20px]'>Top esssential Trends in 2021</h2>
                            <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[10px]'>More off this less hello samlande lied much
                                over tightly circa horse taped mightly</p>
                            <h3 className=' relative font-Sans font-bold text-[18px] text-[#0D0E43] mt-[10px] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[90px] after:bg-[#0D0E43]'>Shop Now</h3>
                        </div>
                    </div>
                    <div className="lg:w-[33%] w-full duration-300 ease-in-out hover:mt-3">
                        <img src={blog} alt="" />
                        <div className="py-[20px] px-3 ">
                            <h5 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>SaberAli</h5>
                            <h2 className='font-Sans font-bold text-[22px] text-[#0D0E43] mt-[20px]'>Top esssential Trends in 2021</h2>
                            <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[10px]'>More off this less hello samlande lied much
                                over tightly circa horse taped mightly</p>
                            <h3 className=' relative font-Sans font-bold text-[18px] text-[#0D0E43] mt-[10px] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[90px] after:bg-[#0D0E43]'>Shop Now</h3>
                        </div>
                    </div>
                    <div className="lg:w-[33%] w-full duration-300 ease-in-out hover:mt-3">
                        <img src={blog} alt="" />
                        <div className="py-[20px] px-3 ">
                            <h5 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>SaberAli</h5>
                            <h2 className='font-Sans font-bold text-[22px] text-[#0D0E43] mt-[20px]'>Top esssential Trends in 2021</h2>
                            <p className='font-Sans font-semibold text-[16px] text-[#0D0E43] mt-[10px]'>More off this less hello samlande lied much
                                over tightly circa horse taped mightly</p>
                            <h3 className=' relative font-Sans font-bold text-[18px] text-[#0D0E43] mt-[10px] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[90px] after:bg-[#0D0E43]'>Shop Now</h3>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default LetestBlog