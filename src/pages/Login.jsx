import { useState } from "react";
import { UserData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../components/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const { loginUser, btnLoading } = UserData();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    loginUser(email, navigate);
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <form
        className="bg-white/10 backdrop-blur-md 
        shadow-[0_4px_20px_rgba(59,130,246,0.4),0_0_20px_rgba(236,72,153,0.3)]
        hover:shadow-[0_6px_25px_rgba(59,130,246,0.6),0_0_25px_rgba(236,72,153,0.5)]
        hover:scale-105 transition-all duration-500 ease-in-out 
        rounded-xl p-8 w-xl max-w-l h-[350px] flex flex-col justify-center"
        onSubmit={submitHandler}
      >
        <h2 className="text-3xl font-semibold text-white text-center mb-6">
          Login
        </h2>

        <div className="mb-6">
          <label className="block text-white text-sm mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-gray-200 border border-white/30 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter your email"
            required
          />
        </div>

        <button
  type="submit"
  disabled={btnLoading}
  className="mt-2 bg-white/10 hover:bg-white/20 border border-white/30 
  text-white font-semibold py-2 px-4 rounded-md 
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

export default Login;
