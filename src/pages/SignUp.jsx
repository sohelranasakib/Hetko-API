import React, { useState } from 'react'
import { RxCaretRight } from "react-icons/rx";
import Container from '../components/Container';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDatabase, ref, set } from "firebase/database";


const SignUp = () => {
    const auth = getAuth();
    const db = getDatabase();
    let navigate = useNavigate()

    let [pshow, setPshow] = useState(false)
    let [pshowR, setPshowR] = useState(false)

    let [firstName, setFistName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')


    let handleFirstName = (e) => {
        setFistName(e.target.value)
    }

    let handleEmail = (e) => {
        setEmail(e.target.value)
    }

    let handlePassword = (e) => {
        setPassword(e.target.value);

    }

    let handleSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {})
            .then(()=>{
                updateProfile(auth.currentUser, {
                    displayName: firstName,
                    
                  })
            })
            .then(()=>{
                toast("go to login page")
                setEmail("")
                setPassword("")
                setTimeout(() => {
                    navigate("/login")
                }, 2000);
            })
            .then(()=>{
                set(ref(db, 'user/'), {
                    username: firstName,
                    email: email,
                   
                  });
          })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    }
    return (
        <section className=' lg:pt-[148px] pt-[173px]'>
            <div className="lg:pb-[60px] pb-[10px] pl-5 bg-[#F6F5FF] ">
                <Container>
                    <div className=" lg:pt-10">
                        <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold'>Sign Up</h2>
                        <h3 className="flex items-center gap-x-1 font-sans text-[12px] text-[#767676] font-normal">
                            <Link to="/">Home</Link><RxCaretRight />Pages <RxCaretRight /> Sign Up
                        </h3>
                    </div>
                </Container>
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
            <Container>
                <div className=" py-[40px] lg:pl-0 pl-4">
                    <div className="">
                        <h2 className=' font-sans text-[#262626] lg:text-[28px] text-[20px] font-bold'>Your Personal Details</h2>
                        <div className="flex gap-x-10 py-[10px]">
                            <div className=" w-[35%]">
                                <h3 className=' font-sans text-[#262626] lg:text-[18px]  font-bold'>First Name</h3>
                                <input onChange={handleFirstName} className=' w-[100%] h-[45px] border-b-2 border-[#8d8686] outline-none' placeholder=' First Name' type="text" />
                            </div>
                            <div className=" w-[35%]">
                                <h3 className='font-sans text-[#262626] lg:text-[18px]  font-bold'>Last Name</h3>
                                <input className=' w-[100%] h-[45px] border-b-2 border-[#8d8686] outline-none' placeholder=' Last Name' type="text" />
                            </div>
                        </div>
                        <div className="flex gap-x-10">
                            <div className=" w-[35%]">
                                <h3 className=' font-sans text-[#262626] lg:text-[18px]  font-bold'>Email Address</h3>
                                <input onChange={handleEmail} className=' w-[100%] h-[45px] border-b-2 border-[#8d8686] outline-none' placeholder=' Your gmail' value={email} type="text" />
                            </div>
                            <div className=" w-[35%]">
                                <h3 className='font-sans text-[#262626] lg:text-[18px]  font-bold'>Telephone</h3>
                                <input className=' w-[100%] h-[45px] border-b-2 border-[#8d8686] outline-none' placeholder=' Your phone number' type="text" />
                            </div>
                        </div>

                    </div>
                    <div className=" py-[60px]">
                        <h2 className=' font-sans text-[#262626] lg:text-[28px] text-[20px] font-bold'>New Customer</h2>
                        <div className="flex gap-x-10 py-[10px]">
                            <div className=" w-[35%]">
                                <h3 className=' font-sans text-[#262626] lg:text-[18px]  font-bold'>Present Address</h3>
                                <input className=' w-[100%] h-[45px] border-b-2 border-[#8d8686] outline-none' placeholder=' Your address' type="text" />
                            </div>
                            <div className=" w-[35%]">
                                <h3 className='font-sans text-[#262626] lg:text-[18px]  font-bold'> Permanent Address</h3>
                                <input className=' w-[100%] h-[45px] border-b-2 border-[#8d8686] outline-none' placeholder=' Your address' type="text" />
                            </div>
                        </div>
                        <div className="flex gap-x-10">
                            <div className=" w-[35%]">
                                <h3 className=' font-sans text-[#262626] lg:text-[18px]  font-bold'>City</h3>
                                <input className=' w-[100%] h-[45px] border-b-2 border-[#8d8686] outline-none' placeholder=' Your city' type="text" />
                            </div>
                            <div className=" w-[35%]">
                                <h3 className='font-sans text-[#262626] lg:text-[18px]  font-bold'>Post code</h3>
                                <input className=' w-[100%] h-[45px] border-b-2 border-[#8d8686] outline-none' placeholder=' Your post code' type="text" />
                            </div>
                        </div>

                    </div>
                    <div className="">
                        <h2 className=' font-sans text-[#262626] lg:text-[28px] text-[20px] font-bold'>Your Password</h2>
                        <div className="flex gap-x-10 py-[10px]">
                            <div className=" w-[35%] relative">
                                <h3 className=' font-sans text-[#262626] lg:text-[18px]  font-bold'>Password</h3>
                                <div className=" relative">
                                    <input onChange={handlePassword} className=' w-[100%] h-[45px] border-b-2 border-[#8d8686] outline-none ' placeholder=' Your password' type={pshow ? "text" : "password"} />
                                    <div onClick={(() => setPshow(!pshow))} className=" absolute top-[50%] translate-y-[-50%] right-1">
                                        {pshow == true ? <FaEye /> : <FaEyeSlash />}
                                    </div>
                                </div>
                            </div>
                            <div className=" w-[35%] relative">
                                <h3 className=' font-sans text-[#262626] lg:text-[18px]  font-bold'>Repeat Password</h3>
                                <div className=" relative">
                                    <input className=' w-[100%] h-[45px] border-b-2 border-[#8d8686] outline-none ' placeholder=' Repeat Password' type={pshowR ? "text" : "password"} />
                                    <div onClick={(() => setPshowR(!pshowR))} className=" absolute top-[50%] translate-y-[-50%] right-1">
                                        {pshowR == true ? <FaEye /> : <FaEyeSlash />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex items-center gap-x-2 pt-[30px]">
                        <input type="radio" name=' yes' />
                        <h3 className=' font-normal font-sans text-[#9096B2] text-[17px]'>I have read and agree to the Privacy Policy</h3>
                    </div>
                    <div className=" pt-[10px]">
                        <a onClick={handleSubmit} className=' font-sans font-bold text-[20px] py-[10px] px-[30px] bg-[#262626] text-[#fff] inline-block rounded-lg'>Sign Up </a>
                    </div>
                </div>
            </Container>
        </section>

    )
}

export default SignUp