import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { Link, useNavigate } from 'react-router-dom'
import { RxCaretRight, RxCross2 } from "react-icons/rx";
import cart01 from "../assets/cart01.png"
import { useDispatch, useSelector } from 'react-redux';
import { productDecrement, productIcrement, removeProduct } from '../components/slice/productSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ShopingCart = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let data = useSelector((state) => state.product.cartItem)

    let handleIcrement = (index) => {
        dispatch(productIcrement(index))

    }
    let handleDecrement = (index) => {
        dispatch(productDecrement(index))

    }
    let handleRemove = (index) => {
        dispatch(removeProduct(index))
    }

    const { totalPrice, totalQuantity } = data.reduce((acc, item) => {
        acc.totalPrice += item.price * item.qun
        acc.totalQuantity += item.qun
        return acc
    }, { totalPrice: 0, totalQuantity: 0 })

    let handleCheckOut = () => {
        toast("Wow so easy!")
        setTimeout(() => {
            navigate("/checkout")
        }, 2000)
    }


    return (
        <section className=' pt-[148px]'>
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
                <div className=" lg:flex lg:my-[100px] my-[15px]">

                    <div className=" w-[60%]">
                        <div className=" flex justify-between lg:pl-[130px] pl-[20px] lg:gap-0 gap-5">
                            <h3 className='font-Sans font-bold text-[20px] text-[#0D0E43]'>Product</h3>
                            <h3 className='font-Sans font-bold text-[20px] text-[#0D0E43]'>Price</h3>
                            <h3 className='font-Sans font-bold text-[20px] text-[#0D0E43]'>Quantity</h3>
                            <h3 className='font-Sans font-bold text-[20px] text-[#0D0E43]'>Total</h3>
                        </div>
                        {data.map((item, index) => (
                            <div className=" flex pt-[40px] relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#C7CEE4]  ">
                                <div className="">
                                <div className=" lg:flex gap-x-2">
                                    <div className=" relative">
                                        <img className=' lg:w-[200px] h-[100px]' src={item.thumbnail} alt="" />
                                        <div onClick={() => handleRemove(index)} className=" absolute top-[-10px] right-[-10px] bg-black rounded-full text-[#fff] text-[23px] ">
                                            <RxCross2 className=' ' />
                                        </div>
                                    </div>
                                    <div className=" pl-10">
                                        <div className=" lg:w-[200px] w-[100px]">
                                            <h3 className=' font-bold lg:text-[16px] font-sans'>{item.title}</h3>
                                            {/* <h3>Color: {item.color}</h3>
                                            <h3>Size:XL</h3> */}
                                        </div>
                                    </div>
                                   
                                </div>
                               
                                </div>
                                
                                <div className="w-[70%] lg:flex justify-between lg:pl-[10px] pl-[100px]">
                                    <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43] mr-[30px]'>${item.price}</h3>
                                    <div className=" lg:flex">
                                        <h2 onClick={() => handleDecrement(index)} className='font-Sans font-bold text-[20px] text-[#0D0E43]'>-</h2>
                                        <h2 className='font-Sans font-bold text-[16px] text-[#0D0E43] px-3'>{item.qun}</h2>
                                        <h2 onClick={() => handleIcrement(index)} className='font-Sans font-bold text-[20px] text-[#0D0E43]'>+</h2>
                                    </div>
                                    <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>${item.price * item.qun}</h3>
                                </div>
                            </div>
                        ))}



                        {/* <div className="flex justify-between">
                            <button className='py-[10px] px-[30px] bg-[#FB2E86] hover:bg-black mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Update Curt</button>
                            <button className='py-[10px] px-[30px] bg-[#FB2E86] hover:bg-black mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Clear Curt</button>
                        </div> */}

                    </div>
                    <div className="lg:w-[30%] w-[100%] lg:pl-[90px] lg:px-0 px-4">
                        <div className=" text-center lg:pt-0 pt-8">
                            <h3 className='font-Sans font-bold text-[20px] text-[#0D0E43]'>Cart Totals</h3>
                            <div className="py-[20px] px-[20px] bg-[#F4F4FC] mt-[10px] rounded-md">
                                <div className=" mb-[30px] flex justify-between relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#C7CEE4]">
                                    <h3 className='font-Sans font-semibold text-[18px] text-[#262626]'>Total Quantity:</h3>
                                    <h3 className='font-Sans font-semibold text-[18px] text-[#262626]'>{totalQuantity}</h3>
                                </div>
                                <div className=" flex justify-between relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#C7CEE4]">
                                    <h3 className='font-Sans font-semibold text-[18px] text-[#262626]'>Subtotals:</h3>
                                    <h3 className='font-Sans font-semibold text-[18px] text-[#262626]'>${totalPrice}</h3>
                                </div>
                                <div className=" flex justify-between mt-[30px] relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#C7CEE4]">
                                    <h3 className='font-Sans font-semibold text-[18px] text-[#262626]'>Totals:</h3>
                                    <h3 className='font-Sans font-semibold text-[18px] text-[#262626]'>${totalPrice}</h3>
                                </div>
                                <div className=" flex gap-3 mt-[30px]">
                                    <input type="radio" name='yes' />
                                    <p className='font-Sans font-semibold text-[16px] text-[#262626]'>Shipping & taxes calculated at checkout</p>

                                </div>
                                <div onClick={handleCheckOut} className="">
                                    <button className='py-[10px] px-[60px] bg-[#19D16F] mt-[20px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg hover:bg-black hover:text-[#fff]'>Proceed To Cart</button>

                                </div>
                            </div>
                        </div>

                        {/* <div className="  mt-[50px]">
                            <div className="text-center">
                                <h3 className='font-Sans font-bold text-[20px] text-[#0D0E43]'>Cart Totals</h3>
                            </div>
                            <div className="py-[20px] px-[20px] bg-[#F4F4FC] mt-[20px] rounded-md">
                                <div className="  relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#C7CEE4]">
                                    <h3 className='font-Sans font-semibold text-[18px] text-[#262626]'>Subtotals:</h3>

                                </div>
                                <div className=" mt-[30px]   relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#C7CEE4]">
                                    <h3 className='font-Sans font-semibold text-[18px] text-[#262626]'>Totals:</h3>

                                </div>

                                <div className=" ">
                                    <button className='py-[10px] px-[30px] bg-[#FB2E86] mt-[50px] font-Sans font-bold text-[16px] text-[#262626] rounded-lg  hover:bg-black hover:text-[#fff]'>Calculate Shopping</button>
                                </div>
                            </div>

                        </div> */}

                    </div>

                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"

                    />
                </div>
            </Container>
        </section>
    )
}

export default ShopingCart