import React from "react";
import SubButton from "../components/SubButton";
import SubButton2 from "../components/SubButton2";

export default function Result() {
  return (
    <div className="bg-purple-300 min-h-screen flex flex-col justify-center items-center">
      <div className="relative w-[360px] h-[800px] flex flex-col justify-center items-center">
        <img
          className="absolute"
          src={`${process.env.PUBLIC_URL}/images/bgBlack.png`}
          alt="animals"
        />
        <div className="mt-36 bg-gray-300 w-[312px] h-[234px] z-20 rounded-3xl"></div>
        <div className="z-20 w-[312px] h-[116px] mt-5">
          <div className="font-bold text-3xl text-white"># 초딩입맛</div>
          <div className="font-bold text-md text-white">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur ma
          </div>
        </div>
        <div className="w-[312px] h-[58px] z-20 mt-5">
          <div className="flex flex-grow justify-center items-center">
            <div className="flex flex-col">
              <div className="font-bold text-xl text-white mr-10">
                환상의 입맛 짝꿍
              </div>
              <div className="font-bold text-md text-white">
                #초딩입맛 #할미입맛
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-xl text-white">
                환상의 입맛 짝꿍
              </div>
              <div className="font-bold text-md text-white">
                #초딩입맛 #할미입맛
              </div>
            </div>
          </div>
        </div>
        <div className="z-2 w-[312px] h-[68px] mt-5 flex justify-center items-center">
          <div className="mr-7">
            <SubButton />
          </div>
          <SubButton2 />
        </div>
      </div>
    </div>
  );
}
