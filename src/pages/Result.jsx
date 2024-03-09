import React from "react";
import SubButton from "../components/SubButton";
import SubButton2 from "../components/SubButton2";
import Dummy from "../Dummy.json";

export default function Result({key, flavor, images, desc, goodCombi, badCombi, id}) {
  return (
    <div className="bg-purple-300 min-h-screen flex flex-col justify-center items-center">
          <div
            className="relative w-[360px] h-[800px] flex flex-col justify-center items-center"
            key={key}
          >
            <img
              className="absolute"
              src={`${process.env.PUBLIC_URL}/images/bgBlack.png`}
              alt="animals"
            />

            <img
              src={`${process.env.PUBLIC_URL}/images/${images}.jpeg`}
              className="mt-36 w-[312px] h-[234px] z-20 rounded-3xl"
              alt="animals"
            ></img>

            <div className="z-20 w-[312px] h-[116px] mt-5">
              <div className="font-bold text-3xl text-white">{flavor}</div>
              <div className="font-bold text-md text-white">
                {desc}
              </div>
            </div>
            <div className="w-[312px] h-[58px] z-20 mt-5">
              <div className="flex flex-grow justify-center items-center">
                <div className="flex flex-col">
                  <div className="font-bold text-xl text-white mr-10">
                    환상의 입맛 짝꿍
                  </div>
                  <div className="font-bold text-md text-white">
                    {goodCombi}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="font-bold text-xl text-white">
                    최악의 입맛 짝꿍
                  </div>
                  <div className="font-bold text-md text-white">
                    {badCombi}
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
