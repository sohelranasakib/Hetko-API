import React, { useContext, useEffect, useRef, useState } from 'react';
import Container from './Container';
import Flex from './Flex';
import logo from "../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { apiData } from './ContextApi';

const Navber = () => {
    let info = useContext(apiData);
    let [searchInput, setSearchInput] = useState('');
    let [searchFilter, setSearchFilter] = useState([]);
    let [highlightedIndex, setHighlightedIndex] = useState(-1); // State for highlighted index
    let [show, setShow] = useState(false);
    let berref = useRef();
    let navigate = useNavigate();

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (berref.current.contains(e.target) === true) {
                setShow(!show);
            } else {
                setShow(false);
            }
        });
    }, [show]);

    const handleInput = (e) => {
        setSearchInput(e.target.value);
        if (e.target.value === "") {
            setSearchFilter([]);
            setHighlightedIndex(-1); // Reset highlighted index
        } else {
            let seachone = info.filter((item) =>
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setSearchFilter(seachone);
            setHighlightedIndex(0); // Start highlighting the first item
        }
    };

    const handleSingleSearch = (id) => {
        navigate(`/product/${id}`);
        setSearchFilter([]);
        setSearchInput("");
        setHighlightedIndex(-1); // Reset highlighted index
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            setHighlightedIndex((prevIndex) =>
                Math.min(prevIndex + 1, searchFilter.length - 1)
            );
        } else if (e.key === "ArrowUp") {
            setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        } else if (e.key === "Enter" && highlightedIndex !== -1) {
            handleSingleSearch(searchFilter[highlightedIndex].id);
        }
    };

    return (
        <section className='py-4 bg-[#f1f1f1]'>
            <Container>
                <Flex>
                    <div className="lg:w-[15%]">
                        <div className=" lg:pl-0 pl-2">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>

                    <div className="lg:w-[40%] w-[10%]">
                        <ul className={`lg:flex lg:flex-row flex flex-col z-50  gap-y-3 gap-x-10  pl-[20px] pt-[20px] lg:pt-0 font-sans text-[#767676] text-[18px] font-medium lg:static fixed duration-[800ms]  ${show === true ? "bg-[#262626] top-[0px] left-0 w-1/2 h-full py-2" : "top-[0px] left-[-250px] h-full"}`}>
                            <li className='text-white flex justify-between items-center lg:hidden'>Menu <RxCross2 className='mr-[20px]' /></li>
                            <li><Link to="/" className='font-Sans font-semibold text-[16px] lg:text-[#0D0E43] text-white duration-300 ease-in-out hover:text-[#FB2E86] pt-1'>Home</Link></li>
                            <li><Link to="/pagesproduct" className='font-Sans font-semibold text-[16px] lg:text-[#0D0E43] text-white duration-300 ease-in-out hover:text-[#FB2E86] pt-1'>Pages</Link></li>
                            <li><Link to="/product" className='font-Sans font-semibold text-[16px] lg:text-[#0D0E43] text-white duration-300 ease-in-out hover:text-[#FB2E86] pt-1'>Products</Link></li>
                            <li><Link to="/blog" className='font-Sans font-semibold text-[16px] lg:text-[#0D0E43] text-white duration-300 ease-in-out hover:text-[#FB2E86] pt-1'>Blog</Link></li>
                            <li><Link to="/shoplist" className='font-Sans font-semibold text-[16px] lg:text-[#0D0E43] text-white duration-300 ease-in-out hover:text-[#FB2E86] pt-1'>Shop</Link></li>
                            <li><Link to="/contuct" className='font-Sans font-semibold text-[16px] lg:text-[#0D0E43] text-white duration-300 ease-in-out hover:text-[#FB2E86] pt-1'>Contact</Link></li>
                        </ul>
                    </div>

                    <div className="lg:w-[50%] w-[100%] text-end">
                        <div className="relative">
                            <input 
                                value={searchInput} 
                                onKeyDown={handleKeyDown} // Updated event handler
                                onChange={handleInput} 
                                type="text" 
                                placeholder='search...' 
                                className='w-[70%] h-[40px] rounded-lg bg-[#D9D9D9] outline-none pl-2' 
                            />
                            <div className="absolute w-[40px] h-[40px] top-[50%] right-0 translate-y-[-50%] bg-[#262626] rounded-r-lg">
                                <IoIosSearch className='text-[#ffff] text-[25px] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]' />
                            </div>
                            {searchFilter.length > 0 &&
                                <div className="w-[500px] h-[400px] overflow-y-scroll bg-[#f1f1f1] absolute lg:top-[53px] top-[75px] left-[220px] z-50 py-3">
                                    {searchFilter.map((item, index) => (
                                        <div key={item.id} 
                                             onClick={() => handleSingleSearch(item.id)} 
                                             className={`flex justify-around items-center pb-2 cursor-pointer ${highlightedIndex === index ? 'bg-gray-300' : ''}`}> {/* Highlight class */}
                                            <div>
                                                <img className='w-[100px] h-[100px]' src={item.thumbnail} alt="" />
                                            </div>
                                            <div>
                                                <h3 className='font-sans text-[14px] font-bold text-[#262626]'>{item.title}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>

                    <div ref={berref} className="lg:hidden pl-5 pr-5">
                        <FaBars className='text-[30px]' />
                    </div>

                </Flex>
            </Container>
        </section>
    );
}

export default Navber;
