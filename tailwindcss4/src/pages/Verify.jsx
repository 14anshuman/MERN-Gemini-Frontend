import React, { useState } from 'react'
import { UserData } from '../Context/userContext';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '../Components/Loading';
import { ChatData } from '../Context/ChatContext';



const Verify = () => {
    const [otp, setOtp] = useState("")

    const {verifyUser,btnLoading} =UserData();
    const navigate = useNavigate();
    const {fetchChats}= ChatData();
    const submitHandler = (e) => {
        e.preventDefault();
        verifyUser(Number(otp),navigate,fetchChats);
    }

    return (
            <div className='relative z-10 flex justify-center items-center min-h-screen w-full p-4'>
                <form 
                    className='bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full md:w-[450px] border border-white/20 transform transition-all duration-300 hover:scale-[1.02]'
                    onSubmit={submitHandler}
                >
                    <h2 className='text-3xl mb-6 text-white font-bold text-center'>Verify Your Account</h2>
                    <div className='mb-6'>
                        <label className='block text-white/90 mb-2 text-sm font-medium' htmlFor='otp'>
                            Enter OTP
                        </label>
                        <input 
                            value={otp}  
                            onChange={(e)=>setOtp(e.target.value)} 
                            type="number"  
                            id="otp"  
                            className='bg-white/10 border border-white/20 p-3 w-full rounded-lg outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-white/50 transition-all duration-300' 
                            placeholder="Enter the OTP sent to your email"
                            required
                        />
                    </div>
                    <button 
                        className='w-full text-white py-3 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] font-medium shadow-lg shadow-blue-500/20'
                    >
                        {btnLoading ? <LoadingSpinner/>: "Verify"}
                    </button>
                </form>
            </div>
    )
}

export default Verify