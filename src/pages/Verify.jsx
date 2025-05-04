import React, { useState } from "react";
import { UserData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../components/Loading";
import { ChatData } from "../context/ChatContext";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const { verifyUser, btnLoading } = UserData();
  const { fetchChats } = ChatData();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    verifyUser(Number(otp), navigate, fetchChats);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={submitHandler}
        className="p-8 h-[350px] rounded-xl w-xl max-w-l 
        bg-white/5 backdrop-blur-md 
        shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_40px_rgba(99,102,241,0.3)] 
        transition-transform duration-500 hover:scale-[1.05]
        flex flex-col justify-between"
      >
        <h2 className="text-2xl text-white text-center font-semibold">Verify OTP</h2>

        <div className="flex flex-col gap-2">
          <label htmlFor="otp" className="text-white text-sm mb-2">
            Enter OTP:
          </label>
          <input
            type="number"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border border-white/30 p-2 rounded bg-transparent text-white 
            outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={btnLoading}
          className=" bg-white/10 hover:bg-white/20 border border-white/30 
          text-white font-medium py-2 px-4 rounded-md 
          transition duration-300 backdrop-blur-md
          hover:shadow-[0_0_10px_rgba(59,130,246,0.4)]
          disabled:opacity-50"
        >
          {btnLoading ? <LoadingSpinner /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Verify;
