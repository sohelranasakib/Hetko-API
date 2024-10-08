import React, { useContext, useEffect, useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { RxCaretRight } from "react-icons/rx";
import ProductsBar from '../components/ProductsBar';
import { FaRegHeart, FaSearchPlus } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { apiData } from '../components/ContextApi';
import { FaCaretDown, FaCaretUp, FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/slice/productSlice';
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";


const PagesProduct = () => {
    let data = useContext(apiData)
    let [filterShow, setFilterShow] = useState([])

    let [allshow, setAllShow] = useState(true)

    let [brandSearchFilter, setBrandSearchFilter] = useState([])

    let dispatch = useDispatch()

    let [brandshow, setBrandShow] = useState(false)
    let [categoryshow, setCategoryShow] = useState(false)
    let [priceshow, setPriceShow] = useState(false)
    // let [discountshow, setDiscountShow] = useState(false)
    // let [ratingshow, setRatingShow] = useState(false)

    let [brand, setBrand] = useState([])
    let [category, setCategory] = useState([])
    // let [price, setPrice] = useState([])
    // let [discountPercentage, setDiscountPercentage] = useState([])
    // let [rating, setRating] = useState([])



    useEffect(() => {
        setBrand([...new Set(data.map((item) => item.brand))])
    }, [data])

    useEffect(() => {
        setCategory([...new Set(data.map((item) => item.category))])
    }, [data])


    // useEffect(() => {
    //     setDiscountPercentage([...new Set(data.map((item) => item.discountPercentage))])
    // }, [data])

    // useEffect(() => {
    //     setRating([...new Set(data.map((item) => item.rating))])
    // }, [data])

    useEffect(() => {
        let filterAmi = brandSearchFilter.slice(0, 4)
        setFilterShow(filterAmi)
    }, [brandSearchFilter])



    let handleBrand = (citem) => {
        let brandFilter = data.filter((item) => item.brand == citem)
        setBrandSearchFilter(brandFilter)
    }

    let handleCategory = (citem) => {
        let categoryFilter = data.filter((item) => item.category == citem)
        setBrandSearchFilter(categoryFilter)
    }

    let handlePrice = (citem) => {
        let priceFilter = data.filter((item) => item.price == citem)
        setBrandSearchFilter(priceFilter)
    }

    // let handleDiscount = (citem) => {
    //     let discountFilter = data.filter((item) => item.discountPercentage == citem)
    //     setBrandSearchFilter(discountFilter)
    // }


    // let handleRating = (citem) => {
    //     let ratingFilter = data.filter((item) => item.rating == citem)
    //     setBrandSearchFilter(ratingFilter)
    // }

    let handleAddTCart = (item) => {
        dispatch(addToCart({ ...item, qun: 1 }))

    }

    let handleShow = () => {
        setFilterShow(brandSearchFilter)
        setAllShow(false)
    }

    let handleHide = () => {
        let filterAmi = brandSearchFilter.slice(0, 4)
        setFilterShow(filterAmi)
        setAllShow(true)
    }

    

    return (
        <section className=' lg:pt-[148px] pt-[173px] pb-[50px]'>
            <div className="lg:pb-[40px] pb-[10px] pl-5 bg-[#F6F5FF]">
                <Container>
                    <div className=" lg:pt-5">
                        <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold'>Shop Left Sidebar</h2>
                        <h3 className="flex items-center gap-x-1 font-sans text-[12px] text-[#767676] font-normal">
                            <Link to="/">Home</Link><RxCaretRight />Pages <RxCaretRight /> Shop Left Sidebar
                        </h3>
                    </div>
                </Container>

            </div>

            <Container>
                <div className="">
                    <ProductsBar/>
                </div>
                <div className=" lg:flex">
                    <div className="lg:w-[20%] w-[100%]">
                        <div className="">
                            <div className="">
                                <h2 onClick={() => setBrandShow(!brandshow)} className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[3px] after:w-[150px] after:bg-[#fff] hover:after:bg-black flex items-center gap-x-5'>Product Brand <p>{brandshow == true ? <FaCaretUp /> : <FaCaretDown />}</p></h2>
                            </div>
                            {brandshow &&
                                <div className=' overflow-y-scroll lg:h-[300px] h-[100px]  '>
                                    {brand.map((item) => (
                                        <div onClick={() => handleBrand(item)} className="flex items-center  gap-3 py-2">
                                            <input type="radio" name='yes' />
                                            <p className="font-Sans font-semibold text-[16px] text-[#0D0E43] relative after:absolute after:contain-[''] after:bottom-[0px] after:left-0 after:h-[2px] after:w-[100%] after:bg-[#fff] hover:after:bg-black capitalize">{item}</p>
                                        </div>

                                    ))}
                                </div>

                            }
                        </div>

                        <div className=" py-5">
                            <div className="">
                                <h2 onClick={() => setCategoryShow(!categoryshow)} className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[3px] after:w-[150px] after:bg-[#fff] hover:after:bg-black flex items-center gap-x-5'>Category item <p>{categoryshow == true ? <FaCaretUp /> : <FaCaretDown />}</p></h2>
                            </div>
                            {categoryshow &&
                                <div className="mt-[10px] overflow-y-scroll lg:h-[300px] h-[100px] ">
                                    {category.map((item) => (
                                        <div onClick={() => handleCategory(item)} className=' flex items-center gap-2 py-1'>
                                            <input type="radio" name='yes' />
                                            <p className="font-Sans font-semibold text-[16px] text-[#0D0E43] relative after:absolute after:contain-[''] after:bottom-[0px] after:left-0 after:h-[2px] after:w-[100%] after:bg-[#fff] hover:after:bg-black capitalize ">{item}</p>
                                        </div>
                                    ))}


                                </div>
                            }
                        </div>
                        <div className="">
                            <div className=" ">
                                <h2 onClick={() => setPriceShow(!priceshow)} className='relative font-Sans font-bold text-[22px] text-[#0D0E43] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[3px] after:w-[50px] after:bg-[#fff] hover:after:bg-black  flex items-center gap-[113px]'>Price {priceshow == true ? <TiArrowSortedUp  /> : <TiArrowSortedDown  />}</h2>

                            </div>
                            {priceshow &&

                                <ul className='overflow-y-scroll lg:h-[300px] h-[100px]  '>


                                    <li onClick={()=>handlePrice({low:0 , high:10})} className=' relative font-sans font-semibold   lg:text-[16px] text-[10px]  text-[#262626] lg:mb-[10px] mb-[4px] lg:py-[10px] lg:w-[40%]  hover:bg-[#262626] hover:text-[#fff] rounded-lg after:absolute after:content-[""] after:h-[1px] after:w-[100%] after:bg-[#D8D8D8] after:left-0 after:bottom-0 cursor-pointer duration-700 ease-in-out'>0$ - 10$</li>
                                    <li onClick={()=>handlePrice({low:10 , high:20})} className=' relative font-sans font-semibold   lg:text-[16px] text-[10px]  text-[#262626] lg:mb-[10px] mb-[4px] lg:py-[10px] lg:w-[40%]  hover:bg-[#262626] hover:text-[#fff] rounded-lg after:absolute after:content-[""] after:h-[1px] after:w-[100%] after:bg-[#D8D8D8] after:left-0 after:bottom-0 cursor-pointer duration-700 ease-in-out'>10$ - 20$</li>
                                    <li onClick={()=>handlePrice({low:20 , high:50})} className=' relative font-sans font-semibold  lg:text-[16px] text-[10px]  text-[#262626] lg:mb-[10px] mb-[4px] lg:py-[10px] lg:w-[40%]  hover:bg-[#262626] hover:text-[#fff] rounded-lg after:absolute after:content-[""] after:h-[1px] after:w-[100%] after:bg-[#D8D8D8] after:left-0 after:bottom-0 cursor-pointer duration-700 ease-in-out'>20$ - 50$</li>
                                    <li onClick={()=>handlePrice({low:50 , high:100})} className=' relative font-sans font-semibold  lg:text-[16px] text-[10px]  text-[#262626] lg:mb-[10px] mb-[4px] lg:py-[10px] lg:w-[40%]  hover:bg-[#262626] hover:text-[#fff] rounded-lg after:absolute after:content-[""] after:h-[1px] after:w-[100%] after:bg-[#D8D8D8] after:left-0 after:bottom-0 cursor-pointer duration-700 ease-in-out'>50$ - 100$</li>
                                    <li onClick={()=>handlePrice({low:100 , high:500})} className=' relative font-sans font-semibold  lg:text-[16px] text-[10px]  text-[#262626] lg:mb-[10px] mb-[4px] lg:py-[10px] lg:w-[40%]  hover:bg-[#262626] hover:text-[#fff] rounded-lg after:absolute after:content-[""] after:h-[1px] after:w-[100%] after:bg-[#D8D8D8] after:left-0 after:bottom-0 cursor-pointer duration-700 ease-in-out'>100$ - 500$</li>
                                    <li onClick={()=>handlePrice({low:500 , high:1000})} className=' relative font-sans font-semibold  lg:text-[16px] text-[10px]  text-[#262626] lg:mb-[10px] mb-[4px] lg:py-[10px] lg:w-[40%]  hover:bg-[#262626] hover:text-[#fff] rounded-lg after:absolute after:content-[""] after:h-[1px] after:w-[100%] after:bg-[#D8D8D8] after:left-0 after:bottom-0 cursor-pointer duration-700 ease-in-out'>500$ - 1000$</li>
                                    <li onClick={()=>handlePrice({low:1000 , high:2000})} className=' relative font-sans font-semibold  lg:text-[14px] text-[10px]  text-[#262626] lg:mb-[10px] mb-[4px] lg:py-[10px] lg:w-[40%]  hover:bg-[#262626] hover:text-[#fff] rounded-lg after:absolute after:content-[""] after:h-[1px] after:w-[100%] after:bg-[#D8D8D8] after:left-0 after:bottom-0 cursor-pointer duration-700 ease-in-out'>1000$ - 2000$</li>
                                    <li onClick={()=>handlePrice({low:2000 , high:4000})} className=' relative font-sans font-semibold  lg:text-[14px] text-[10px]  text-[#262626] lg:mb-[10px] mb-[4px] lg:py-[10px] lg:w-[40%]  hover:bg-[#262626] hover:text-[#fff] rounded-lg after:absolute after:content-[""] after:h-[1px] after:w-[100%] after:bg-[#D8D8D8] after:left-0 after:bottom-0 cursor-pointer duration-700 ease-in-out'>2000$ - 4000$</li>


                                </ul>
                            }

                        </div>

                        {/* <div className=" py-5">
                            <div className="">
                                <h2 onClick={() => setDiscountShow(!discountshow)} className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[3px] after:w-[150px] after:bg-[#fff] hover:after:bg-black flex items-center gap-x-5'>Discount Offer <p>{discountshow == true ? <FaCaretUp /> : <FaCaretDown />}</p></h2>
                            </div>
                            {discountshow &&
                                <div className="mt-[10px]">
                                    {discountPercentage.map((item) => (
                                        <div onClick={() => handleDiscount(item)} className=' flex items-center  gap-3 py-1'>
                                            <input type="radio" name='yes' />
                                            <p className="font-Sans font-semibold text-[16px] text-[#0D0E43] relative after:absolute after:contain-[''] after:bottom-[0px] after:left-0 after:h-[2px] after:w-[100%] after:bg-[#fff] hover:after:bg-black capitalize">{item}</p>
                                        </div>
                                    ))}

                                </div>
                            }
                        </div> */}

                        {/* <div className="">
                            <div className="">
                                <h2 onClick={() => setRatingShow(!ratingshow)} className=' relative font-Sans font-bold text-[22px] text-[#0D0E43] after:absolute after:contain-[""] after:bottom-0 after:left-0 after:h-[3px] after:w-[150px] after:bg-[#fff] hover:after:bg-black flex items-center gap-[50px]'>Rating item <p>{ratingshow == true ? <FaCaretUp /> : <FaCaretDown />}</p></h2>
                            </div>
                            {ratingshow &&
                                <div className="mt-[10px]">
                                    {rating.map((item) => (
                                        <div onClick={()=>handleRating(item)} className=' flex items-center gap-2 py-1'>
                                            <input type="radio" name='yes' />
                                            <p className="font-Sans font-semibold text-[16px] text-[#0D0E43] relative after:absolute after:contain-[''] after:bottom-[0px] after:left-0 after:h-[2px] after:w-[100%] after:bg-[#fff] hover:after:bg-black capitalize ">{item} </p>
                                            <FaStar className=' text-[#FFC107]'/>
                                        </div>
                                    ))}




                                </div>
                            }
                        </div> */}


                    </div>
                    <div className="lg:w-[70%] w-[100%]">
                        {brandSearchFilter.length > 0 ?
                            <div className="">
                                {filterShow.map((item) => (
                                    <div className=" flex gap-x-10 py-[10px] pb-[30px]">
                                        <div className="lg:w-[40%] w-full">
                                            <div className=" relative group">
                                                <img className='w-full lg:h-[300px]' src={item.thumbnail} alt="" />
                                                <Link to={`/product/${item.id}`}>
                                                    <h3 className=" font-sans font-bold absolute top-[130px] left-[50%] translate-x-[-50%]  h-[40px] w-[120px] flex justify-center items-center bg-[#08D15F] rounded-lg text-[#fff] opacity-0 group-hover:top-[130px] duration-75 group-hover:opacity-[1] ">Shop Now</h3>
                                                </Link>

                                            </div>

                                        </div>
                                        <div className="lg:w-[55%] w-full">
                                            <div className="">
                                                <h2 className='font-Sans font-bold lg:text-[24px] text-[18px] text-[#0D0E43]'>{item.title}</h2>
                                                <div className="flex">
                                                    <div className="flex lg:mt-[20px]">
                                                        <h3 className='font-Sans font-bold lg:text-[16px] text-[#0D0E43]'>${item.price} <span className=' ml-[20px] text-[#1e7e3e]'>{item.discountPercentage}% <span className=''>Discount</span></span></h3>

                                                    </div>
                                                    {/* <div className="flex mt-[20px] gap-2 ml-[20px]">
                                                       {clintRating}
                                               </div> */}
                                                </div>
                                                <h2 className=' font-Sans font-bold lg:text-[16px] text-[12px] text-[#FB2E86]'>Stock: {item.stock}</h2>
                                                <p className='font-Sans font-semibold lg:text-[16px] text-[11px] text-[#0D0E43] mt-[20px] lg:w-[80%]'>{item.description}</p>
                                                <div className="flex my-[10px] gap-6">
                                                    <FiShoppingCart />
                                                    <FaRegHeart />
                                                    <FaSearchPlus />
                                                </div>
                                                <Link to={`/product/${item.id}`}>
                                                    <button className='lg:py-[10px] py-[5px] lg:px-[25px] px-[10px] bg-[#262626] mt-[0px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Shop Now</button>
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                                {allshow ? brandSearchFilter.length > 5 &&
                                    <button onClick={handleShow} className=' font-sans font-bold text-[18px] px-[20px] py-[10px] border-2   hover:bg-[#262626] hover:text-[#fff] rounded-lg duration-500 ease-in-out'>Show All</button>
                                    :
                                    <button onClick={handleHide} className=' font-sans font-bold text-[18px] px-[20px] py-[10px] border-2 hover:bg-[#262626] hover:text-[#fff] rounded-lg duration-500 ease-in-out'>Hide</button>
                                }
                            </div>
                            :
                            <div className="">
                                {data.map((item) => (
                                    <div className=" flex gap-x-10 py-[10px]">
                                        <div className="lg:w-[40%] w-full">
                                            <Link to={`/product/${item.id}`}>
                                                <div className=" relative group">
                                                    <img className='w-full lg:h-[300px]' src={item.thumbnail} alt="" />

                                                    <h3 className=" font-sans font-bold absolute top-[130px] left-[50%] translate-x-[-50%]  h-[40px] w-[120px] flex justify-center items-center bg-[#08D15F] rounded-lg text-[#fff] opacity-0 group-hover:top-[130px] duration-75 group-hover:opacity-[1] ">Shop Now</h3>


                                                </div>
                                            </Link>
                                        </div>
                                        <div className="lg:w-[55%] w-full">
                                            <div className="">
                                                <h2 className='font-Sans font-bold text-[24px] text-[#0D0E43]'>{item.title}</h2>
                                                <div className="flex">
                                                    <div className="flex lg:mt-[20px]">
                                                        <h3 className='font-Sans font-bold text-[16px] text-[#0D0E43]'>${item.price} <span className=' ml-[20px] text-[#1e7e3e]'>{item.discountPercentage}% <span className=''>Discount</span></span></h3>

                                                    </div>
                                                    {/* <div className="flex mt-[20px] gap-2 ml-[20px]">
                                                {clintRating}
                                             </div> */}
                                                </div>
                                                <h2 className=' font-Sans font-bold text-[16px] text-[#FB2E86]'>Stock: {item.stock}</h2>
                                                <p className='font-Sans font-semibold lg:text-[16px] text-[11px] text-[#0D0E43] lg:mt-[20px] lg:w-[80%]'>{item.description}</p>
                                                <div className="flex my-[10px] text-[20px] gap-6">
                                                    <FiShoppingCart />
                                                    <FaRegHeart />
                                                    <div onClick={() => handleAddTCart(item)} className="">
                                                        <FaSearchPlus />
                                                    </div>
                                                </div>
                                                <Link to={`/product/${item.id}`}>
                                                    <button className='lg:py-[10px] py-[5px] py lg:px-[25px] bg-[#262626] mt-[0px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Shop Now</button>
                                                </Link>
                                            </div>

                                        </div>
                                    </div>

                                ))}

                            </div>
                        }


                    </div>
                </div>
            </Container>
        </section>
    )
}

export default PagesProduct