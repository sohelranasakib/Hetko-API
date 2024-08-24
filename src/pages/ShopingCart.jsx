import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'
import { RxCaretRight } from "react-icons/rx";

const ShopingCart = () => {
  return (
    <section>
          <div className="lg:pb-[60px] pb-[10px] pl-5 bg-[#F6F5FF]">
                <Container>
                    <div className=" lg:pt-10">
                        <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold'>Shopping Cart</h2>
                        <h3 className="flex items-center gap-x-2 font-sans text-[12px] text-[#767676] font-normal">
                            <Link to="/">Home</Link><RxCaretRight /> Shopping Cart
                        </h3>
                    </div>
                </Container>
            </div>
        <Container>
            <Flex>
                <h3>hh</h3>
            </Flex>
        </Container>
    </section>
  )
}

export default ShopingCart