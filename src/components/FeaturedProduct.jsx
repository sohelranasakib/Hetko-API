import React, { useContext } from 'react'
import Container from './Container'
import Featured from './Featured'
import { apiData } from './ContextApi'
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';



function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className=' h-[50px] w-[50px] bg-[#575656] rounded-full text-center leading-[50px] text-[24px] text-white absolute top-[50%] right-0 lg:right-[-20px] z-50 translate-y-[-50%]'><FaChevronRight className=' inline-block' /> </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className=' h-[50px] w-[50px] bg-[#575656] rounded-full text-center leading-[50px] text-[24px] text-white absolute top-[50%] left-0 lg:left-[-20px] z-50 translate-y-[-50%]'><FaChevronLeft className=' inline-block' /> </div>
    );
  }
  

 
  

const FeaturedProduct = () => {
    let data = useContext(apiData)

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              
            }
          },
         
        ]
      };
    
  return (
    <section className='lg:py-[70px]'>
        <Container>
        <h3 className='font-Sans font-bold lg:text-[42px] text-[32px] text-[#0D0E43] text-center'>Featured Products</h3>
        
            <Slider {...settings}>
            {data.map((item)=>(
               <Link to="/product">
               <Featured item={item}/>
               </Link>
            ))}
           
            </Slider>
         
        </Container>
    </section>
  )
}

export default FeaturedProduct