"use client";
import LiquidButton from "@/components/LiquidButton";
import MarqueeText from "@/components/MarqueeText";
import React, { useState } from "react";
import { useRouter } from "next/navigation"

type Props = {};

const Home = (props: Props) => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const router = useRouter()
  const handleSubmitRequest = async () => {
    try {
      const response = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to login')
      }
      console.log(JSON.stringify(data));
      router.push("/card");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center bg-black">
      <MarqueeText />
      <div className="flex flex-col items-start justify-center gap-5 p-5 bg-gradient-to-br from-slate-700 via-white/70 to-slate-900 border-2 border-gray-200 shadow-md rounded-md w-[85%] md:w-[30%]">
        <div className="text-black font-extrabold text-2xl mb-6">
          Welcome,
          <br />
          <span className="text-gray-200 font-semibold text-lg">
            Generate your rizz card...
          </span>
        </div>
        <input
          type="text"
          placeholder="SRN/PRN"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          name="username"
          className="w-full h-10 rounded-md border-2 border-gray-800 bg-white shadow-md font-semibold text-sm text-gray-800 px-3 py-2 placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full h-10 rounded-md border-2 border-gray-800 bg-white shadow-md font-semibold text-sm text-gray-800 px-3 py-2 placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />
        <button
          className="w-full h-10 mx-auto mt-5 rounded-md border-2 border-gray-800  shadow-md font-semibold text-lg text-white cursor-pointer active:shadow-none active:translate-x-1 active:translate-y-1 bg-gradient-to-r from-black via-black/60 to-black"
          onClick={handleSubmitRequest}
        >
          Generate card →
        </button>

        {/* <LiquidButton /> */}
      </div>
      <MarqueeText />
    </div>
  );
};

export default Home;
