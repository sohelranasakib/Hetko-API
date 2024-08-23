import React from 'react'
import Container from './Container'
import chair000 from "../assets/chair000.png"
import top from "../assets/top.png"
import top01 from "../assets/top01.png"
import top02 from "../assets/top02.png"
import top03 from "../assets/top03.png"
import mini1 from "../assets/mini1.png"
import mini2 from "../assets/mini2.png"
import mini01 from "../assets/mini01.png"
import Slider from "react-slick";


const TopCatagoris = () => {
   
    const settings = {
       
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
      arrows:false,
      
   
        appendDots: dots => (
          <div
            style={{
              borderRadius: "10px",
              padding: "10px",
              position:'absolute',
              left:'50%',
              bottom:'-50px',
              transform:'translateX(-50%)',
              
            }}
          >
            
            <ul style={{ margin: "0px" , display:'flex' }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={{
              width: "70px",
              color: "transparent",
              padding: "0  20px",
              borderBottom: "6px #fff solid"
            }}
          >
             0{i + 1}
          </div>
        )
      };

  return (
    <section>
        <Container>
        <div className=" text-center ">
                <h3 className='font-Sans font-bold lg:text-[42px] text-[32px] text-[#0D0E43]'>Top Catagoris</h3>
            </div>
           
         
          <Slider  {...settings}>

          
          <div className="lg:w-[24%] w-full pt-[20px] pb-2 px-3  ">
                    <div className=" bg-[#F6F7FB] py-[50px] lg:rounded-full">
                   <img className='ml-[50%] translate-x-[-50%]' src={top} alt="" />
                   <button className='py-[10px] px-[25px] bg-[#08D15F] ml-[50%] translate-x-[-50%] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>View Shop</button>
                    </div>
                    <div className=" relative text-center  px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] '>Mini LCW chair</h3>
                        <h4 className=' relative font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>$56.00</h4>
                        
                        
                    </div>
                </div>
            <div className="lg:w-[24%] w-full pt-[20px] pb-2 px-3  ">
                    <div className=" bg-[#F6F7FB] py-[50px] lg:rounded-full">
                   <img className='ml-[50%] translate-x-[-50%]' src={top01} alt="" />
                   <button className='py-[10px] px-[25px] bg-[#08D15F] ml-[50%] translate-x-[-50%] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>View Shop</button>
                    </div>
                    <div className=" relative text-center   px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] '>Mini LCW chair</h3>
                        <h4 className=' relative font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>$56.00</h4>
                        
                        
                    </div>
                </div>
            <div className="lg:w-[24%] w-full pt-[20px] pb-2 px-3  ">
                    <div className="bg-[#F6F7FB] py-[50px] lg:rounded-full">
                   <img className='ml-[50%] translate-x-[-50%]' src={top02} alt="" />
                   <button className='py-[10px] px-[25px] bg-[#08D15F] ml-[50%] translate-x-[-50%] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>View Shop</button>
                    </div>
                    <div className=" relative text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] '>Mini LCW chair</h3>
                        <h4 className=' relative font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>$56.00</h4>
                        
                        
                    </div>
                </div>
            <div className="lg:w-[24%] w-full pt-[20px] pb-2 px-3  ">
                    <div className="bg-[#F6F7FB] py-[50px] lg:rounded-full">
                   <img className='ml-[50%] translate-x-[-50%]' src={top03} alt="" />
                   <button className='py-[10px] px-[25px] bg-[#08D15F] ml-[50%] translate-x-[-50%] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>View Shop</button>
                    </div>
                    <div className=" relative text-center  w-[100%] px-[40px] bg-[#fff] mt-[20px]  ">
                        
                        <h3 className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] '>Mini LCW chair</h3>
                        <h4 className=' relative font-Sans font-bold text-[16px] text-[#1A0B5B] mt-[10px] '>$56.00</h4>
                        
                        
                    </div>
                </div>
         
               </Slider>
          
          
            <div className=" lg:flex justify-between mt-[50px] px-3 py-10">
            <div className="lg:w-[35%] w-full">
                    <div className=" pt-[50px] px-[50px] bg-[#FFF6FB] ">
                        <div className="">
                        <h2 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>23% off in all products</h2>
                        <h3 className=' relative font-Sans font-bold text-[18px] text-[#FB2E86] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[90px] after:bg-[#FB2E86]'>Shop Now</h3>
                        </div>
                        <div className="ml-[200px] ">
                        <img className='' src={mini1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="lg:w-[35%] w-full">
                <div className=" pt-[50px] pb-[61px] px-[50px] bg-[#EEEFFB] ">
                        <div className="">
                        <h2 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>23% off in all products</h2>
                        <h3 className=' relative font-Sans font-bold text-[18px] text-[#FB2E86] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[130px] after:bg-[#FB2E86]'>View Collection</h3>
                        </div>
                        <div className="ml-[200px] ">
                        <img className='' src={mini2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="lg:w-[27%] w-full ">
                    <div className="flex gap-3 items-center">
                    <div className="">
                        <img src={mini01} alt="" />

                    </div>
                    <div className="">
                        <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Executive Seat chair</h3>
                        <h4 className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>$32.00</h4>
                    </div>
                    </div>
                    <div className="flex gap-3 items-center my-[16px]">
                    <div className="">
                        <img src={mini01} alt="" />

                    </div>
                    <div className="">
                        <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Executive Seat chair</h3>
                        <h4 className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>$32.00</h4>
                    </div>
                    </div>
                    <div className="flex gap-3 items-center">
                    <div className="">
                        <img src={mini01} alt="" />

                    </div>
                    <div className="">
                        <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>Executive Seat chair</h3>
                        <h4 className='font-Sans font-semibold text-[16px] text-[#0D0E43]'>$32.00</h4>
                    </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default TopCatagoris