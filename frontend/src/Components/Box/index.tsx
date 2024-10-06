import React from "react";
import { FaBitcoinSign } from "react-icons/fa6";
import { PiGreaterThanLight } from "react-icons/pi";

const Box = () => {
  return (
    <div className="bg-gray-700 p-8 w-2/4 rounded-md px-4">
      <div className="flex justify-between">
        <span className="text-white text-2xl">0.00</span>
        <div className="flex item-center text-lg text-white bg-black py-2 px-4 gap-2">
          <FaBitcoinSign className="mt-1"/>
          <span>BTC</span>
          <PiGreaterThanLight className="mt-2 text-sm"/>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-white">$0.00</span>
         <span  className="text-white">Balance <span className="text-blue-500">24,240</span></span>
      </div>
    </div>
  );
};

export default Box;
