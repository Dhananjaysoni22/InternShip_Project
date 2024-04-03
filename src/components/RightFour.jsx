import React from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

const RightFour = () => {
  return (
    <div className="lg:pl-[300px] md:pl-[200px] pl-2">
      <p className="pt-4 font-bold pb-4">Data delete history</p>
      <div>
        <table className=" lg:w-[760px] md:w-[550px] w-[100%] mb-8 font-semibold ">
          <th className="border border-gray-300 flex justify-around rounded-[5px] shadow-sm shadow-gray-400 lg:text-xl md:text-xl" >
            <tr className="pr-4">Request Date <KeyboardArrowUpIcon/> </tr>
            <tr className="pr-4">Requested by <UnfoldMoreIcon/></tr>
            <tr className="pr-4">Status <UnfoldMoreIcon/></tr>
          </th>
        </table>
        <hr className="w-[760px]"/>
      </div>
    </div>
  );
};

export default RightFour;
