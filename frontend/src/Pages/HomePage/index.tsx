import React from "react";
import Header from "../../Components/Header";
import Table from "../../Components/Table";
import { CgShapeHexagon } from "react-icons/cg";
import Box from "../../Components/Box";
import Button from "../../Components/Button";

const HomePage = () => {
  return (
    <div>
      <img
        src="images/download.jpeg"
        alt="bg-image"
        className="w-full h-[1200px] relative"
      />
      <div className="absolute w-11/12 ml-14 top-1">
        <Header />
        <div className="text-center my-8 flex flex-col gap-4">
          <h2 className="text-white text-5xl w-2/4 mx-auto">
            Easy send and Request Crypto.
          </h2>
          <p className="text-white text-lg w-2/4 mx-auto">
            Bring blockchain to the people. Solana supports experiences for the
            power users, new consumers, and everyone in between.
          </p>
        </div>
        <Table />
        <div className="bg-black border bg-opacity-70 mt-12 border-white rounded-md p-4 w-full mt-4 flex flex-col gap-4" >
          <div className="flex item-center justify-between">
            <span className="text-white text-base">SWAP TOKEN</span>
            <CgShapeHexagon className="text-white text-2xl" />
          </div>
          <div className="flex item-center gap-2">
            <Box />
            <Box />
          </div>
          <Button className="bg-mainColor text-white rounded-tl-md rounded-br-md w-[20%] ml-[27rem]" padding="p-4" text="SWAP TOKEN"/>
          <div className="flex item-center justify-between">
            <div className="flex flex-col">
              <span className="text-white">1 BTC = 32.4039 ETH</span>
              <span className="text-blue-500">Five Exchane</span>
            </div>
            <span className="text-white">Updates 4s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
