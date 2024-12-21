"use client";
import GamifiedProfileCard from "@/components/GamifiedCard";
import MarqueeText from "@/components/MarqueeText";
import { useEffect, useState } from "react";

export default function Card() {
  const [student, setStudent] = useState();

  const fetchStudentData = async() =>{
    const respone = await fetch("/api/verify");
    const data = await respone.json();
    console.log(data);
    setStudent(data);
  }
  useEffect(() => {
    fetchStudentData();
  }, []);
  return (
    <div className="flex flex-col h-screen w-full justify-center  bg-black">
      <MarqueeText />
      <div className="p-5">
        <GamifiedProfileCard student={student}/>
      </div>
    </div>
  );
}
