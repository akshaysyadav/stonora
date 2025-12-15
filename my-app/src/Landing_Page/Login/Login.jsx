import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full 
      bg-gradient-to-b from-[#062E24] via-[#053D30] to-[#041F18]
      flex items-center justify-center px-4 py-10">

      {/* CARD */}
      <div className="w-full max-w-md rounded-3xl p-8 sm:p-10
        bg-gradient-to-br from-[#0A4A3B] via-[#083D31] to-[#062E24]
        border border-[#0D392E]/60 shadow-2xl shadow-[#02140F]/60
        backdrop-blur-xl relative">

        <div className="absolute inset-0 bg-[#0D392E]/20 blur-xl rounded-3xl"></div>

        <div className="relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src="/media/logo.png" alt="stonora logo" className="h-16 drop-shadow-lg" />
          </div>

          {/* Heading */}
          <h1 className="text-center text-2xl font-bold text-[#F5D49B] drop-shadow-sm mb-8">
            Login to your account
          </h1>

          {/* Email / Phone */}
          <label className="text-[#F5D49B] font-medium text-sm">Email / Phone</label>
          <div className="flex items-center bg-[#E4B04F]/10 border border-[#E4B04F]/30 
            rounded-xl px-3 py-3 mt-2 shadow-inner">
            <AiOutlineMail className="text-[#F5D49B]" size={20} />
            <input
              type="text"
              placeholder="Enter email or phone"
              className="ml-3 w-full bg-transparent outline-none text-white placeholder-white/70"
            />
          </div>

          {/* Password */}
          <label className="text-[#F5D49B] font-medium text-sm mt-5 block">Password</label>
          <div className="flex items-center bg-[#E4B04F]/10 border border-[#E4B04F]/30 
            rounded-xl px-3 py-3 mt-2 shadow-inner">
            <AiOutlineLock className="text-[#F5D49B]" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="ml-3 w-full bg-transparent outline-none text-white placeholder-white/70"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="text-xs text-[#E4B04F] font-semibold"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Forgot Password */}
          <p className="text-right text-[#E4B04F] text-sm mt-3 hover:text-[#C6922E] cursor-pointer">
            Forgot Password?
          </p>

          {/* Button */}
          <button className="w-full py-3 mt-6 rounded-xl bg-[#E4B04F] hover:bg-[#C6922E]
            text-[#062E24] font-bold shadow-lg hover:shadow-[#E4B04F]/40 transition">
            Login
          </button>

          {/* Signup */}
          <p className="text-center text-sm text-[#F5D49B] mt-6">
            Don’t have an account?
            <span className="ml-1 text-[#E4B04F] font-bold cursor-pointer hover:text-[#C6922E]">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
