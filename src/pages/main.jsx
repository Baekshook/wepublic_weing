import React from "react";
import { Link } from "react-router-dom";
import "./animate.css";
import StartButtons from "../components/StartButtons";

export default function Main() {
  const flavorCheck = "입맛\n첵췤";
  return (
    <div className="bg-purple-300 min-h-screen flex flex-col justify-center items-center">
      <div className="relative w-[360px] h-[800px] flex flex-col justify-center items-center">
        <img
          className="absolute"
          src={`${process.env.PUBLIC_URL}/images/bg.png`}
          alt="animals"
        />
        <div className="card mb-24">
          <div className="bg">
            <div className="font-bold text-7xl justify-center items-center flex ml-3 leading-tight tracking-[15px] whitespace-pre-wrap">
              {flavorCheck}
            </div>
          </div>
          <div className="blob"></div>
        </div>
        <StartButtons></StartButtons>
        <Link to="/worldcup"></Link>
      </div>
    </div>
  );
}
