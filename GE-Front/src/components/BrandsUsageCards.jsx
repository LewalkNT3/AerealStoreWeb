import React from "react";

export default function BrandsUsageCards() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 ">
      <div className="w-[250px] h-[275px] bg-white rounded border border-gray-400 hover:bg-gray-50 cursor-pointer">
        <div className="h-[70px] relative">
          <img
            className="object-cover h-full w-full"
            src="/bg-header-samsung.jpg"
            alt=""
          />
          <img
            className="w-[70px] h-[70px] absolute top-[35px] left-[90px] border border-gray-300"
            src="/samsung-logo.webp"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-xl pt-11">Samsung</h1>
        </div>
        <div className="flex flex-row justify-center items-center pt-8 gap-3">
          <div className="border border-gray-50  w-[55px] flex justify-center items-center">
            <img
              className="w-[30px] h-auto border"
              src="/telefono-prueba.png"
            />
          </div>
          <div className="border border-gray-300  w-[55px] flex justify-center items-center">
            <img className="w-[30px] h-auto " src="/telefono-prueba.png" />
          </div>
          <div className="border border-gray-300  w-[55px] flex justify-center items-center">
            <img className="w-[30px] h-auto  " src="/telefono-prueba.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
