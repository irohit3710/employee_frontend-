import React from "react";
import Pieplot from "./plots/Pieplot";
import AvgSalary from "./plots/AvgSalary";
import { useNavigate } from "react-router";
// import AgeDistribution from "./plots/AgeDistribution";

const Stats = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-[100%]">
      <div
        style={{
          alignSelf: "center",
          justifySelf: "center",
          fontSize: "20px",
          fontWeight: "bolder",
          color: "green",
        }}
      >
        <div>
          <h1 className="relative p-0 m-0 font-[300] text-[40px] text-[#080808]">Stats</h1>
          <button className="p-2 bg-green-600 text-white rounded-md hover:bg-green-800 duration-300" onClick={()=>{navigate('/')}}>Go back</button>
        </div>
      </div>
      <Pieplot />
      <br />
      <AvgSalary/>
      {/* <br /> */}
      {/* <AgeDistribution/> */}
    </div>
  );
};

export default Stats;
