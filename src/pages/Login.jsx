import React, { useState } from 'react'
import { RxCaretRight } from "react-icons/rx";
import Container from '../components/Container';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  let navigate = useNavigate()
  let [pshoww, setPshoww] = useState(false)

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  let handlePassword = (e)=>{
    setPassword(e.target.value)
  }

  let handleSubmit = (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
  .then((user) => {
   console.log("user", user);
   
  })
  .then(()=>{
    navigate("/account")
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
            <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold'>Login</h2>
            <h3 className="flex items-center gap-x-1 font-sans text-[12px] text-[#767676] font-normal">
              <Link to="/">Home</Link><RxCaretRight />Pages <RxCaretRight /> Login
            </h3>
          </div>
        </Container>
      </div>
      <Container>
        <div className="lg:py-[70px] py-[20px] w-[100%] lg:px-0 px-4">
          <div className="  lg:w-[544px] h-[474px] bg-[#F6F5FF] mx-auto">
            <h2 className='text-[45px] font-sans font-bold flex justify-center mb-[10px]'>Login</h2>
            <span className=' font-normal font-sans text-[#9096B2] text-[17px] flex justify-center mb-[25px]' >Please login using account detail bellow.</span>
            <div className="flex justify-center ">
              <input onChange={handleEmail} className=' w-[80%] h-[52px] border-[2px] my-[15px] border-[#9096B2] px-[20px] outline-none text-[#9096B2] text-[17px] items-center ' placeholder=' Email Adress' type="text" />
            </div>
            <div className="flex justify-center relative">
              <input onChange={handlePassword} className=' w-[80%] h-[52px] border-[2px] my-[15px] border-[#9096B2] px-[20px] outline-none text-[#9096B2] text-[17px] items-center ' placeholder=' Password' type={pshoww ? "text" : "password"} />
              <div onClick={(() => setPshoww(!pshoww))} className=" absolute top-[50%] translate-y-[-50%] right-[60px]">
                                        {pshoww == true ? <FaEye /> : <FaEyeSlash />}
                                    </div>
            </div>
            <div className=" flex justify-center">
            <span className=' lg:w-[28%] font-bold font-sans text-[#9096B2] text-[17px]  border-b-2 mb-[25px] border-[#d4cdcd] hover:text-[#262626] hover:border-[#262626]' >Forgot password?</span>
            </div>
            <div className="flex justify-center mb-5">
              <a onClick={handleSubmit} className=' font-sans font-bold text-[20px] py-[10px] w-[80%] bg-[#FB2E86] text-[#fff] text-center ' href="#"> Sign In </a>
            </div>
            <div className=" flex justify-center">
              <Link to="/signup">
              <span className='w-[31%] font-bold font-sans text-[#9096B2] text-[17px]  border-b-2 mb-[25px] border-[#d4cdcd] hover:text-[#262626] hover:border-[#262626]' > Create new account</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>

    </section>
  )
}

export default Login